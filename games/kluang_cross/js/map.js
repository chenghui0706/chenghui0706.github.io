/**
 * 居銮群侠传 - 居銮中华中学（銮中）校园地图系统
 */

class CampusMap {
    constructor() {
        this.width = 1200;
        this.height = 800;

        // 障碍物与建筑物碰撞体积列表 {x, y, w, h, name}
        this.obstacles = [
            // 外围围墙 (留出南侧校门通道)
            { x: 0, y: 0, w: 1200, h: 20, name: "北侧围墙" },
            { x: 0, y: 0, w: 20, h: 800, name: "西侧围墙" },
            { x: 1180, y: 0, w: 20, h: 800, name: "东侧围墙" },
            { x: 0, y: 780, w: 460, h: 20, name: "南侧围墙-西" },
            { x: 740, y: 780, w: 460, h: 20, name: "南侧围墙-东" },

            // 光前堂 (Kwang Chien Hall - 礼堂)
            { x: 80, y: 60, w: 320, h: 180, name: "光前堂" },

            // 教学大楼 A (综合教学楼)
            { x: 460, y: 60, w: 420, h: 140, name: "教学大楼" },

            // 行政楼 / 训导处 (Discipline Master's Office)
            { x: 940, y: 60, w: 180, h: 200, name: "行政楼·训导处" },

            // 警卫室 (校门口保安亭)
            { x: 420, y: 700, w: 70, h: 70, name: "警卫室" },

            // 敬业乐群 纪念石碑花圃
            { x: 560, y: 340, w: 80, h: 60, name: "校训碑" },

            // 操场看台
            { x: 80, y: 380, w: 40, h: 220, name: "操场看台" }
        ];

        // 装饰性树木位置
        this.trees = [
            { x: 50, y: 260 }, { x: 50, y: 310 },
            { x: 410, y: 230 }, { x: 410, y: 280 },
            { x: 900, y: 240 }, { x: 900, y: 300 },
            { x: 1120, y: 320 }, { x: 1120, y: 380 }, { x: 1120, y: 440 },
            { x: 380, y: 720 }, { x: 760, y: 720 }, { x: 820, y: 720 }
        ];

        // 将树木也加入半碰撞（树干）
        this.trees.forEach(t => {
            this.obstacles.push({
                x: t.x - 12,
                y: t.y + 10,
                w: 24,
                h: 20,
                name: "树木"
            });
        });
    }

    // AABB 矩形碰撞检测
    checkCollision(x, y, w, h) {
        for (let obs of this.obstacles) {
            if (
                x < obs.x + obs.w &&
                x + w > obs.x &&
                y < obs.y + obs.h &&
                y + h > obs.y
            ) {
                return obs;
            }
        }
        return null;
    }

    // 绘制地图底图与地标
    render(ctx) {
        // 1. 大地背景（校园地砖与草坪底色）
        ctx.fillStyle = "#2d5a27"; // 深绿草坪
        ctx.fillRect(0, 0, this.width, this.height);

        // 2. 校园中央广场与走道铺装 (米黄色水磨石/水泥砖)
        ctx.fillStyle = "#d8cfb4";
        // 主干道（贯穿校门到教学楼）
        ctx.fillRect(490, 180, 220, 600);
        // 横向连通走道
        ctx.fillRect(60, 240, 1080, 70);
        // 行政楼前小广场
        ctx.fillRect(880, 240, 240, 140);

        // 地砖细网格纹理
        ctx.strokeStyle = "rgba(180, 170, 150, 0.4)";
        ctx.lineWidth = 1;
        for (let px = 500; px < 700; px += 25) {
            ctx.beginPath();
            ctx.moveTo(px, 200);
            ctx.lineTo(px, 780);
            ctx.stroke();
        }

        // 3. 操场与红色塑胶跑道 (左下区域)
        this.renderSportsField(ctx, 120, 360, 320, 360);

        // 4. 建筑物绘制
        // (A) 光前堂
        this.renderBuilding(ctx, 80, 60, 320, 180, {
            baseColor: "#e6d7b8",
            roofColor: "#a3382c",
            title: "光 前 堂",
            subTitle: "KWANG CHIEN AUDITORIUM",
            pillared: true
        });

        // (B) 教学大楼
        this.renderBuilding(ctx, 460, 60, 420, 140, {
            baseColor: "#f3ede2",
            roofColor: "#3a6073",
            title: "銮中教学大楼",
            subTitle: "CHONG HWA ACADEMIC COMPLEX",
            windows: true
        });

        // (C) 行政楼·训导处
        this.renderBuilding(ctx, 940, 60, 180, 200, {
            baseColor: "#e0d5c1",
            roofColor: "#70483c",
            title: "行政楼 · 训导处",
            subTitle: "DISCIPLINE DEPT",
            pillared: false
        });

        // (D) 警卫室
        this.renderBuilding(ctx, 420, 700, 70, 70, {
            baseColor: "#d2d7df",
            roofColor: "#3b4a6b",
            title: "警卫室",
            subTitle: "",
            small: true
        });

        // 5. 校园标志石碑："敬业乐群" (位于中央广场)
        this.renderMonument(ctx, 560, 340, 80, 60);

        // 6. 装饰绿植与热带树木
        this.trees.forEach(t => this.renderTree(ctx, t.x, t.y));

        // 7. 南侧校门大牌坊与路标（通往南峇山）
        this.renderMainGate(ctx);
    }

