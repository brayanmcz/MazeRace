import { Cell }  from './cell.js';
import p5 from 'p5';

export class Grid {
    constructor(mazeSize, cellSize) {
        this.grid = [];
        var row = [];
        for (var y = 0; y < mazeSize; y++) {
            for (var x = 0; x < mazeSize; x++) {
                row[x] = new Cell(x, y, cellSize);
            }
            this.grid[y] = row;
        }
    }

    // Generates the Grid at intitialisation
    gen_maze = (Cell) => {
        var started = false;
        var stack = [];
        var current = Cell;
        while (!started || stack.length) {
            started = true;
            var next = this.checkNeighbors(current);
            if (next) {
              next.visited = true;
              stack.push(current);
              this.removeWallsBetween(current, next);
              current = next;
            } else if (stack.length > 0) {
              current = stack.pop();
            }
          }
    };

    // Check if there are available neighbors and return a random one
    check_neighbors = (Cell, mazeSize) => {
        var neighbours = [];

        var top = this.grid[Cell.x][Cell.y - 1];
        if (Cell.x < mazeSize - 1)
            var right = this.grid[Cell.x + 1][Cell.y];
        var bottom = this.grid[Cell.x][Cell.y + 1];
        if (Cell.x > 0)
            var left = this.grid[Cell.x - 1][Cell.y];

        // Check for neighbors
        if (top && !top.visited) {
            neighbours.push(top);
        }
        if (right && !right.visited) {
            neighbours.push(right);
        }
        if (bottom && !bottom.visited) {
            neighbours.push(bottom);
        }
        if (left && !left.visited) {
            neighbours.push(left);
        }

        // If there are neighbors
        if (neighbours.length > 0) {
            var randomNeighbour = p5.floor(p5.random(0, neighbours.length));
            return neighbours[randomNeighbour];
        } else {
            return undefined;
        }
    };

    // Remove the walls between two cells
    removeWallsBetween = (CellA, CellB) => {
        var x = CellA.x - CellB.x;
        var y = CellA.y - CellB.y;
  
        //CellA is on the right
        if (x === 1) {
          CellA.walls[3] = false;
          CellB.walls[1] = false;
        }
        //CellA is on the left
        if (x === -1) {
          CellA.walls[1] = false;
          CellB.walls[3] = false;
        }
        //CellA is on the bottom
        if (y === 1) {
          CellA.walls[0] = false;
          CellB.walls[2] = false;
        }
        //CellA is on the top
        if (y === -1) {
          CellA.walls[2] = false;
          CellB.walls[0] = false;
        }
      };

      keyPressed(player) {
        if (
          p5.keyCode === p5.UP_ARROW &&
          this.grid[player.x][player.y].walls[0] === false
        ) {
          player.move(0);
        } else if (
          p5.keyCode === p5.DOWN_ARROW &&
          this.grid[player.x][player.y].walls[2] === false
        ) {
          player.move(2);
        } else if (
          p5.keyCode === p5.LEFT_ARROW &&
          this.grid[player.x][player.y].walls[3] === false
        ) {
          player.move(3);
        } else if (
          p5.keyCode === p5.RIGHT_ARROW &&
          this.grid[player.x][player.y].walls[1] === false
        ) {
          player.move(1);
        }
        p5.redraw();
    };
}
