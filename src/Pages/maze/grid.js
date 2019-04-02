export class Grid {
    constructor(mazeSize) {
        this.grid = [mazeSize];
        for (var i = 0; i < mazeSize; i++) {
            this.grid[i]
        }
    }

    // Generates the Grid at intitialisation
    gen_grid = (Cell) => {
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
}