    // 绘制操场跑道
    renderSportsField(ctx, x, y, w, h) {
        // 塑胶跑道外圈 (红褐色)
        ctx.fillStyle = "#b84233";
        ctx.beginPath();
        ctx.roundRect(x, y, w, h, 60);
        ctx.fill();

        // 白色跑道线
        ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(x + 10, y + 10, w - 20, h - 20, 50);
        ctx.stroke();

        ctx.beginPath();
        ctx.roundRect(x + 20, y + 20, w - 40, h - 40, 40);
        ctx.stroke();

        // 足球场草地内圈 (青翠绿)
        ctx.fillStyle = "#3e7e32";
        ctx.beginPath();
        ctx.roundRect(x + 35, y + 35, w - 70, h - 70, 30);
        ctx.fill();

        // 足球场中圈与白线
        ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
        ctx.strokeRect(x + 50, y + 50, w - 100, h - 100);
        ctx.beginPath();
        ctx.arc(x + w / 2, y + h / 2, 24, 0, Math.PI * 2);
        ctx.stroke();

        // 标识文字
        ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
        ctx.font = "bold 13px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("銮中大操场", x + w / 2, y + h / 2 + 5);
    }

    // 绘制建筑物通用模块
    renderBuilding(ctx, x, y, w, h, opt) {
        // 阴影
        ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
        ctx.fillRect(x + 6, y + 6, w, h);

        // 墙体基座
        ctx.fillStyle = opt.baseColor;
        ctx.fillRect(x, y, w, h);
        ctx.strokeStyle = "#4a3c31";
        ctx.lineWidth = 3;
        ctx.strokeRect(x, y, w, h);

        // 屋檐/顶部装饰
        ctx.fillStyle = opt.roofColor;
        ctx.fillRect(x - 4, y - 6, w + 8, 22);

        // 如果是大建筑，绘制多排窗户
        if (opt.windows) {
            ctx.fillStyle = "#87ceeb";
            for (let row = 0; row < 2; row++) {
                for (let wx = x + 25; wx < x + w - 30; wx += 45) {
                    const wy = y + 40 + row * 45;
                    ctx.fillRect(wx, wy, 28, 24);
                    ctx.strokeStyle = "#333";
                    ctx.lineWidth = 1;
                    ctx.strokeRect(wx, wy, 28, 24);
                    // 窗格十字
                    ctx.beginPath();
                    ctx.moveTo(wx + 14, wy);
                    ctx.lineTo(wx + 14, wy + 24);
                    ctx.moveTo(wx, wy + 12);
                    ctx.lineTo(wx + 28, wy + 12);
                    ctx.stroke();
                }
            }
        }

        // 光前堂特有柱廊
        if (opt.pillared) {
            ctx.fillStyle = "#fefefe";
            for (let px = x + 30; px < x + w - 20; px += 50) {
                ctx.fillRect(px, y + 30, 16, h - 30);
                ctx.strokeStyle = "#666";
                ctx.strokeRect(px, y + 30, 16, h - 30);
            }
        }

        // 门面入口
        const doorW = opt.small ? 24 : 44;
        const doorH = opt.small ? 30 : 42;
        ctx.fillStyle = "#5c3a21";
        ctx.fillRect(x + (w - doorW) / 2, y + h - doorH, doorW, doorH);

        // 牌匾标识
        ctx.fillStyle = "#fff8e7";
        ctx.fillRect(x + w / 2 - 65, y + 18, 130, opt.subTitle ? 30 : 20);
        ctx.strokeStyle = "#8b0000";
        ctx.lineWidth = 2;
        ctx.strokeRect(x + w / 2 - 65, y + 18, 130, opt.subTitle ? 30 : 20);

        ctx.fillStyle = "#8b0000";
        ctx.font = "bold 13px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(opt.title, x + w / 2, y + 32);

        if (opt.subTitle) {
            ctx.fillStyle = "#555";
            ctx.font = "8px sans-serif";
            ctx.fillText(opt.subTitle, x + w / 2, y + 44);
        }
    }

