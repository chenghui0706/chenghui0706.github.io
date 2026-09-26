/**
 * 居銮群侠传 (3D Crossy Road 版) - Web Audio API 音效生成器
 * 升级版：加入受击可爱血条碎裂音、天使升天圣乐竖琴音、巨型恐龙震撼踏步音
 */

class SoundSystem {
    constructor() {
        this.ctx = null;
        this.muted = false;
        this.isInitialized = false;
        this.lastHopTime = 0;
        this.masterGain = null;
    }

    init() {
        if (this.isInitialized) return;
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.value = 1.35;
            this.masterGain.connect(this.ctx.destination);
            this.isInitialized = true;
        } catch (e) {
            console.warn("Web Audio API not supported", e);
        }
    }

    ensureContext() {
        if (!this.ctx) this.init();
        if (this.ctx && this.ctx.state === 'suspended') {
            return this.ctx.resume().catch(e => console.warn("Audio could not start", e));
        }
        return Promise.resolve();
    }

    toggleMute() {
        this.muted = !this.muted;
        return this.muted;
    }

    // 1. 果冻跳跃声 (随书本增多音调略微变沉)
    playHop(weightRatio = 0) {
        if (this.muted) return;
        this.ensureContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // 负重越重，音调越低沉
        const startFreq = 280 - weightRatio * 80;
        const endFreq = 540 - weightRatio * 140;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(startFreq, now);
        osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.12);

        gain.gain.setValueAtTime(0.16, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + 0.14);
    }

    // 2. 搞笑弹飞神功音效
    playFlyAway() {
        if (this.muted) return;
        this.ensureContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const thudOsc = this.ctx.createOscillator();
        const thudGain = this.ctx.createGain();
        thudOsc.type = 'triangle';
        thudOsc.frequency.setValueAtTime(150, now);
        thudOsc.frequency.exponentialRampToValueAtTime(40, now + 0.15);
        thudGain.gain.setValueAtTime(0.25, now);
        thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        thudOsc.connect(thudGain);
        thudGain.connect(this.masterGain);
        thudOsc.start(now);
        thudOsc.stop(now + 0.2);

        const flyOsc = this.ctx.createOscillator();
        const flyGain = this.ctx.createGain();
        flyOsc.type = 'sawtooth';
        flyOsc.frequency.setValueAtTime(220, now + 0.05);
        flyOsc.frequency.exponentialRampToValueAtTime(1900, now + 0.6);
        flyGain.gain.setValueAtTime(0.16, now + 0.05);
        flyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
        flyOsc.connect(flyGain);
        flyGain.connect(this.masterGain);
        flyOsc.start(now + 0.05);
        flyOsc.stop(now + 0.65);
    }

    // 3. 可爱受击与血条扣减清空音效
    playHpDrain() {
        if (this.muted) return;
        this.ensureContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        // 快速下坠的三连嘟嘟声
        [320, 240, 160].forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const t = now + idx * 0.07;
            osc.type = 'square';
            osc.frequency.setValueAtTime(freq, t);
            gain.gain.setValueAtTime(0.08, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
            osc.connect(gain);
            gain.connect(this.masterGain);
            osc.start(t);
            osc.stop(t + 0.08);
        });
    }

    // 4. 【同学升天堂】空灵小天使竖琴风铃音 (Angelic Chimes)
    playAngelAscension() {
        if (this.muted) return;
        this.ensureContext();
        if (!this.ctx) return;

        // 空灵高音琶音与微风铃
        const angelNotes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98, 2093.00];
        angelNotes.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const t = this.ctx.currentTime + idx * 0.12;

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, t);

            gain.gain.setValueAtTime(0.06, t);
            gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);

            osc.connect(gain);
            gain.connect(this.masterGain);

            osc.start(t);
            osc.stop(t + 0.9);
        });
    }

    // 5. 巨型大恐龙沉重踏地低音
    playHeavyStomp() {
        if (this.muted) return;
        this.ensureContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(90, now);
        osc.frequency.exponentialRampToValueAtTime(30, now + 0.25);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + 0.3);
    }

    // 6. 成功通关 1 次并获得书本时的清脆升级音
    playPassSuccess() {
        if (this.muted) return;
        this.ensureContext();
        if (!this.ctx) return;

        const notes = [587.33, 739.99, 880.00, 1174.66]; // D5, F#5, A5, D6
        notes.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const t = this.ctx.currentTime + idx * 0.08;

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, t);

            gain.gain.setValueAtTime(0.08, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

            osc.connect(gain);
            gain.connect(this.masterGain);

            osc.start(t);
            osc.stop(t + 0.2);
        });
    }

    // 7. 特技动作触发音 (翻滚 / 恐龙弹簧跳)
    playStunt() {
        if (this.muted) return;
        this.ensureContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.linearRampToValueAtTime(600, now + 0.1);
        osc.frequency.linearRampToValueAtTime(400, now + 0.2);

        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + 0.22);
    }
}

window.sound = new SoundSystem();
