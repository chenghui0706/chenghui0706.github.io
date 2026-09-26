/**
 * 居銮群侠传 (3D Crossy Road 升级版) - 4 车道与巨型大恐龙车流调度管理器
 * 支持双模式切换：
 * 【难】模式（标准速度 1.0x）：
 *   0-2分：普通汽车 | 3-5分：摩托车 | 6-9分：斜跨小恐龙 | 10-15分：3车道巨型大恐龙 | 16分+：全要素大混战+特技
 * 【简单】模式（所有交通工具移动速度降低 50%，0.5x）：
 *   0-1分：普通汽车 | 2分：摩托车 | 3-4分：斜跨小恐龙 | 5-6分：3车道巨型大恐龙 | 10分+：全要素大混战+特技
 */

class TrafficManager {
    constructor(scene) {
        this.scene = scene;
        this.vehicles = [];
        this.score = 0;

        // 难度模式：默认为 "hard"，可选 "easy"
        this.difficulty = "hard";
        this.speedMultiplier = 1.0;

        // 巨型大恐龙专属生成计时器
        this.giantDinoTimer = 11.0;
        this.giantDinoInterval = 14.0;

        // 4 条基础行车道配置
        this.lanes = [
            { id: 1, z: -2.0, direction: -1, spawnTimer: 1.0, spawnInterval: 2.3 },
            { id: 2, z: 0.0,  direction: 1,  spawnTimer: 0.5, spawnInterval: 2.8 },
            { id: 3, z: 2.0,  direction: -1, spawnTimer: 1.4, spawnInterval: 2.5 },
            { id: 4, z: 4.0,  direction: 1,  spawnTimer: 0.8, spawnInterval: 2.0 }
        ];
    }

    setScore(score) {
        this.score = score;
    }

    // 设置难度模式：简单 (50%减速) vs 难 (标准速度)
    setDifficulty(diff) {
        this.difficulty = diff === "easy" ? "easy" : "hard";
        this.speedMultiplier = this.difficulty === "easy" ? 0.5 : 1.0;
    }

    reset() {
        this.vehicles.forEach(v => this.scene.remove(v));
        this.vehicles = [];
        this.giantDinoTimer = 8.0;
    }

    // 根据难度与积分，获取允许生成的载具类型池
    getAllowedTypesForLane(laneId) {
        if (this.difficulty === "easy") {
            // 【简单】模式积分解锁阶梯
            // 0 - 1 分：仅普通汽车
            if (this.score <= 1) {
                return ["car"];
            }
            // 2 分：新增 Mat Rempit 摩托车
            if (this.score === 2) {
                if (laneId === 4 || laneId === 1) {
                    return ["car", "rempit"];
                }
                return ["car"];
            }
            // 3 - 4 分：新增骑小恐龙的小学生
            // 5 分及以上：全要素开放
            return ["car", "rempit", "dino_kid"];
        } else {
            // 【难】模式积分解锁阶梯
            // 0 - 2 分：仅普通汽车
            if (this.score <= 2) {
                return ["car"];
            }
            // 3 - 5 分：新增 Mat Rempit 摩托车
            if (this.score <= 5) {
                if (laneId === 4 || laneId === 1) {
                    return ["car", "rempit"];
                }
                return ["car"];
            }
            // 6 分及以上：新增骑小恐龙的小学生
            return ["car", "rempit", "dino_kid"];
        }
    }

    // 判断当前模式下是否达到解锁巨型大恐龙的积分
    isGiantDinoUnlocked() {
        if (this.difficulty === "easy") {
            return this.score >= 5; // 简单模式 5 分及以上解锁
        }
        return this.score >= 10; // 难模式 10 - 15 分解锁
    }

    // 判断当前模式下是否达到解锁特技动作的积分
    isStuntsUnlocked() {
        if (this.difficulty === "easy") {
            return this.score >= 10; // 简单模式 10 分及以上触发翻滚和高跳
        }
        return this.score >= 16; // 难模式 16 分及以上触发
    }

