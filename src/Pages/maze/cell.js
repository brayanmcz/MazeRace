import p5 from 'p5';

export class Cell {
    constructor (x, y, cellSize) {
        this.x = x;
        this.y = y;
        this.w = cellSize;
        this.walls = [true, true, true, true];
        this.visited = false;
    }

    show = (r, g, b, a) => {
        var i = this.x * this.w - 0.25;
        var j = this.y * this.w - 0.25;
        p5.noStroke();
        p5.fill(r, g, b, a);
        for (var idx = 0; idx < 1; idx++) {
          p5.rect(i, j, this.w + 0.5, this.w + 0.5);
        }
        p5.stroke(0, 0, 0);

        if (this.walls[0]) {
          p5.line(i, j, i + this.w, j);
        }
        if (this.walls[1]) {
          p5.line(i + this.w, j, i + this.w, j + this.w);
        }
        if (this.walls[2]) {
          p5.line(i + this.w, j + this.w, i, j + this.w);
        }
        if (this.walls[3]) {
          p5.line(i, j + this.w, i, j);
        }
    };
}