    // 绘制校训碑："敬业乐群"
    renderMonument(ctx, x, y, w, h) {
        // 花圃基石
        ctx.fillStyle = "#6e261d";
        ctx.beginPath();
        ctx.roundRect(x - 6, y - 6, w + 12, h + 12, 10);
        ctx.fill();

        // 绿植簇拥
        ctx.fillStyle = "#4a8505";
        ctx.beginPath();
        ctx.roundRect(x - 2, y - 2, w + 4, h + 4, 8);
        ctx.fill();

        // 黑色花岗岩石碑
        ctx.fillStyle = "#222225";
        ctx.fillRect(x + 10, y + 8, w - 20, h - 16);
        ctx.strokeStyle = "#d4af37"; // 金色边框
        ctx.lineWidth = 2;
        ctx.strokeRect(x + 10, y + 8, w - 20, h - 16);

        // 銮中校训金字
        ctx.fillStyle = "#ffdf00";
        ctx.font = "bold 13px 'KaiTi', 'SimSun', serif";
        ctx.textAlign = "center";
        ctx.fillText("敬业乐群", x + w / 2, y + h / 2 + 5);
    }

    // 绘制树木
    renderTree(ctx, x, y) {
        // 树荫投影
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.beginPath();
        ctx.ellipse(x, y + 25, 22, 12, 0, 0, Math.PI * 2);
        ctx.fill();

        // 树干
        ctx.fillStyle = "#634125";
        ctx.fillRect(x - 6, y + 5, 12, 22);

        // 蓬松热带树冠 (多层渐变绿)
        const greens = ["#1e5922", "#287a2d", "#3ba342"];
        greens.forEach((c, idx) => {
            ctx.fillStyle = c;
            ctx.beginPath();
            ctx.arc(x + (idx === 1 ? -4 : 4), y - idx * 7, 24 - idx * 2, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    // 绘制主校门与“居銮中华中学”拱牌
    renderMainGate(ctx) {
        const gateX = 460;
        const gateY = 760;
        const gateW = 280;

        // 校门左右石柱
        ctx.fillStyle = "#d3cfcb";
        ctx.fillRect(gateX, gateY - 20, 24, 40);
        ctx.fillRect(gateX + gateW - 24, gateY - 20, 24, 40);
        ctx.strokeStyle = "#333";
        ctx.strokeRect(gateX, gateY - 20, 24, 40);
        ctx.strokeRect(gateX + gateW - 24, gateY - 20, 24, 40);

        // 拱门顶横梁招牌
        ctx.fillStyle = "#a8201a"; // 经典红底
        ctx.fillRect(gateX - 10, gateY - 45, gateW + 20, 28);
        ctx.strokeStyle = "#ffd700"; // 金边
        ctx.lineWidth = 2;
        ctx.strokeRect(gateX - 10, gateY - 45, gateW + 20, 28);

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 15px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("居 銮 中 华 中 学 · 正 门", gateX + gateW / 2, gateY - 26);

        // 地面通往南峇山指示路标
        ctx.fillStyle = "#ffaa00";
        ctx.font = "bold 12px sans-serif";
        ctx.fillText("▼ 往校外：南峇山 (Gunung Lambak) 方向", gateX + gateW / 2, 792);
    }
}

window.CampusMap = CampusMap;
