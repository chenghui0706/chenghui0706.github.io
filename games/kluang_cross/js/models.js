/**
 * 居銮群侠传 (3D Crossy Road 升级版) - Voxel 像素方块模型构建库
 * 包含：
 * 1. 白衣白裤銮中男生（带动态 0-10 本书叠放、双手托书姿态、天使翅膀与神圣光环升天模型）
 * 2. 巨型大恐龙（横跨 3 车道、背载 2 大人 1 小孩）
 * 3. Mat Rempit 摩托车（支持 16 分以上空中翻滚特技）
 * 4. 骑小恐龙的小学生（支持斜线穿梭与 16 分以上高空蹦跳特技）
 * 5. 居銮普通轿车
 * 6. 训导主任与校门牌坊
 */

const VoxelModels = {
    materials: {},

    getMaterial(color, roughness = 0.6) {
        const key = `${color}_${roughness}`;
        if (!this.materials[key]) {
            this.materials[key] = new THREE.MeshLambertMaterial({
                color: color,
                flatShading: true
            });
        }
        return this.materials[key];
    },

    createBlock(w, h, d, color, x = 0, y = 0, z = 0, castShadow = true) {
        const geo = new THREE.BoxGeometry(w, h, d);
        const mesh = new THREE.Mesh(geo, this.getMaterial(color));
        mesh.position.set(x, y, z);
        mesh.castShadow = castShadow;
        mesh.receiveShadow = true;
        return mesh;
    },

    // ==========================================
    // 1. 主角：白衣白裤男生（带叠书与升天天使）
    // ==========================================
    createPlayer() {
        const group = new THREE.Group();

        // 身体 (白色校服衬衫)
        const torso = this.createBlock(0.7, 0.7, 0.45, 0xffffff, 0, 0.95, 0);
        group.add(torso);

        // 红色领带
        const tie = this.createBlock(0.14, 0.42, 0.06, 0xd63031, 0, 0.98, 0.23);
        group.add(tie);

        // 黑色皮带与金扣
        const belt = this.createBlock(0.72, 0.12, 0.47, 0x2d3436, 0, 0.62, 0);
        const buckle = this.createBlock(0.16, 0.12, 0.06, 0xf1c40f, 0, 0.62, 0.24);
        group.add(belt);
        group.add(buckle);

        // 头部
        const head = this.createBlock(0.65, 0.62, 0.62, 0xffd3a5, 0, 1.6, 0);
        group.add(head);

        // 黑色长发
        const hairTop = this.createBlock(0.72, 0.26, 0.7, 0x1e1e24, 0, 1.88, 0);
        const hairBack = this.createBlock(0.72, 0.45, 0.2, 0x1e1e24, 0, 1.6, -0.25);
        const hairBangs = this.createBlock(0.7, 0.2, 0.12, 0x1e1e24, 0, 1.76, 0.32);
        group.add(hairTop);
        group.add(hairBack);
        group.add(hairBangs);

        // 眼睛
        const eyeL = this.createBlock(0.08, 0.1, 0.04, 0x111111, -0.16, 1.58, 0.32);
        const eyeR = this.createBlock(0.08, 0.1, 0.04, 0x111111, 0.16, 1.58, 0.32);
        group.add(eyeL);
        group.add(eyeR);

        // 腿部 (白色长裤 + 黑皮鞋)
        const legLGroup = new THREE.Group();
        legLGroup.position.set(-0.2, 0.55, 0);
        const pantsL = this.createBlock(0.26, 0.55, 0.35, 0xf5f6fa, 0, -0.27, 0);
        const shoeL = this.createBlock(0.26, 0.14, 0.42, 0x111111, 0, -0.5, 0.04);
        legLGroup.add(pantsL);
        legLGroup.add(shoeL);
        group.add(legLGroup);

        const legRGroup = new THREE.Group();
        legRGroup.position.set(0.2, 0.55, 0);
        const pantsR = this.createBlock(0.26, 0.55, 0.35, 0xf5f6fa, 0, -0.27, 0);
        const shoeR = this.createBlock(0.26, 0.14, 0.42, 0x111111, 0, -0.5, 0.04);
        legRGroup.add(pantsR);
        legRGroup.add(shoeR);
        group.add(legRGroup);

        // 手臂组 (支持抱书与升天张开动作)
        const armLGroup = new THREE.Group();
        armLGroup.position.set(-0.44, 1.15, 0);
        const armL = this.createBlock(0.18, 0.5, 0.22, 0xffffff, 0, -0.22, 0);
        const handL = this.createBlock(0.16, 0.14, 0.18, 0xffd3a5, 0, -0.5, 0.06);
        armLGroup.add(armL);
        armLGroup.add(handL);
        group.add(armLGroup);

        const armRGroup = new THREE.Group();
        armRGroup.position.set(0.44, 1.15, 0);
        const armR = this.createBlock(0.18, 0.5, 0.22, 0xffffff, 0, -0.22, 0);
        const handR = this.createBlock(0.16, 0.14, 0.18, 0xffd3a5, 0, -0.5, 0.06);
        armRGroup.add(armR);
        armRGroup.add(handR);
        group.add(armRGroup);

        // ----------------------------------------
        // 动态叠书系统 (双手抱在胸前的书堆)
        // ----------------------------------------
        const bookStackGroup = new THREE.Group();
        bookStackGroup.position.set(0, 0.68, 0.32);
        group.add(bookStackGroup);

        // 精装书本的丰富配色
        const bookColors = [
            0x2980b9, 0xc0392b, 0x27ae60, 0xf39c12, 0x8e44ad,
            0x16a085, 0xd35400, 0x2c3e50, 0xbdc3c7, 0xe84393
        ];

        // ----------------------------------------
        // 可爱小天使升天特效组件 (神圣光环与纯白羽翼)
        // ----------------------------------------
        const angelGroup = new THREE.Group();
        angelGroup.visible = false;
        group.add(angelGroup);

        // 金色神圣光环 (发光浮在头顶)
        const haloRing = new THREE.Group();
        haloRing.position.set(0, 2.25, 0);
        const haloMat = new THREE.MeshBasicMaterial({ color: 0xffd700 });
        // 4 块方块拼接成发光圆环
        const hF = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.06, 0.08), haloMat); hF.position.z = 0.24;
        const hB = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.06, 0.08), haloMat); hB.position.z = -0.24;
        const hL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.48), haloMat); hL.position.x = -0.27;
        const hR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.48), haloMat); hR.position.x = 0.27;
        haloRing.add(hF, hB, hL, hR);
        angelGroup.add(haloRing);

        // 纯白天使羽翼 (背部左翼与右翼)
        const wingL = new THREE.Group();
        wingL.position.set(-0.35, 1.25, -0.26);
        const w1 = this.createBlock(0.5, 0.25, 0.06, 0xffffff, -0.25, 0.1, 0);
        const w2 = this.createBlock(0.4, 0.22, 0.06, 0xffffff, -0.2, -0.1, 0);
        wingL.add(w1, w2);
        angelGroup.add(wingL);

        const wingR = new THREE.Group();
        wingR.position.set(0.35, 1.25, -0.26);
        const w3 = this.createBlock(0.5, 0.25, 0.06, 0xffffff, 0.25, 0.1, 0);
        const w4 = this.createBlock(0.4, 0.22, 0.06, 0xffffff, 0.2, -0.1, 0);
        wingR.add(w3, w4);
        angelGroup.add(wingR);

        // 挂载数据与控制方法
        group.userData = {
            legL: legLGroup,
            legR: legRGroup,
            armL: armLGroup,
            armR: armRGroup,
            bookStack: bookStackGroup,
            angelGroup: angelGroup,
            wingL: wingL,
            wingR: wingR,
            haloRing: haloRing,
            bookCount: 0,
            isAngel: false,

            // 更新手上的书本堆叠
            setBookCount(count) {
                const clamped = Math.min(Math.max(0, count), 10);
                this.bookCount = clamped;

                // 清空旧书本
                while (bookStackGroup.children.length > 0) {
                    bookStackGroup.remove(bookStackGroup.children[0]);
                }

                // 重新生成叠层
                for (let i = 0; i < clamped; i++) {
                    const bColor = bookColors[i % bookColors.length];
                    const bookY = i * 0.082;
                    // 书皮
                    const cover = VoxelModels.createBlock(0.56, 0.075, 0.44, bColor, 0, bookY, 0);
                    // 书芯白页 (略收缩)
                    const pages = VoxelModels.createBlock(0.52, 0.065, 0.42, 0xffffff, 0.01, bookY, 0);
                    bookStackGroup.add(cover);
                    bookStackGroup.add(pages);
                }

                // 双手姿态随书本增多而往前抱起、往上托
                if (clamped > 0) {
                    armLGroup.rotation.x = -0.85 - Math.min(clamped * 0.03, 0.3);
                    armLGroup.rotation.z = 0.35;
                    armRGroup.rotation.x = -0.85 - Math.min(clamped * 0.03, 0.3);
                    armRGroup.rotation.z = -0.35;
                } else {
                    armLGroup.rotation.set(0, 0, 0);
                    armRGroup.rotation.set(0, 0, 0);
                }
            },

            // 激活小天使升天模式
            setAngelMode(enabled) {
                this.isAngel = enabled;
                angelGroup.visible = enabled;

                if (enabled) {
                    // 双手变成飞升张开姿势
                    armLGroup.rotation.set(0, 0, 1.2);
                    armRGroup.rotation.set(0, 0, -1.2);
                    // 隐藏手上的书本 (书本掉落地面)
                    bookStackGroup.visible = false;
                } else {
                    bookStackGroup.visible = true;
                    armLGroup.rotation.set(0, 0, 0);
                    armRGroup.rotation.set(0, 0, 0);
                }
            }
        };

        return group;
    },

    // ==========================================
    // 2. 霸气全场：横跨 3 车道的巨型大恐龙
    //    (背载 2 大人 1 小孩，中等速度)
    // ==========================================
    createGiantDinosaur(direction = 1) {
        const group = new THREE.Group();

        // 巨型恐龙身体 (翠绿巨蜥/腕龙体态，横跨 3 车道约 5.4 个单位宽！)
        const bodyLength = 6.2;
        const bodyWidth = 5.2; // 横跨 3 车道核心宽度
        const bodyHeight = 2.6;
        const body = this.createBlock(bodyLength, bodyHeight, bodyWidth, 0x1e824c, 0, 2.3, 0);
        group.add(body);

        // 浅绿色下腹纹理
        const belly = this.createBlock(bodyLength * 0.85, 0.3, bodyWidth * 0.85, 0x58b19f, 0, 1.05, 0);
        group.add(belly);

        // 威猛高耸的恐龙长脖子与大脑袋
        const neckX = direction > 0 ? 3.0 : -3.0;
        const neck = this.createBlock(1.4, 2.8, 2.0, 0x27ae60, neckX, 3.8, 0);
        const head = this.createBlock(2.2, 1.4, 2.4, 0x2ecc71, neckX + direction * 0.8, 5.0, 0);
        const snout = this.createBlock(1.2, 0.8, 2.2, 0x2ecc71, neckX + direction * 1.8, 4.8, 0);
        group.add(neck, head, snout);

        // 霸气黄色大眼睛
        const eyeL = this.createBlock(0.3, 0.3, 0.15, 0xf1c40f, neckX + direction * 1.0, 5.2, 1.25);
        const eyeR = this.createBlock(0.3, 0.3, 0.15, 0xf1c40f, neckX + direction * 1.0, 5.2, -1.25);
        const pupilL = this.createBlock(0.12, 0.25, 0.16, 0x111111, neckX + direction * 1.1, 5.2, 1.26);
        const pupilR = this.createBlock(0.12, 0.25, 0.16, 0x111111, neckX + direction * 1.1, 5.2, -1.26);
        group.add(eyeL, eyeR, pupilL, pupilR);

        // 脊背金色巨大骨板
        for (let i = -2; i <= 2; i++) {
            const fin = this.createBlock(0.5, 0.7, 0.4, 0xf39c12, i * 1.1, 3.9, 0);
            group.add(fin);
        }

        // 粗壮摇摆的巨尾
        const tailX = direction > 0 ? -3.5 : 3.5;
        const tail = this.createBlock(2.4, 1.2, 1.6, 0x1e824c, tailX, 2.2, 0);
        group.add(tail);

        // 4 根巨大的柱状恐龙象腿 (稳固支撑)
        const legOffsets = [
            [2.0, 2.1], [2.0, -2.1],
            [-2.0, 2.1], [-2.0, -2.1]
        ];
        const legMeshes = [];
        legOffsets.forEach(pos => {
            const leg = this.createBlock(1.1, 1.6, 1.1, 0x166534, pos[0], 0.8, pos[1]);
            group.add(leg);
            legMeshes.push(leg);
        });

        // ----------------------------------------
        // 乘客座舱鞍具 (搭载 2 大人 + 1 小孩)
        // ----------------------------------------
        const saddle = this.createBlock(3.6, 0.35, 3.2, 0x82589f, -0.2, 3.75, 0);
        const railingL = this.createBlock(3.6, 0.4, 0.15, 0xdcdde1, -0.2, 4.1, 1.6);
        const railingR = this.createBlock(3.6, 0.4, 0.15, 0xdcdde1, -0.2, 4.1, -1.6);
        group.add(saddle, railingL, railingR);

        // 乘客 1：前排爸爸 (驾驭者，戴墨镜穿蓝色花衬衫)
        const dad = this.createPassenger(0.8, 3.95, 0.6, 0x0984e3, 0x2d3436, true);
        group.add(dad);

        // 乘客 2：中排妈妈 (戴遮阳草帽，黄色优雅连衣裙)
        const mom = this.createPassenger(-0.2, 3.95, -0.5, 0xf1c40f, 0xd63031, false, true);
        group.add(mom);

        // 乘客 3：后排小孩 (穿红 T 恤，高举双手欢呼)
        const kid = this.createChildPassenger(-1.1, 3.95, 0.3);
        group.add(kid);

        group.userData = {
            type: "giant_dino",
            speed: 8.5, // 中等稳健速度
            length: 7.2,
            width: 5.4, // 3 车道绝对占用宽度
            height: 4.8,
            legs: legMeshes,
            tail: tail,
            isDeflected: false,
            vel: new THREE.Vector3(),
            rotVel: new THREE.Vector3()
        };

        return group;
    },

    // 辅助创建成人乘客
    createPassenger(x, y, z, shirtColor, pantsColor, hasSunglasses = false, hasHat = false) {
        const p = new THREE.Group();
        p.position.set(x, y, z);
        // 上身
        const body = this.createBlock(0.55, 0.6, 0.45, shirtColor, 0, 0.3, 0);
        // 头部
        const head = this.createBlock(0.48, 0.48, 0.45, 0xffd3a5, 0, 0.85, 0);
        // 头发
        const hair = this.createBlock(0.52, 0.18, 0.48, 0x2c3e50, 0, 1.05, 0);
        p.add(body, head, hair);

        if (hasSunglasses) {
            const glasses = this.createBlock(0.12, 0.12, 0.48, 0x111111, 0.25, 0.86, 0);
            p.add(glasses);
        }
        if (hasHat) {
            const hatBrim = this.createBlock(0.8, 0.08, 0.8, 0xf6e58d, 0, 1.06, 0);
            p.add(hatBrim);
        }
        return p;
    },

    // 辅助创建小孩乘客
    createChildPassenger(x, y, z) {
        const p = new THREE.Group();
        p.position.set(x, y, z);
        const body = this.createBlock(0.42, 0.42, 0.38, 0xe74c3c, 0, 0.22, 0);
        const head = this.createBlock(0.38, 0.38, 0.36, 0xffd3a5, 0, 0.62, 0);
        const hair = this.createBlock(0.42, 0.14, 0.4, 0x2c3e50, 0, 0.78, 0);
        // 小手举起挥舞
        const armL = this.createBlock(0.1, 0.35, 0.1, 0xffd3a5, 0, 0.6, 0.25);
        armL.rotation.x = 0.5;
        p.add(body, head, hair, armL);
        return p;
    },

    // ==========================================
    // 3. Mat Rempit 摩托车 (支持 16分以上翻滚特技)
    // ==========================================
    createMatRempit(direction = 1) {
        const group = new THREE.Group();

        const frame = this.createBlock(1.6, 0.4, 0.4, 0xe74c3c, 0, 0.5, 0);
        const engine = this.createBlock(0.7, 0.35, 0.44, 0x2d3436, 0, 0.35, 0);
        group.add(frame, engine);

        const wheelFront = this.createBlock(0.35, 0.55, 0.2, 0x111111, 0.75, 0.28, 0);
        const wheelBack = this.createBlock(0.35, 0.55, 0.2, 0x111111, -0.75, 0.28, 0);
        group.add(wheelFront, wheelBack);

        const handle = this.createBlock(0.12, 0.3, 0.7, 0x95a5a6, 0.55, 0.85, 0);
        const light = this.createBlock(0.15, 0.18, 0.22, 0xfffa65, 0.82, 0.68, 0);
        group.add(handle, light);

        // 骑手
        const riderTorso = this.createBlock(0.7, 0.35, 0.4, 0x2c3e50, 0.05, 0.8, 0);
        riderTorso.rotation.z = -0.35 * direction;
        const helmet = this.createBlock(0.45, 0.45, 0.42, 0xf1c40f, 0.4, 1.05, 0);
        const visor = this.createBlock(0.15, 0.16, 0.34, 0x111111, 0.6, 1.05, 0);
        group.add(riderTorso, helmet, visor);

        const exhaust = this.createBlock(0.6, 0.12, 0.12, 0x7f8c8d, -0.7, 0.25, 0.24);
        group.add(exhaust);

        if (direction < 0) {
            group.rotation.y = Math.PI;
        }

        group.userData = {
            type: "rempit",
            speed: 21.0, // 最快速度
            length: 1.8,
            width: 0.6,
            height: 1.3,
            isStunt: false,
            stuntTimer: 0,
            isDeflected: false,
            vel: new THREE.Vector3(),
            rotVel: new THREE.Vector3()
        };

        return group;
    },

    // ==========================================
    // 4. 居銮普通轿车 (Proton / Perodua 风格)
    // ==========================================
    createCar(direction = 1) {
        const group = new THREE.Group();
        const carColors = [0xe74c3c, 0xf39c12, 0x3498db, 0xecf0f1, 0x1abc9c];
        const bodyColor = carColors[Math.floor(Math.random() * carColors.length)];

        const carBase = this.createBlock(2.8, 0.6, 1.3, bodyColor, 0, 0.55, 0);
        const cabin = this.createBlock(1.5, 0.55, 1.15, bodyColor, -0.15, 1.1, 0);
        const glass = this.createBlock(1.54, 0.48, 1.18, 0x22313f, -0.15, 1.1, 0);
        group.add(carBase, cabin, glass);

        const wheels = [
            [-0.85, 0.26, 0.68], [0.85, 0.26, 0.68],
            [-0.85, 0.26, -0.68], [0.85, 0.26, -0.68]
        ];
        wheels.forEach(pos => {
            const w = this.createBlock(0.5, 0.52, 0.22, 0x111111, pos[0], pos[1], pos[2]);
            const cap = this.createBlock(0.24, 0.24, 0.26, 0xbdc3c7, pos[0], pos[1], pos[2]);
            group.add(w, cap);
        });

        const headL = this.createBlock(0.12, 0.16, 0.24, 0xfffa65, 1.4, 0.6, 0.42);
        const headR = this.createBlock(0.12, 0.16, 0.24, 0xfffa65, 1.4, 0.6, -0.42);
        const tailL = this.createBlock(0.12, 0.16, 0.24, 0xc0392b, -1.4, 0.6, 0.42);
        const tailR = this.createBlock(0.12, 0.16, 0.24, 0xc0392b, -1.4, 0.6, -0.42);
        group.add(headL, headR, tailL, tailR);

        if (direction < 0) {
            group.rotation.y = Math.PI;
        }

        group.userData = {
            type: "car",
            speed: 10.5 + Math.random() * 2.5, // 中等速度
            length: 2.8,
            width: 1.4,
            height: 1.4,
            isDeflected: false,
            vel: new THREE.Vector3(),
            rotVel: new THREE.Vector3()
        };

        return group;
    },

    // ==========================================
    // 5. 白衣短裤小学生骑小恐龙 (支持斜线与 16分高跳特技)
    // ==========================================
    createDinoKid(direction = 1) {
        const group = new THREE.Group();

        const dinoBody = this.createBlock(1.4, 0.8, 0.8, 0x27ae60, 0, 0.8, 0);
        const dinoHead = this.createBlock(0.7, 0.65, 0.74, 0x2ecc71, 0.7, 1.25, 0);
        const dinoSnout = this.createBlock(0.45, 0.35, 0.66, 0x2ecc71, 1.15, 1.15, 0);
        const eyeL = this.createBlock(0.12, 0.12, 0.08, 0x111111, 0.85, 1.4, 0.38);
        const eyeR = this.createBlock(0.12, 0.12, 0.08, 0x111111, 0.85, 1.4, -0.38);
        group.add(dinoBody, dinoHead, dinoSnout, eyeL, eyeR);

        const spike1 = this.createBlock(0.2, 0.25, 0.12, 0xf39c12, 0.3, 1.28, 0);
        const spike2 = this.createBlock(0.2, 0.22, 0.12, 0xf39c12, -0.1, 1.25, 0);
        const spike3 = this.createBlock(0.2, 0.18, 0.12, 0xf39c12, -0.5, 1.2, 0);
        const dinoTail = this.createBlock(0.65, 0.35, 0.4, 0x27ae60, -0.9, 0.85, 0);
        group.add(spike1, spike2, spike3, dinoTail);

        const legFL = this.createBlock(0.25, 0.45, 0.25, 0x219d55, 0.4, 0.22, 0.4);
        const legFR = this.createBlock(0.25, 0.45, 0.25, 0x219d55, 0.4, 0.22, -0.4);
        const legBL = this.createBlock(0.28, 0.45, 0.28, 0x219d55, -0.4, 0.22, 0.4);
        const legBR = this.createBlock(0.28, 0.45, 0.28, 0x219d55, -0.4, 0.22, -0.4);
        group.add(legFL, legFR, legBL, legBR);

        // 小学生
        const kidTorso = this.createBlock(0.5, 0.48, 0.44, 0xffffff, -0.05, 1.42, 0);
        const kidShorts = this.createBlock(0.52, 0.22, 0.48, 0x1e3799, -0.05, 1.22, 0);
        const kidLegL = this.createBlock(0.16, 0.36, 0.16, 0xffd3a5, -0.05, 1.1, 0.36);
        const kidShoeL = this.createBlock(0.18, 0.12, 0.24, 0x111111, -0.05, 0.9, 0.38);
        const kidLegR = this.createBlock(0.16, 0.36, 0.16, 0xffd3a5, -0.05, 1.1, -0.36);
        const kidShoeR = this.createBlock(0.18, 0.12, 0.24, 0x111111, -0.05, 0.9, -0.38);
        const kidHead = this.createBlock(0.48, 0.46, 0.46, 0xffd3a5, -0.05, 1.86, 0);
        const kidHair = this.createBlock(0.52, 0.22, 0.5, 0x2c3e50, -0.05, 2.06, 0);
        group.add(kidTorso, kidShorts, kidLegL, kidShoeL, kidLegR, kidShoeR, kidHead, kidHair);

        if (direction < 0) {
            group.rotation.y = Math.PI;
        }

        const isDiagonal = Math.random() < 0.65;
        group.userData = {
            type: "dino_kid",
            speed: 5.5, // 速度最慢
            length: 1.8,
            width: 1.1,
            height: 2.1,
            isDiagonal: isDiagonal,
            diagonalFreq: 1.8 + Math.random() * 1.5,
            diagonalAmp: 1.8 + Math.random() * 1.2,
            initialZ: 0,
            timeElapsed: Math.random() * 10,
            isStuntHop: false,
            hopY: 0,
            isDeflected: false,
            vel: new THREE.Vector3(),
            rotVel: new THREE.Vector3()
        };

        return group;
    },

    // ==========================================
    // 6. 训导主任与居銮中华中学校门大牌坊
    // ==========================================
    createDisciplineMaster() {
        const group = new THREE.Group();
        const torso = this.createBlock(0.76, 0.75, 0.48, 0x74b9ff, 0, 0.98, 0);
        const tie = this.createBlock(0.14, 0.45, 0.06, 0xc0392b, 0, 1.0, 0.25);
        const head = this.createBlock(0.68, 0.65, 0.62, 0xfdd0a2, 0, 1.68, 0);
        const hair = this.createBlock(0.74, 0.26, 0.68, 0x2d3436, 0, 1.95, 0);
        const glassesL = this.createBlock(0.18, 0.12, 0.04, 0x111111, -0.16, 1.68, 0.32);
        const glassesR = this.createBlock(0.18, 0.12, 0.04, 0x111111, 0.16, 1.68, 0.32);
        const bridge = this.createBlock(0.14, 0.04, 0.04, 0x111111, 0, 1.68, 0.32);
        group.add(torso, tie, head, hair, glassesL, glassesR, bridge);

        const pantsL = this.createBlock(0.28, 0.6, 0.4, 0x2c3e50, -0.2, 0.3, 0);
        const shoeL = this.createBlock(0.28, 0.15, 0.46, 0x000000, -0.2, 0.08, 0.03);
        const pantsR = this.createBlock(0.28, 0.6, 0.4, 0x2c3e50, 0.2, 0.3, 0);
        const shoeR = this.createBlock(0.28, 0.15, 0.46, 0x000000, 0.2, 0.08, 0.03);
        group.add(pantsL, shoeL, pantsR, shoeR);

        const armPivotL = new THREE.Group();
        armPivotL.position.set(-0.48, 1.25, 0);
        const armL = this.createBlock(0.2, 0.55, 0.24, 0x74b9ff, 0, -0.28, 0);
        const handL = this.createBlock(0.18, 0.16, 0.2, 0xfdd0a2, 0, -0.6, 0);
        armPivotL.add(armL, handL);
        group.add(armPivotL);

        const armPivotR = new THREE.Group();
        armPivotR.position.set(0.48, 1.25, 0);
        const armR = this.createBlock(0.2, 0.55, 0.24, 0x74b9ff, 0, -0.28, 0);
        const handR = this.createBlock(0.18, 0.16, 0.2, 0xfdd0a2, 0, -0.6, 0);
        const clipboard = this.createBlock(0.28, 0.38, 0.06, 0xdfe6e9, 0.1, -0.55, 0.15);
        armPivotR.add(armR, handR, clipboard);
        group.add(armPivotR);

        group.userData = {
            armL: armPivotL,
            armR: armPivotR,
            isCheering: false
        };

        return group;
    },

    createSchoolGate() {
        const group = new THREE.Group();
        const pillarL = this.createBlock(1.0, 4.2, 1.0, 0xa8201a, -4.5, 2.1, 0);
        const baseL = this.createBlock(1.4, 0.5, 1.4, 0xdcdde1, -4.5, 0.25, 0);
        const pillarR = this.createBlock(1.0, 4.2, 1.0, 0xa8201a, 4.5, 2.1, 0);
        const baseR = this.createBlock(1.4, 0.5, 1.4, 0xdcdde1, 4.5, 0.25, 0);
        const beam = this.createBlock(10.2, 0.8, 1.2, 0xa8201a, 0, 4.2, 0);
        const roofBase = this.createBlock(10.8, 0.4, 1.8, 0xf1c40f, 0, 4.7, 0);
        const roofTop = this.createBlock(8.2, 0.5, 1.4, 0xb33939, 0, 5.0, 0);
        group.add(pillarL, baseL, pillarR, baseR, beam, roofBase, roofTop);

        const signCanvas = document.createElement("canvas");
        signCanvas.width = 512;
        signCanvas.height = 128;
        const sctx = signCanvas.getContext("2d");
        sctx.fillStyle = "#8b0000";
        sctx.fillRect(0, 0, 512, 128);
        sctx.strokeStyle = "#ffd700";
        sctx.lineWidth = 12;
        sctx.strokeRect(6, 6, 500, 116);
        sctx.fillStyle = "#ffffff";
        sctx.font = "bold 62px 'SimSun', 'KaiTi', sans-serif";
        sctx.textAlign = "center";
        sctx.textBaseline = "middle";
        sctx.fillText("居 銮 晖 晖 中 学", 256, 64);

        const signTex = new THREE.CanvasTexture(signCanvas);
        const signMat = new THREE.MeshBasicMaterial({ map: signTex });
        const signMesh = new THREE.Mesh(new THREE.PlaneGeometry(6.2, 1.55), signMat);
        signMesh.position.set(0, 3.2, 0.62);
        group.add(signMesh);

        for (let x = -14; x <= -5.5; x += 1.2) {
            group.add(this.createBlock(0.12, 2.6, 0.12, 0x2f3640, x, 1.3, 0));
        }
        for (let x = 5.5; x <= 14; x += 1.2) {
            group.add(this.createBlock(0.12, 2.6, 0.12, 0x2f3640, x, 1.3, 0));
        }

        const auditoriumRoof = this.createBlock(16, 2.2, 4.0, 0xa8201a, 0, 6.5, -6.0);
        const auditoriumBody = this.createBlock(15, 5.0, 3.8, 0xf5f6fa, 0, 2.5, -6.0);
        group.add(auditoriumRoof, auditoriumBody);

        group.add(this.createPalmTree(-6.8, 0, 1.2));
        group.add(this.createPalmTree(6.8, 0, 1.2));

        return group;
    },

    createPalmTree(x, y, z) {
        const tree = new THREE.Group();
        tree.position.set(x, y, z);
        const trunk = this.createBlock(0.4, 3.8, 0.4, 0x795548, 0, 1.9, 0);
        tree.add(trunk);

        const leavesColors = [0x2e7d32, 0x388e3c, 0x43a047];
        const leafOffsets = [
            [-1.2, 0, 0], [1.2, 0, 0], [0, 0, -1.2], [0, 0, 1.2],
            [-0.8, -0.2, -0.8], [0.8, -0.2, 0.8], [-0.8, -0.2, 0.8], [0.8, -0.2, -0.8]
        ];
        leafOffsets.forEach((off, idx) => {
            tree.add(this.createBlock(1.4, 0.22, 1.0, leavesColors[idx % 3], off[0], 3.8 + off[1], off[2]));
        });
        return tree;
    }
};

window.VoxelModels = VoxelModels;
