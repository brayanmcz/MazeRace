import { Cell }  from './cell.js';

export class Grid {
    constructor(mazeSize, cellSize, p5) {
        this.grid = [];
        this.p5 = p5;

        var row = [];
        for (var x = 0; x < mazeSize; x++) {
            for (var y = 0; y < mazeSize; y++) {
              var cell = new Cell(x, y, cellSize, p5)
              row.push(cell);
            }
            this.grid.push(row);
            row = []
        }
        // this.mazeSize = mazeSize;
    }

    // Generates the Grid at intitialisation
    gen_maze = () => {
        var started = false;
        var stack = [];
        var current = this.grid[0][0];
        while (!started || stack.length) {
            // console.log(current);
            started = true;
            var next = this.check_neighbors(current);
            if (next) {
              next.visited = true;
              stack.push(current);
              this.remove_walls_between(current, next);
              current.show(255,255,255,100);
              next.show(255,255,255,100);
              current = next;
            } else if (stack.length > 0) {
              current = stack.pop();
            }
          }
    };

    // Check if there are available neighbors and return a random one
    check_neighbors = (Cell) => {
        var neighbours = [];

        var top = this.grid[Cell.x][Cell.y - 1];
        if (Cell.x < this.mazeSize - 1)
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
            var randomNeighbour = this.p5.floor(this.p5.random(0, neighbours.length));
            console.log("Neighbour: ", neighbours[randomNeighbour]);
            return neighbours[randomNeighbour];
        } else {
          console.log("UNDEFINED");
            return undefined;
        }
    };

    // Remove the walls between two cells
    remove_walls_between = (CellA, CellB) => {
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
          this.p5.keyCode === this.p5.UP_ARROW &&
          this.grid[player.x][player.y].walls[0] === false
        ) {
          player.move(0);
        } else if (
          this.p5.keyCode === this.p5.DOWN_ARROW &&
          this.grid[player.x][player.y].walls[2] === false
        ) {
          player.move(2);
        } else if (
          this.p5.keyCode === this.p5.LEFT_ARROW &&
          this.grid[player.x][player.y].walls[3] === false
        ) {
          player.move(3);
        } else if (
          this.p5.keyCode === this.p5.RIGHT_ARROW &&
          this.grid[player.x][player.y].walls[1] === false
        ) {
          player.move(1);
        }
        this.p5.redraw();
    };
}
