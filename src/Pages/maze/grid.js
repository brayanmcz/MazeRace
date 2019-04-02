import { Cell }  from './maze/cell.js';

export class Grid {
    constructor(mazeSize, cellSize) {
        this.grid[];
        var row[];
        for (var y = 0; y < mazeSize; y++) {
            for (var x = 0; x < mazeSize; x++) {
                row[x] = new Cell(x, y, cellSize);
            }
            this.grid[y] = row;
        }
    }

    // Generates the Grid at intitialisation
    gen_maze = (Cell) => {
        for (var i = 0; i; i++) {
            var next = current.checkNeighbors(Cell);
            if (next) {
              next.visited = true;
              stack.push(current);
              removeWallsBetween(current, next);
              current = next;
            } else if (stack.length > 0) {
              current = stack.pop();
            }
          }
    };

    // Check if there are available neighbors and return a random one
    check_neighbors = (cell) => {
        var neighbours = [];

        var top = this.grid[cell.x][cell.y - 1];
        if (cell.x < mazeSize - 1)
            var right = this.grid[cell.x + 1][cell.y];
        var bottom = this.grid[cell.x][cell.y + 1];
        if (cell.x > 0)
            var left = this.grid[cell.x - 1][cell.y];

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
            undefined;
        }
    };

    // Remove the walls between two cells
    removeWallsBetween = (cellA, cellB) => {
        var x = cellA.x - cellB.x;
        var y = cellA.y - cellB.y;
  
        //CellA is on the right
        if (x === 1) {
          cellA.walls[3] = false;
          cellB.walls[1] = false;
        }
        //CellA is on the left
        if (x === -1) {
          cellA.walls[1] = false;
          cellB.walls[3] = false;
        }
        //CellA is on the bottom
        if (y === 1) {
          cellA.walls[0] = false;
          cellB.walls[2] = false;
        }
        //CellA is on the top
        if (y === -1) {
          cellA.walls[2] = false;
          cellB.walls[0] = false;
        }
      };
}
