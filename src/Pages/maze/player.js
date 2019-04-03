import p5 from 'p5';

export class Player {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
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
        p5.noStroke();
        p5.fill(p5.color(this.color));
        for (var idx = 0; idx < 15; idx++) {
          p5.rect(i + 3, j + 3, cellSize - 5, cellSize - 5);
        }
    };
}
