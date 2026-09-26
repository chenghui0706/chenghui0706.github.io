/**
 * 居銮群侠传 - RPG 对话与任务系统
 */

class DialogueManager {
    constructor() {
        this.dialogueBox = document.getElementById("dialogue-box");
        this.speakerNameEl = document.getElementById("dialogue-speaker");
        this.speakerRoleEl = document.getElementById("dialogue-role");
        this.textContentEl = document.getElementById("dialogue-text");
        this.avatarCanvas = document.getElementById("dialogue-avatar");
        this.actionPromptEl = document.getElementById("dialogue-action-hint");

        this.isActive = false;
        this.currentScript = [];
        this.currentIndex = 0;
        this.isTyping = false;
        this.typewriterInterval = null;
        this.fullCurrentText = "";

        // 任务状态系统
        this.questState = {
            hasMetMaster: false,
            currentQuest: "在校园探索，熟悉銮中环境",
            questDetail: "漫步校园，瞻仰光前堂与校训碑",
            step: "EXPLORE" // EXPLORE -> CUT_HAIR -> RETURN
        };

        this.setupListeners();
    }

    setupListeners() {
        // 点击对话框推进
        if (this.dialogueBox) {
            this.dialogueBox.addEventListener("click", () => this.advance());
        }

        // 键盘推进 (空格或回车)
        window.addEventListener("keydown", (e) => {
            if (this.isActive) {
                if (e.code === "Space" || e.code === "Enter" || e.code === "KeyE") {
                    e.preventDefault();
                    this.advance();
                }
            }
        });
    }

    // 触发与训导主任的对话剧本
    startDisciplineMasterDialogue() {
        if (this.isActive) return;

        if (!this.questState.hasMetMaster) {
            // 初次新手对话（严格按照需求）
            this.currentScript = [
                {
                    speaker: "训导主任",
                    role: "居銮中华中学 · 训导处主任",
                    avatar: "master",
                    text: "同学，你的头发太长了，快去南峇山找隐居的理发师剪头发！"
                },
                {
                    speaker: "銮中男生",
                    role: "初三一班 · 主角",
                    avatar: "player",
                    text: "（摸了摸遮住眉毛的刘海）啊！主任……今早出门太赶忘了修剪。南峇山那么广阔，那位隐居的理发师傅在何处？"
                },
                {
                    speaker: "训导主任",
                    role: "居銮中华中学 · 训导处主任",
                    avatar: "master",
                    text: "相传就在南峇山半山腰的古树茶亭附近！拿着这张【特别出校假单】，剪完头发盖好章再回校上课！"
                }
            ];

            this.onComplete = () => {
                this.questState.hasMetMaster = true;
                this.questState.currentQuest = "✂️ 违规的长发（主线）";
                this.questState.questDetail = "前往南峇山半山腰，寻找隐居的理发大师修剪长发";
                this.questState.step = "CUT_HAIR";

                // 播放完成音效并刷新 HUD
                if (window.sound) window.sound.playQuestUpdate();
                this.updateQuestHUD();
                this.showQuestToast("★ 主线任务已触发：前往南峇山理发！");
            };
        } else {
            // 再次对话提示
            this.currentScript = [
                {
                    speaker: "训导主任",
                    role: "居銮中华中学 · 训导处主任",
                    avatar: "master",
                    text: "怎么还在这磨蹭？从南侧校门出去就是南峇山方向，快去快回，别耽误了下午的联课活动！"
                }
            ];
            this.onComplete = null;
        }

        this.startSequence();
    }

    startSequence() {
        this.isActive = true;
        this.currentIndex = 0;
        this.dialogueBox.classList.add("active");
        if (window.sound) window.sound.playInteract();
        this.renderStep();
    }

    renderStep() {
        const line = this.currentScript[this.currentIndex];
        this.speakerNameEl.textContent = line.speaker;
        this.speakerRoleEl.textContent = line.role || "";
        this.fullCurrentText = line.text;
        this.renderAvatar(line.avatar);

        // 打字机效果逐字输出
        this.textContentEl.textContent = "";
        this.isTyping = true;
        this.actionPromptEl.textContent = "▼ 点击或按 [空格] 继续";

        let charIndex = 0;
        if (this.typewriterInterval) clearInterval(this.typewriterInterval);

        this.typewriterInterval = setInterval(() => {
            if (charIndex < this.fullCurrentText.length) {
                this.textContentEl.textContent += this.fullCurrentText[charIndex];
                if (charIndex % 2 === 0 && window.sound) {
                    window.sound.playTypewriter();
                }
                charIndex++;
            } else {
                clearInterval(this.typewriterInterval);
                this.isTyping = false;
            }
        }, 32);
    }

