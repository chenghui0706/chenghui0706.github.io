/**
 * 居銮群侠传 (3D Crossy Road 升级版) - 主控制器与游戏全循环逻辑
 * 核心机制：
 * 1. 右上角实时积分表与循环过马路
 * 2. 叠书系统（0-10本）与真实移速敏捷度负重惩罚
 * 3. 5阶段积分动态难度解锁（汽车 -> 摩托 -> 斜跨恐龙 -> 3车道巨型恐龙 -> 特技混战）
 * 4. 可爱血条扣减、书本四散与【同学升天堂】飞升特效
 */

class CrossyKluangGame {
    constructor() {
        this.container = document.getElementById("game-container");
        this.gameState = "PLAYING"; // PLAYING, DYING, GAMEOVER

        // 积分与叠书负重系统
        this.score = 0;
        this.booksHeld = 0;
        this.difficulty = "hard"; // 默认为 "hard"，可选 "easy"

        // 玩家网格与跳跃参数
        this.playerGrid = { x: 0, z: 6.0 };
        this.targetPos = new THREE.Vector3(0, 0, 6.0);
        this.startPos = new THREE.Vector3(0, 0, 6.0);
        this.isHopping = false;
        this.hopProgress = 0;
        this.currentFacing = Math.PI; // 初始面向北方 (校门)

        // 基础轻快跳跃周期 0.16s，随书本累加至 0.40s
        this.baseHopDuration = 0.16;
        this.hopDuration = 0.16;

        // 地面散落书本微粒组
        this.droppedBooks = [];

        this.initThree();
        this.buildEnvironment();
        this.setupEntities();
        this.setupConfetti();
        this.setupInputs();
        this.updateScoreboard();

        this.clock = new THREE.Clock();
        requestAnimationFrame((t) => this.loop(t));
    }

