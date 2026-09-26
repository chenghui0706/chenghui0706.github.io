/**
 * 居銮群侠传 - 实体系统 (主角与 NPC)
 */

// 基础实体类
class Entity {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.direction = "down"; // down, up, left, right
    }

    getBounds() {
        return {
            x: this.x,
            y: this.y,
            w: this.width,
            h: this.height
        };
    }
}

// 主角类：穿白色校服、白色长裤的銮中男生
class Player extends Entity {
    constructor(x, y) {
        super(x, y, 30, 42);
        this.speed = 3.6;
        this.isMoving = false;
        this.animFrame = 0;
        this.animTimer = 0;
        this.hairLength = 12; // 头发长度(cm)，剧情属性：超标！
        this.particles = []; // 奔跑扬尘微粒
    }

    update(keys, map) {
        let dx = 0;
        let dy = 0;

        if (keys['w'] || keys['W'] || keys['ArrowUp']) {
            dy -= 1;
            this.direction = "up";
        }
        if (keys['s'] || keys['S'] || keys['ArrowDown']) {
            dy += 1;
            this.direction = "down";
        }
        if (keys['a'] || keys['A'] || keys['ArrowLeft']) {
            dx -= 1;
            this.direction = "left";
        }
        if (keys['d'] || keys['D'] || keys['ArrowRight']) {
            dx += 1;
            this.direction = "right";
        }

        // 斜向移动归一化
        if (dx !== 0 && dy !== 0) {
            dx *= 0.7071;
            dy *= 0.7071;
        }

        this.isMoving = (dx !== 0 || dy !== 0);

        if (this.isMoving) {
            const nextX = this.x + dx * this.speed;
            const nextY = this.y + dy * this.speed;

            // X 轴单独检测碰撞，允许滑动
            if (!map.checkCollision(nextX, this.y + 20, this.width, this.height - 20)) {
                this.x = nextX;
            }
            // Y 轴单独检测碰撞
            if (!map.checkCollision(this.x, nextY + 20, this.width, this.height - 20)) {
                this.y = nextY;
            }

            // 限制在地图边缘内
            this.x = Math.max(10, Math.min(map.width - this.width - 10, this.x));
            this.y = Math.max(10, Math.min(map.height - this.height - 10, this.y));

            // 步行动画帧切换
            this.animTimer++;
            if (this.animTimer > 8) {
                this.animFrame = (this.animFrame + 1) % 4;
                this.animTimer = 0;
                // 脚步声
                if (window.sound) window.sound.playFootstep();
            }

            // 偶尔产生小灰尘粒子
            if (Math.random() < 0.3) {
                this.particles.push({
                    x: this.x + this.width / 2 + (Math.random() * 8 - 4),
                    y: this.y + this.height - 2,
                    radius: 2 + Math.random() * 2,
                    alpha: 0.6,
                    vx: -dx * 0.5 + (Math.random() * 0.4 - 0.2),
                    vy: -dy * 0.5 - 0.2
                });
            }
        } else {
            this.animFrame = 0;
        }

        // 更新微粒
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= 0.04;
            if (p.alpha <= 0) {
                this.particles.splice(i, 1);
            }
        }
    }

    render(ctx) {
        // 1. 渲染地面微粒
        this.particles.forEach(p => {
            ctx.fillStyle = `rgba(200, 190, 170, ${p.alpha})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        });

        const px = this.x;
        const py = this.y;

        // 2. 角色阴影
        ctx.fillStyle = "rgba(0, 0, 0, 0.28)";
        ctx.beginPath();
        ctx.ellipse(px + this.width / 2, py + this.height - 2, 14, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        // 步行动画左右摆腿位移
        const legOffset = this.isMoving ? Math.sin(this.animFrame * Math.PI / 2) * 4 : 0;

        // 3. 白色长裤 (腿部与黑色学生皮鞋)
        ctx.fillStyle = "#f5f6fa"; // 纯白校服长裤
        ctx.strokeStyle = "#c8d1dc"; // 浅折痕轮廓
        ctx.lineWidth = 1;

        // 左腿
        const leftLegY = py + 26;
        ctx.fillRect(px + 6, leftLegY - legOffset, 8, 14 + legOffset);
        ctx.strokeRect(px + 6, leftLegY - legOffset, 8, 14 + legOffset);

        // 右腿
        ctx.fillRect(px + 16, leftLegY + legOffset, 8, 14 - legOffset);
        ctx.strokeRect(px + 16, leftLegY + legOffset, 8, 14 - legOffset);

        // 黑色学生皮鞋
        ctx.fillStyle = "#1e272e";
        ctx.fillRect(px + 5, leftLegY + 12 - legOffset, 9, 4);
        ctx.fillRect(px + 16, leftLegY + 12 + legOffset, 9, 4);

        // 4. 白色校服衬衫 (上身)
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(px + 4, py + 14, 22, 14);
        ctx.strokeStyle = "#b2bec3";
        ctx.strokeRect(px + 4, py + 14, 22, 14);

        // 黑色学生皮带
        ctx.fillStyle = "#2d3436";
        ctx.fillRect(px + 4, py + 25, 22, 3);
        ctx.fillStyle = "#d4af37"; // 皮带金色金属扣
        ctx.fillRect(px + 13, py + 25, 4, 3);

        // 校服领口与红色领带/胸徽细节
        if (this.direction !== "up") {
            ctx.fillStyle = "#d63031"; // 红色銮中红领带/红校徽点缀
            ctx.beginPath();
            ctx.moveTo(px + 15, py + 16);
            ctx.lineTo(px + 13, py + 23);
            ctx.lineTo(px + 17, py + 23);
            ctx.fill();

            // 校服胸前学号小口袋 (左胸)
            ctx.fillStyle = "#dfe6e9";
            ctx.fillRect(px + 7, py + 18, 4, 4);
        }

        // 5. 头部与脸部
        ctx.fillStyle = "#ffeaa7"; // 健康肤色
        ctx.fillRect(px + 6, py + 4, 18, 12);

        // 6. 黑色稍长碎发（剧情核心：遮住耳朵的蓬松刘海）
        ctx.fillStyle = "#1e1e24";
        if (this.direction === "down") {
            // 稍长刘海盖住额头
            ctx.fillRect(px + 4, py, 22, 7);
            ctx.fillRect(px + 3, py + 4, 4, 8); // 左边过耳长发
            ctx.fillRect(px + 23, py + 4, 4, 8); // 右边过耳长发
            // 眼睛
            ctx.fillStyle = "#2d3436";
            ctx.fillRect(px + 10, py + 9, 2, 3);
            ctx.fillRect(px + 18, py + 9, 2, 3);
        } else if (this.direction === "up") {
            // 后脑勺长发
            ctx.fillRect(px + 3, py, 24, 13);
        } else if (this.direction === "left") {
            ctx.fillRect(px + 4, py, 22, 7);
            ctx.fillRect(px + 4, py + 4, 6, 9);
            // 侧脸眼睛
            ctx.fillStyle = "#2d3436";
            ctx.fillRect(px + 8, py + 9, 2, 3);
        } else if (this.direction === "right") {
            ctx.fillRect(px + 4, py, 22, 7);
            ctx.fillRect(px + 20, py + 4, 6, 9);
            // 侧脸眼睛
            ctx.fillStyle = "#2d3436";
            ctx.fillRect(px + 20, py + 9, 2, 3);
        }

        // 主角头顶小名字标识
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 11px sans-serif";
        ctx.textAlign = "center";
        ctx.shadowColor = "rgba(0,0,0,0.8)";
        ctx.shadowBlur = 4;
        ctx.fillText("銮中学生", px + this.width / 2, py - 6);
        ctx.shadowBlur = 0; // 重置阴影
    }
}

// NPC 训导主任
class DisciplineMaster extends Entity {
    constructor(x, y) {
        super(x, y, 32, 44);
        this.name = "训导主任";
        this.bobOffset = 0;
        this.isNearPlayer = false;
        this.talkCooldown = 0;
    }

    update(player) {
        // 呼吸微浮动动效
        this.bobOffset = Math.sin(Date.now() / 300) * 1.5;

        // 计算与主角的欧几里得距离
        const centerX = this.x + this.width / 2;
        const centerY = this.y + this.height / 2;
        const playerCenterX = player.x + player.width / 2;
        const playerCenterY = player.y + player.height / 2;

        const dist = Math.hypot(centerX - playerCenterX, centerY - playerCenterY);

        // 判定进入对话范围（70 像素以内）
        this.isNearPlayer = (dist < 72);

        // 调整主任朝向面对主角
        if (this.isNearPlayer) {
            const dx = playerCenterX - centerX;
            const dy = playerCenterY - centerY;
            if (Math.abs(dx) > Math.abs(dy)) {
                this.direction = dx > 0 ? "right" : "left";
            } else {
                this.direction = dy > 0 ? "down" : "up";
            }
        } else {
            this.direction = "down";
        }
    }

    render(ctx) {
        const nx = this.x;
        const ny = this.y + this.bobOffset;

        // 1. NPC 阴影
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        ctx.beginPath();
        ctx.ellipse(nx + this.width / 2, this.y + this.height - 2, 16, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        // 2. 深色西装长裤与皮鞋
        ctx.fillStyle = "#2c3e50";
        ctx.fillRect(nx + 6, ny + 26, 9, 15);
        ctx.fillRect(nx + 17, ny + 26, 9, 15);

        ctx.fillStyle = "#000000";
        ctx.fillRect(nx + 5, ny + 39, 10, 5);
        ctx.fillRect(nx + 17, ny + 39, 10, 5);

        // 3. 浅蓝条纹教师正装短袖衬衫
        ctx.fillStyle = "#74b9ff";
        ctx.fillRect(nx + 4, ny + 13, 24, 15);
        ctx.strokeStyle = "#0984e3";
        ctx.lineWidth = 1;
        ctx.strokeRect(nx + 4, ny + 13, 24, 15);

        // 深色领带
        ctx.fillStyle = "#d63031";
        ctx.fillRect(nx + 14, ny + 14, 4, 11);

        // 手持物品：训导处纪律记录板 (Clipboard)
        ctx.fillStyle = "#b2bec3";
        ctx.fillRect(nx + 21, ny + 18, 9, 12);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(nx + 22, ny + 19, 7, 9);
        ctx.fillStyle = "#2d3436";
        ctx.fillRect(nx + 23, ny + 21, 5, 1);
        ctx.fillRect(nx + 23, ny + 24, 5, 1);

        // 4. 头部与面容 (戴黑框眼镜，表情严肃)
        ctx.fillStyle = "#fdd0a2";
        ctx.fillRect(nx + 7, ny + 2, 18, 13);

        // 干练整齐的教师二八分短发
        ctx.fillStyle = "#2d3436";
        ctx.fillRect(nx + 5, ny, 22, 6);
        ctx.fillRect(nx + 5, ny + 4, 3, 5);
        ctx.fillRect(nx + 24, ny + 4, 3, 5);

        // 黑色眼镜框
        ctx.strokeStyle = "#111111";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(nx + 8, ny + 6, 6, 4);
        ctx.strokeRect(nx + 18, ny + 6, 6, 4);
        ctx.beginPath();
        ctx.moveTo(nx + 14, ny + 8);
        ctx.lineTo(nx + 18, ny + 8);
        ctx.stroke();

        // 5. 头顶 NPC 专属名字铭牌
        ctx.fillStyle = "#fffa65";
        ctx.font = "bold 12px sans-serif";
        ctx.textAlign = "center";
        ctx.shadowColor = "rgba(0,0,0,0.85)";
        ctx.shadowBlur = 4;
        ctx.fillText("【训导主任】", nx + this.width / 2, ny - 10);
        ctx.shadowBlur = 0;

        // 6. 主角靠近时的交互感叹号气泡 / 对话按键提示
        if (this.isNearPlayer) {
            const bubbleY = ny - 32 + Math.sin(Date.now() / 180) * 3;

            // 气泡底板
            ctx.fillStyle = "#ffffff";
            ctx.strokeStyle = "#e74c3c";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.roundRect(nx + this.width / 2 - 36, bubbleY, 72, 20, 6);
            ctx.fill();
            ctx.stroke();

            // 小三角指示箭头
            ctx.beginPath();
            ctx.moveTo(nx + this.width / 2 - 4, bubbleY + 20);
            ctx.lineTo(nx + this.width / 2, bubbleY + 25);
            ctx.lineTo(nx + this.width / 2 + 4, bubbleY + 20);
            ctx.fill();

            // 提示文本
            ctx.fillStyle = "#c0392b";
            ctx.font = "bold 11px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText("! 按 E / 靠近", nx + this.width / 2, bubbleY + 14);
        }
    }
}

window.Player = Player;
window.DisciplineMaster = DisciplineMaster;
