export class Player {
    constructor(x, y, color, p5) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.p5 = p5;
    }

    move = (d) => {
        if (d === 0) this.y -= 1;
        if (d === 1) this.x += 1;
        if (d === 2) this.y += 1;
        if (d === 3) this.x -= 1;
    };

    show = (cellSize) => {
        var i = this.x * cellSize;
        var j = this.y * cellSize;
        this.p5.noStroke();
        this.p5.fill(this.p5.color(this.color));
        for (var idx = 0; idx < 15; idx++) {
            this.p5.rect(i + 3, j + 3, cellSize - 5, cellSize - 5);
        }
    };
}