    initThree() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xa2d5f2);
        this.scene.fog = new THREE.FogExp2(0xa2d5f2, 0.012);

        const aspect = this.container.clientWidth / this.container.clientHeight;
        const d = 13.5;
        this.camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);

        this.cameraOffset = new THREE.Vector3(16, 22, 16);
        this.camera.position.copy(this.cameraOffset);
        this.camera.lookAt(0, 0, 0);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.container.appendChild(this.renderer.domElement);

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x555555, 0.85);
        this.scene.add(hemiLight);

        this.sunLight = new THREE.DirectionalLight(0xfff8e7, 0.95);
        this.sunLight.position.set(20, 35, 15);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.mapSize.width = 2048;
        this.sunLight.shadow.mapSize.height = 2048;
        this.sunLight.shadow.camera.left = -28;
        this.sunLight.shadow.camera.right = 28;
        this.sunLight.shadow.camera.top = 28;
        this.sunLight.shadow.camera.bottom = -28;
        this.scene.add(this.sunLight);

        window.addEventListener("resize", () => this.onResize());
    }

    onResize() {
        const aspect = this.container.clientWidth / this.container.clientHeight;
        const d = 13.5;
        this.camera.left = -d * aspect;
        this.camera.right = d * aspect;
        this.camera.top = d;
        this.camera.bottom = -d;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    buildEnvironment() {
        // 4 条沥青车道 (Z = -3.0 到 5.0)
        const roadGeo = new THREE.BoxGeometry(76, 0.2, 8.0);
        const roadMat = new THREE.MeshLambertMaterial({ color: 0x2f3640, flatShading: true });
        const road = new THREE.Mesh(roadGeo, roadMat);
        road.position.set(0, -0.1, 1.0);
        road.receiveShadow = true;
        this.scene.add(road);

        // 车道白色分割虚线
        const laneZDividers = [3.0, 1.0, -1.0];
        laneZDividers.forEach(zPos => {
            for (let x = -35; x <= 35; x += 3.2) {
                const stripe = VoxelModels.createBlock(1.6, 0.04, 0.16, 0xffffff, x, 0.02, zPos, false);
                this.scene.add(stripe);
            }
        });

        // 斑马线
        for (let z = -2.6; z <= 4.6; z += 1.2) {
            const zebra = VoxelModels.createBlock(3.6, 0.03, 0.55, 0xecf0f1, 0, 0.02, z, false);
            this.scene.add(zebra);
        }

        // 起点安全人行道 (Z = 5.0 到 10.0)
        const startPaveGeo = new THREE.BoxGeometry(76, 0.35, 5.0);
        const startPaveMat = new THREE.MeshLambertMaterial({ color: 0xd2dae2, flatShading: true });
        const startPave = new THREE.Mesh(startPaveGeo, startPaveMat);
        startPave.position.set(0, -0.05, 7.5);
        startPave.receiveShadow = true;
        this.scene.add(startPave);

        const startGrass = VoxelModels.createBlock(76, 0.3, 4.0, 0x4cd137, 0, -0.05, 12.0);
        this.scene.add(startGrass);

        // 北侧校门前红砖广场
        const schoolPlazaGeo = new THREE.BoxGeometry(76, 0.4, 8.0);
        const schoolPlazaMat = new THREE.MeshLambertMaterial({ color: 0xc0392b, flatShading: true });
        const schoolPlaza = new THREE.Mesh(schoolPlazaGeo, schoolPlazaMat);
        schoolPlaza.position.set(0, -0.02, -7.0);
        schoolPlaza.receiveShadow = true;
        this.scene.add(schoolPlaza);

        // 銮中校门牌坊
        this.schoolGate = VoxelModels.createSchoolGate();
        this.schoolGate.position.set(0, 0, -6.5);
        this.scene.add(this.schoolGate);
    }

    setupEntities() {
        this.player = VoxelModels.createPlayer();
        this.player.position.set(this.playerGrid.x, 0, this.playerGrid.z);
        this.player.rotation.y = this.currentFacing;
        this.scene.add(this.player);

        this.disciplineMaster = VoxelModels.createDisciplineMaster();
        this.disciplineMaster.position.set(2.4, 0, -5.2);
        this.disciplineMaster.rotation.y = 0;
        this.scene.add(this.disciplineMaster);

        this.traffic = new TrafficManager(this.scene);
    }

    setupConfetti() {
        this.confettiGroup = new THREE.Group();
        this.scene.add(this.confettiGroup);
        this.confettiPieces = [];

        const colors = [0xf1c40f, 0xe74c3c, 0x3498db, 0x2ecc71, 0x9b59b6, 0xe67e22];
        for (let i = 0; i < 90; i++) {
            const size = 0.2 + Math.random() * 0.2;
            const geo = new THREE.PlaneGeometry(size, size * 1.5);
            const mat = new THREE.MeshBasicMaterial({
                color: colors[Math.floor(Math.random() * colors.length)],
                side: THREE.DoubleSide
            });
            const piece = new THREE.Mesh(geo, mat);
            piece.visible = false;
            this.confettiGroup.add(piece);
            this.confettiPieces.push({
                mesh: piece,
                vel: new THREE.Vector3(),
                rotVel: new THREE.Vector3()
            });
        }
    }

    launchConfetti() {
        this.confettiPieces.forEach(p => {
            p.mesh.visible = true;
            p.mesh.position.set(
                (Math.random() - 0.5) * 14,
                7.0 + Math.random() * 4,
                -5.0 + (Math.random() - 0.5) * 5
            );
            p.vel.set(
                (Math.random() - 0.5) * 4,
                -(1.5 + Math.random() * 2.0),
                (Math.random() - 0.5) * 4
            );
            p.rotVel.set(Math.random() * 8, Math.random() * 8, Math.random() * 8);
        });
    }

    setupInputs() {
        window.addEventListener("keydown", (e) => {
            if (this.gameState !== "PLAYING") return;
            if (window.sound) window.sound.ensureContext();

            let dx = 0;
            let dz = 0;
            let facing = this.currentFacing;

            if (e.code === "KeyW" || e.code === "ArrowUp") {
                dz = -2.0;
                facing = Math.PI;
            } else if (e.code === "KeyS" || e.code === "ArrowDown") {
                dz = 2.0;
                facing = 0;
            } else if (e.code === "KeyA" || e.code === "ArrowLeft") {
                dx = -1.8;
                facing = -Math.PI / 2;
            } else if (e.code === "KeyD" || e.code === "ArrowRight") {
                dx = 1.8;
                facing = Math.PI / 2;
            }

            if (dx !== 0 || dz !== 0) {
                this.requestHop(dx, dz, facing);
            }
        });

        // 难度切换按钮监听
        document.getElementById("diff-easy-btn")?.addEventListener("click", () => this.setDifficulty("easy"));
        document.getElementById("diff-hard-btn")?.addEventListener("click", () => this.setDifficulty("hard"));

        document.getElementById("restart-btn")?.addEventListener("click", () => this.restartGame());
    }

    // 设置游戏难度
    setDifficulty(diff) {
        this.difficulty = diff === "easy" ? "easy" : "hard";
        this.traffic.setDifficulty(this.difficulty);

        const btnEasy = document.getElementById("diff-easy-btn");
        const btnHard = document.getElementById("diff-hard-btn");

        if (this.difficulty === "easy") {
            btnEasy?.classList.add("active");
            btnHard?.classList.remove("active");
            this.showPassToast("已切换至【简单模式】(车速降低 50%)");
        } else {
            btnHard?.classList.add("active");
            btnEasy?.classList.remove("active");
            this.showPassToast("已切换至【难模式】(标准挑战车速)");
        }

        this.updateScoreboard();
    }

    // 核心跳跃：带有叠书负重减速逻辑
    requestHop(dx, dz, facing) {
        if (this.isHopping) return;

        const nextX = Math.max(-14, Math.min(14, this.playerGrid.x + dx));
        const nextZ = Math.max(-5.2, Math.min(7.0, this.playerGrid.z + dz));

        this.startPos.copy(this.player.position);
        this.targetPos.set(nextX, 0, nextZ);
        this.playerGrid.x = nextX;
        this.playerGrid.z = nextZ;

        this.currentFacing = facing;
        this.player.rotation.y = facing;

        // 计算灵敏度惩罚：书越多，跳跃耗时越长越沉重！
        this.hopDuration = this.baseHopDuration + Math.min(this.booksHeld, 10) * 0.024;

        this.isHopping = true;
        this.hopProgress = 0;

        const weightRatio = Math.min(this.booksHeld, 10) / 10;
        if (window.sound) window.sound.playHop(weightRatio);

        this.updateHUDProgress();
    }

    // 更新右上角仪表盘
    updateScoreboard() {
        const scoreEl = document.getElementById("score-counter");
        const bookEl = document.getElementById("book-counter");
        const speedEl = document.getElementById("speed-indicator");
        const tierEl = document.getElementById("tier-indicator");

        if (scoreEl) scoreEl.textContent = this.score;
        if (bookEl) bookEl.textContent = `${this.booksHeld} / 10 本`;

        const speedPct = Math.max(40, Math.round(100 - this.booksHeld * 6));
        if (speedEl) {
            speedEl.textContent = `${speedPct}%`;
            speedEl.style.color = this.booksHeld >= 8 ? "#e74c3c" : (this.booksHeld >= 4 ? "#f39c12" : "#2ecc71");
        }

        // 当前阶梯提示 (区分简单与难模式)
        if (tierEl) {
            if (this.difficulty === "easy") {
                if (this.score <= 1) {
                    tierEl.textContent = "【简单】0-1分：普通汽车 (减速50%)";
                    tierEl.style.color = "#2ecc71";
                } else if (this.score === 2) {
                    tierEl.textContent = "【简单】2分：新增狂飙摩托 (减速50%)";
                    tierEl.style.color = "#f1c40f";
                } else if (this.score <= 4) {
                    tierEl.textContent = "【简单】3-4分：新增斜跨小恐龙";
                    tierEl.style.color = "#e67e22";
                } else if (this.score <= 9) {
                    tierEl.textContent = "【简单】5-9分：⚠️ 3车道巨型大恐龙出没！";
                    tierEl.style.color = "#e74c3c";
                } else {
                    tierEl.textContent = "【简单】10分+：🔥 全要素大混战+特技动作！";
                    tierEl.style.color = "#9b59b6";
                }
            } else {
                if (this.score <= 2) {
                    tierEl.textContent = "【难】0-2分：普通汽车 (标准车速)";
                    tierEl.style.color = "#3498db";
                } else if (this.score <= 5) {
                    tierEl.textContent = "【难】3-5分：新增狂飙摩托";
                    tierEl.style.color = "#f1c40f";
                } else if (this.score <= 9) {
                    tierEl.textContent = "【难】6-9分：新增斜跨小恐龙";
                    tierEl.style.color = "#e67e22";
                } else if (this.score <= 15) {
                    tierEl.textContent = "【难】10-15分：⚠️ 3车道巨型大恐龙出没！";
                    tierEl.style.color = "#e74c3c";
                } else {
                    tierEl.textContent = "【难】16分+：🔥 全要素大混战+特技动作！";
                    tierEl.style.color = "#9b59b6";
                }
            }
        }
    }

    updateHUDProgress() {
        const laneEl = document.getElementById("hud-lane-status");
        if (!laneEl) return;
        const z = this.playerGrid.z;
        if (z >= 5.0) {
            laneEl.textContent = "起点安全人行道";
            laneEl.style.color = "#2ecc71";
        } else if (z > 3.0) {
            laneEl.textContent = "第 4 车道 (飙车摩托高发)";
            laneEl.style.color = "#e74c3c";
        } else if (z > 1.0) {
            laneEl.textContent = "第 3 车道 (向左行驶)";
            laneEl.style.color = "#f39c12";
        } else if (z > -1.0) {
            laneEl.textContent = "第 2 车道 (向右行驶)";
            laneEl.style.color = "#f1c40f";
        } else if (z > -3.0) {
            laneEl.textContent = "第 1 车道 (向左行驶)";
            laneEl.style.color = "#e67e22";
        } else {
            laneEl.textContent = "到达校门！即将开启下一轮";
            laneEl.style.color = "#2ecc71";
        }
    }

    // 成功过马路 1 次：积分+1，书本+1，循环重置起点
    handleSuccessfulCrossing() {
        this.gameState = "TRANSITION";

        this.score += 1;
        if (this.booksHeld < 10) {
            this.booksHeld += 1;
        }

        // 同步手部书本外观
        this.player.userData.setBookCount(this.booksHeld);

        // 同步交通难度阶梯
        this.traffic.setScore(this.score);

        // 刷新仪表盘
        this.updateScoreboard();

        // 播放奖励音效与彩带
        if (window.sound) window.sound.playPassSuccess();
        this.disciplineMaster.userData.isCheering = true;
        this.launchConfetti();

        // 弹出通关小横幅
        this.showPassToast(`🎉 成功抵校！积分 +1 (当前 ${this.score} 分)，手上又多了 1 本书！`);

        // 0.9 秒后自动无缝回转至起点，携带累积书本继续过马路
        setTimeout(() => {
            if (this.gameState !== "TRANSITION") return;

            this.playerGrid = { x: 0, z: 6.0 };
            this.player.position.set(0, 0, 6.0);
            this.targetPos.set(0, 0, 6.0);
            this.startPos.set(0, 0, 6.0);
            this.currentFacing = Math.PI;
            this.player.rotation.y = this.currentFacing;
            this.isHopping = false;

            this.disciplineMaster.userData.isCheering = false;
            this.confettiPieces.forEach(p => p.mesh.visible = false);

            this.updateHUDProgress();
            this.gameState = "PLAYING";
        }, 950);
    }

    showPassToast(text) {
        const toast = document.getElementById("pass-toast");
        if (!toast) return;
        toast.textContent = text;
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2200);
    }

    // 散落书本掉落到马路上
    dropBooksToGround() {
        for (let i = 0; i < this.booksHeld; i++) {
            const bookGeo = new THREE.BoxGeometry(0.55, 0.08, 0.44);
            const bookMat = new THREE.MeshLambertMaterial({
                color: [0x2980b9, 0xc0392b, 0x27ae60, 0xf39c12, 0x8e44ad][i % 5],
                flatShading: true
            });
            const b = new THREE.Mesh(bookGeo, bookMat);
            b.position.copy(this.player.position);
            b.position.y += 0.8 + i * 0.1;
            b.position.x += (Math.random() - 0.5) * 0.8;
            b.position.z += (Math.random() - 0.5) * 0.8;

            this.scene.add(b);
            this.droppedBooks.push({
                mesh: b,
                vel: new THREE.Vector3((Math.random() - 0.5) * 8, 4 + Math.random() * 4, (Math.random() - 0.5) * 8),
                rotVel: new THREE.Vector3(Math.random() * 10, Math.random() * 10, Math.random() * 10)
            });
        }
    }

    // 核心碰撞死亡：【搞笑弹飞 + 可爱血条扣空 + 同学升天堂】
    handleCollisionGameOver(vehicle) {
        this.gameState = "DYING";

        // 1. 车辆被强力弹飞
        this.traffic.triggerDeflect(vehicle, this.player.position);

        // 2. 扣除可爱血条 (UI 动画)
        const hpContainer = document.getElementById("hp-bar-widget");
        const hpFill = document.getElementById("hp-fill");
        if (hpContainer && hpFill) {
            hpContainer.classList.add("show");
            hpFill.style.width = "0%";
        }
        if (window.sound) window.sound.playHpDrain();

        // 3. 散落书本
        this.dropBooksToGround();

        // 4. 变身可爱小天使升天
        this.player.userData.setAngelMode(true);
        if (window.sound) window.sound.playAngelAscension();

        // 2.2 秒后弹出游戏结束结算弹窗
        setTimeout(() => {
            this.gameState = "GAMEOVER";
            const modal = document.getElementById("gameover-modal");
            const finalScoreEl = document.getElementById("final-score");
            const finalBooksEl = document.getElementById("final-books");
            const funnyCommentEl = document.getElementById("funny-comment");

            if (finalScoreEl) finalScoreEl.textContent = this.score;
            if (finalBooksEl) finalBooksEl.textContent = this.booksHeld;
            if (funnyCommentEl) {
                if (this.booksHeld >= 10) {
                    funnyCommentEl.textContent = "双手捧着10本沉甸甸的大书，走得实在太慢啦……";
                } else if (this.score >= 10) {
                    funnyCommentEl.textContent = "遭遇了3车道巨型恐龙，虽败犹荣！";
                } else {
                    funnyCommentEl.textContent = "车流湍急，下次看准时机再冲锋！";
                }
            }
            if (modal) modal.classList.add("show");
        }, 2200);
    }

    restartGame() {
        document.getElementById("gameover-modal")?.classList.remove("show");
        const hpContainer = document.getElementById("hp-bar-widget");
        const hpFill = document.getElementById("hp-fill");
        if (hpContainer && hpFill) {
            hpContainer.classList.remove("show");
            hpFill.style.width = "100%";
        }

        // 清空地面散落书本
        this.droppedBooks.forEach(b => this.scene.remove(b.mesh));
        this.droppedBooks = [];

        this.confettiPieces.forEach(p => p.mesh.visible = false);
        this.disciplineMaster.userData.isCheering = false;

        // 重置分数与书本
        this.score = 0;
        this.booksHeld = 0;
        this.player.userData.setBookCount(0);
        this.player.userData.setAngelMode(false);

        this.traffic.reset();
        this.traffic.setScore(0);

        this.playerGrid = { x: 0, z: 6.0 };
        this.player.position.set(0, 0, 6.0);
        this.targetPos.set(0, 0, 6.0);
        this.startPos.set(0, 0, 6.0);
        this.currentFacing = Math.PI;
        this.player.rotation.y = this.currentFacing;
        this.player.scale.set(1, 1, 1);
        this.isHopping = false;

        this.updateScoreboard();
        this.updateHUDProgress();
        this.gameState = "PLAYING";
    }

    update(dt) {
        // (A) 处理跳跃抛物线与书本微晃动
        if (this.isHopping) {
            this.hopProgress += dt / this.hopDuration;
            if (this.hopProgress >= 1) {
                this.hopProgress = 1;
                this.isHopping = false;
                this.player.position.copy(this.targetPos);
                this.player.scale.set(1, 1, 1);
                if (this.player.userData.bookStack) {
                    this.player.userData.bookStack.rotation.z = 0;
                }
            } else {
                const p = this.hopProgress;
                this.player.position.lerpVectors(this.startPos, this.targetPos, p);
                this.player.position.y = Math.sin(p * Math.PI) * 0.85;

                const squish = Math.sin(p * Math.PI);
                this.player.scale.y = 1.0 + squish * 0.25;
                this.player.scale.x = 1.0 - squish * 0.12;
                this.player.scale.z = 1.0 - squish * 0.12;

                // 随着负重增加，跳跃时胸前的书堆产生轻微摇摆惯性
                if (this.player.userData.bookStack && this.booksHeld > 0) {
                    this.player.userData.bookStack.rotation.z = Math.sin(p * Math.PI * 2) * (0.04 + this.booksHeld * 0.012);
                }
            }
        }

        // (B) 刷新交通管理器
        this.traffic.update(dt);

        // (C) 摄像机跟随
        const targetCamX = this.player.position.x * 0.6 + this.cameraOffset.x;
        const targetCamZ = this.player.position.z * 0.7 + this.cameraOffset.z;
        this.camera.position.x += (targetCamX - this.camera.position.x) * 0.08;
        this.camera.position.z += (targetCamZ - this.camera.position.z) * 0.08;
        this.camera.lookAt(this.player.position.x * 0.5, 0, this.player.position.z * 0.5);

        // (D) 判定碰撞与过关
        if (this.gameState === "PLAYING") {
            const hit = this.traffic.checkCollision(this.player.position, { x: 0.7, z: 0.6 });
            if (hit) {
                this.handleCollisionGameOver(hit);
            } else if (this.playerGrid.z <= -4.2) {
                this.handleSuccessfulCrossing();
            }
        }

        // (E) 【同学升天堂】飞升模拟与翅膀扇动
        if (this.gameState === "DYING") {
            const t = Date.now() / 100;
            // 身体缓缓升空
            this.player.position.y += 2.2 * dt;
            this.player.rotation.y += 1.2 * dt;

            // 纯白天使小翅膀轻柔扇动
            const wL = this.player.userData.wingL;
            const wR = this.player.userData.wingR;
            if (wL && wR) {
                wL.rotation.y = Math.sin(t * 1.5) * 0.45;
                wR.rotation.y = -Math.sin(t * 1.5) * 0.45;
            }

            // 神圣金色光环上下微浮
            const halo = this.player.userData.haloRing;
            if (halo) {
                halo.position.y = 2.25 + Math.sin(t) * 0.08;
            }

            // 模拟散落书本掉落到地面反弹
            this.droppedBooks.forEach(b => {
                b.vel.y -= 25.0 * dt;
                b.mesh.position.addScaledVector(b.vel, dt);
                b.mesh.rotation.x += b.rotVel.x * dt;
                b.mesh.rotation.y += b.rotVel.y * dt;
                if (b.mesh.position.y < 0.1) {
                    b.mesh.position.y = 0.1;
                    b.vel.y = -b.vel.y * 0.4;
                    b.vel.x *= 0.7;
                    b.vel.z *= 0.7;
                }
            });
        }

        // (F) 训导主任双手欢庆动画
        if (this.disciplineMaster.userData.isCheering) {
            const t = Date.now() / 150;
            const armL = this.disciplineMaster.userData.armL;
            const armR = this.disciplineMaster.userData.armR;
            if (armL && armR) {
                armL.rotation.z = Math.PI - 0.3 + Math.sin(t) * 0.35;
                armR.rotation.z = -Math.PI + 0.3 - Math.sin(t) * 0.35;
                armL.rotation.x = Math.cos(t) * 0.2;
                armR.rotation.x = Math.cos(t) * 0.2;
            }
            this.disciplineMaster.position.y = Math.abs(Math.sin(t * 1.5)) * 0.25;
        }

        // (G) 彩带
        this.confettiPieces.forEach(p => {
            if (p.mesh.visible) {
                p.mesh.position.addScaledVector(p.vel, dt);
                p.mesh.rotation.x += p.rotVel.x * dt;
                p.mesh.rotation.y += p.rotVel.y * dt;
                if (p.mesh.position.y < 0) {
                    p.mesh.position.y = 8 + Math.random() * 4;
                }
            }
        });
    }

    loop(currentTime) {
        const dt = Math.min(this.clock.getDelta(), 0.1);
        this.update(dt);
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame((t) => this.loop(t));
    }
}

window.addEventListener("DOMContentLoaded", () => {
    window.crossyGame = new CrossyKluangGame();
});
