import p5 from 'p5';

export class Player {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    p5.keyPressed = () => {
        if (
          p5.keyCode === p5.UP_ARROW &&
          grid[player.x][player.y].walls[0] === false
        ) {
          player.move(0);
        } else if (
          p5.keyCode === p5.DOWN_ARROW &&
          grid[player.x][player.y].walls[2] === false
        ) {
          player.move(2);
        } else if (
          p5.keyCode === p5.LEFT_ARROW &&
          grid[player.x][player.y].walls[3] === false
        ) {
          player.move(3);
        } else if (
          p5.keyCode === p5.RIGHT_ARROW &&
          grid[player.x][player.y].walls[1] === false
        ) {
          player.move(1);
        }
        p5.redraw();
    };

    move = (d) => {
        if (d === 0) this.y -= 1;
        if (d === 1) this.x += 1;
        if (d === 2) this.y += 1;
        if (d === 3) this.x -= 1;
    };

    show = () => {
        var i = this.x * cellSize;
        var j = this.y * cellSize;
        p5.noStroke();
        p5.fill(p5.color(this.color));
        for (var idx = 0; idx < 15; idx++) {
          p5.rect(i + 3, j + 3, cellSize - 5, cellSize - 5);
        }
    };
}