    // 每帧调度更新
    update(dt) {
        // 1. 各车道常规载具生成定时
        this.lanes.forEach(lane => {
            lane.spawnTimer -= dt;
            if (lane.spawnTimer <= 0) {
                this.spawnVehicle(lane);
                lane.spawnTimer = lane.spawnInterval * (0.8 + Math.random() * 0.6);
            }
        });

        // 2. 巨型大恐龙专属调度 (根据模式门槛)
        if (this.isGiantDinoUnlocked()) {
            this.giantDinoTimer -= dt;
            if (this.giantDinoTimer <= 0) {
                this.spawnGiantDinosaur();
                this.giantDinoTimer = this.giantDinoInterval * (0.85 + Math.random() * 0.4);
            }
        }

        // 3. 遍历更新车辆位置与特技
        for (let i = this.vehicles.length - 1; i >= 0; i--) {
            const v = this.vehicles[i];
            const data = v.userData;

            // 如果被同学【弹飞到外太空】
            if (data.isDeflected) {
                data.vel.y -= 45.0 * dt;
                v.position.addScaledVector(data.vel, dt);
                v.rotation.x += data.rotVel.x * dt;
                v.rotation.y += data.rotVel.y * dt;
                v.rotation.z += data.rotVel.z * dt;

                if (v.position.y < -15 || v.position.y > 60 || Math.abs(v.position.x) > 50) {
                    this.scene.remove(v);
                    this.vehicles.splice(i, 1);
                }
                continue;
            }

            // 常规水平位移 (乘以难度速度系数：简单模式为 50% 移速)
            v.position.x += data.direction * data.speed * this.speedMultiplier * dt;

            // 特殊 1：骑小恐龙的小学生【既可走直线，也可走斜线】
            if (data.type === "dino_kid") {
                data.timeElapsed += dt * this.speedMultiplier;

                if (data.isDiagonal) {
                    const offsetZ = Math.sin(data.timeElapsed * data.diagonalFreq) * data.diagonalAmp;
                    v.position.z = data.initialZ + offsetZ;
                    const turnAngle = Math.cos(data.timeElapsed * data.diagonalFreq) * 0.35;
                    v.rotation.y = (data.direction > 0 ? 0 : Math.PI) + turnAngle * data.direction;
                }

                // 特技动作：高空连续蹦跳
                if (this.isStuntsUnlocked() && data.isStuntHop) {
                    v.position.y = Math.abs(Math.sin(data.timeElapsed * 6.5)) * 1.6;
                }
            }

            // 特殊 2：Mat Rempit 摩托车特技动作 (翻滚 / 翘轮)
            if (data.type === "rempit" && this.isStuntsUnlocked() && data.isStunt) {
                data.stuntTimer += dt;
                v.rotation.z = -0.75 * data.direction + Math.sin(data.stuntTimer * 10) * 0.3;
                v.position.y = Math.abs(Math.sin(data.stuntTimer * 8)) * 1.1;
            }

            // 特殊 3：巨型大恐龙踏步
            if (data.type === "giant_dino") {
                const t = (Date.now() / 220) * this.speedMultiplier;
                if (data.legs) {
                    data.legs[0].rotation.x = Math.sin(t) * 0.35;
                    data.legs[1].rotation.x = -Math.sin(t) * 0.35;
                    data.legs[2].rotation.x = -Math.sin(t) * 0.35;
                    data.legs[3].rotation.x = Math.sin(t) * 0.35;
                }
                if (data.tail) {
                    data.tail.rotation.y = Math.sin(t * 0.8) * 0.3;
                }
            }

            // 出界销毁
            if ((data.direction > 0 && v.position.x > 38) || (data.direction < 0 && v.position.x < -38)) {
                this.scene.remove(v);
                this.vehicles.splice(i, 1);
            }
        }
    }

    // 生成常规车辆
    spawnVehicle(lane) {
        const allowedTypes = this.getAllowedTypesForLane(lane.id);
        const randType = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];

        let vehicle = null;
        if (randType === "rempit") {
            vehicle = VoxelModels.createMatRempit(lane.direction);
            if (this.isStuntsUnlocked() && Math.random() < 0.38) {
                vehicle.userData.isStunt = true;
            }
        } else if (randType === "dino_kid") {
            vehicle = VoxelModels.createDinoKid(lane.direction);
            vehicle.userData.initialZ = lane.z;
            if (this.isStuntsUnlocked() && Math.random() < 0.45) {
                vehicle.userData.isStuntHop = true;
            }
        } else {
            vehicle = VoxelModels.createCar(lane.direction);
        }

        vehicle.userData.direction = lane.direction;
        const startX = lane.direction > 0 ? -32 : 32;
        vehicle.position.set(startX, 0, lane.z);

        this.scene.add(vehicle);
        this.vehicles.push(vehicle);
    }

    // 生成横跨 3 车道的巨型大恐龙
    spawnGiantDinosaur() {
        const dir = Math.random() < 0.5 ? 1 : -1;
        const giantDino = VoxelModels.createGiantDinosaur(dir);
        giantDino.userData.direction = dir;

        const centerZ = Math.random() < 0.5 ? 1.0 : 0.0;
        const startX = dir > 0 ? -34 : 34;

        giantDino.position.set(startX, 0, centerZ);

        if (dir < 0) {
            giantDino.rotation.y = Math.PI;
        }

        this.scene.add(giantDino);
        this.vehicles.push(giantDino);

        if (window.sound) window.sound.playHeavyStomp();
    }

    // AABB 碰撞检测
    checkCollision(playerPos, playerSize) {
        const pMinX = playerPos.x - playerSize.x * 0.42;
        const pMaxX = playerPos.x + playerSize.x * 0.42;
        const pMinZ = playerPos.z - playerSize.z * 0.42;
        const pMaxZ = playerPos.z + playerSize.z * 0.42;

        for (let v of this.vehicles) {
            if (v.userData.isDeflected) continue;

            const vHalfL = v.userData.length * 0.45;
            const vHalfW = v.userData.width * 0.45;

            const vMinX = v.position.x - vHalfL;
            const vMaxX = v.position.x + vHalfL;
            const vMinZ = v.position.z - vHalfW;
            const vMaxZ = v.position.z + vHalfW;

            if (pMaxX > vMinX && pMinX < vMaxX && pMaxZ > vMinZ && pMinZ < vMaxZ) {
                return v;
            }
        }
        return null;
    }

    // 搞笑弹飞神功
    triggerDeflect(vehicle, playerPos) {
        if (!vehicle || vehicle.userData.isDeflected) return;

        vehicle.userData.isDeflected = true;
        if (window.sound) window.sound.playFlyAway();

        const dirX = vehicle.position.x > playerPos.x ? 1 : -1;
        const isGiant = vehicle.userData.type === "giant_dino";
        const upwardSpeed = isGiant ? 35.0 : 45.0;

        vehicle.userData.vel.set(
            dirX * (15.0 + Math.random() * 10.0),
            upwardSpeed + Math.random() * 15.0,
            (Math.random() - 0.5) * 20.0
        );

        vehicle.userData.rotVel.set(
            (Math.random() - 0.5) * 35.0,
            (Math.random() - 0.5) * 45.0,
            (Math.random() - 0.5) * 35.0
        );
    }
}

window.TrafficManager = TrafficManager;