    // 推进对话
    advance() {
        if (!this.isActive) return;

        // 如果还在逐字打字，点击立即显示完整句子
        if (this.isTyping) {
            clearInterval(this.typewriterInterval);
            this.textContentEl.textContent = this.fullCurrentText;
            this.isTyping = false;
            return;
        }

        this.currentIndex++;
        if (this.currentIndex < this.currentScript.length) {
            this.renderStep();
        } else {
            // 对话结束
            this.endDialogue();
        }
    }

    endDialogue() {
        this.isActive = false;
        this.dialogueBox.classList.remove("active");
        if (this.typewriterInterval) clearInterval(this.typewriterInterval);

        if (this.onComplete) {
            this.onComplete();
            this.onComplete = null;
        }
    }

    // 绘制头像立绘
    renderAvatar(who) {
        const canvas = this.avatarCanvas;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const w = canvas.width;
        const h = canvas.height;

        // 头像背景圆环
        ctx.fillStyle = "#1e272e";
        ctx.fillRect(0, 0, w, h);

        if (who === "master") {
            // 训导主任半身立绘
            // 蓝短袖正装
            ctx.fillStyle = "#74b9ff";
            ctx.beginPath();
            ctx.ellipse(w / 2, h + 10, 36, 26, 0, 0, Math.PI * 2);
            ctx.fill();

            // 领带
            ctx.fillStyle = "#d63031";
            ctx.fillRect(w / 2 - 4, h - 22, 8, 25);

            // 脸部
            ctx.fillStyle = "#fdd0a2";
            ctx.beginPath();
            ctx.arc(w / 2, 42, 22, 0, Math.PI * 2);
            ctx.fill();

            // 教师威严短发
            ctx.fillStyle = "#2d3436";
            ctx.beginPath();
            ctx.arc(w / 2, 34, 23, Math.PI, Math.PI * 2);
            ctx.fill();
            ctx.fillRect(w / 2 - 23, 34, 46, 7);

            // 眼镜
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = 2.5;
            ctx.strokeRect(w / 2 - 17, 38, 13, 8);
            ctx.strokeRect(w / 2 + 4, 38, 13, 8);
            ctx.beginPath();
            ctx.moveTo(w / 2 - 4, 42);
            ctx.lineTo(w / 2 + 4, 42);
            ctx.stroke();

            // 严肃眼神与嘴唇
            ctx.fillStyle = "#000";
            ctx.fillRect(w / 2 - 12, 41, 3, 3);
            ctx.fillRect(w / 2 + 9, 41, 3, 3);
            ctx.fillRect(w / 2 - 5, 54, 10, 2);

        } else {
            // 銮中主角男生立绘 (白衣白裤，稍长帅气发型)
            // 纯白校服衬衫
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.ellipse(w / 2, h + 10, 36, 26, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "#b2bec3";
            ctx.stroke();

            // 红色领带
            ctx.fillStyle = "#e84118";
            ctx.beginPath();
            ctx.moveTo(w / 2, 58);
            ctx.lineTo(w / 2 - 5, 78);
            ctx.lineTo(w / 2 + 5, 78);
            ctx.fill();

            // 脸部
            ctx.fillStyle = "#ffeaa7";
            ctx.beginPath();
            ctx.arc(w / 2, 42, 22, 0, Math.PI * 2);
            ctx.fill();

            // 蓬松长刘海黑发
            ctx.fillStyle = "#1e1e24";
            ctx.beginPath();
            ctx.arc(w / 2, 36, 24, Math.PI * 0.9, Math.PI * 2.1);
            ctx.fill();

            // 前额碎发遮眉
            ctx.beginPath();
            ctx.moveTo(w / 2 - 22, 38);
            ctx.lineTo(w / 2 - 8, 48);
            ctx.lineTo(w / 2 + 2, 40);
            ctx.lineTo(w / 2 + 15, 50);
            ctx.lineTo(w / 2 + 23, 36);
            ctx.fill();

            // 清澈学生眼睛与微笑
            ctx.fillStyle = "#2d3436";
            ctx.fillRect(w / 2 - 12, 43, 4, 4);
            ctx.fillRect(w / 2 + 8, 43, 4, 4);

            // 尴尬/俏皮小嘴
            ctx.strokeStyle = "#c0392b";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(w / 2, 53, 5, 0, Math.PI);
            ctx.stroke();
        }
    }

    updateQuestHUD() {
        const titleEl = document.getElementById("quest-title");
        const descEl = document.getElementById("quest-desc");
        const hairEl = document.getElementById("stat-hair");

        if (titleEl) titleEl.textContent = this.questState.currentQuest;
        if (descEl) descEl.textContent = this.questState.questDetail;
        if (hairEl && this.questState.step === "CUT_HAIR") {
            hairEl.innerHTML = `头发长度: <span style="color:#ff6b6b; font-weight:bold;">12cm (违规待理)</span>`;
        }
    }

    showQuestToast(message) {
        const toast = document.getElementById("quest-toast");
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 4000);
    }
}

window.DialogueManager = DialogueManager;
