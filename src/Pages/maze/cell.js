export class Cell {
    constructor (x, y, cellSize, p5) {
        this.x = x;
        this.y = y;
        this.w = cellSize;
        this.walls = [true, true, true, true];
        this.visited = false;
        this.p5 = p5;
    }

    show = (r, g, b, a) => {
        var i = this.x * this.w;
        var j = this.y * this.w;
        this.p5.noStroke();
        this.p5.fill(r, g, b, a);
        for (var idx = 0; idx < 15; idx++) {
          this.p5.rect(i, j, this.w, this.w);
        }
        this.p5.stroke(0, 0, 0);

        if (this.walls[0]) {
          this.p5.line(i, j, i + this.w, j);
        }
        if (this.walls[1]) {
          this.p5.line(i + this.w, j, i + this.w, j + this.w);
        }
        if (this.walls[2]) {
          this.p5.line(i + this.w, j + this.w, i, j + this.w);
        }
        if (this.walls[3]) {
          this.p5.line(i, j + this.w, i, j);
        }
    };
}
