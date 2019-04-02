class Grid {
    constructor(mazeSize) {
        this.grid = [mazeSize];
        for (var i = 0; i < mazeSize; i++) {
            this.grid[i]
        }
    }

    gen_grid = (Cell) => {
        this.current = check_neighbours(Cell);
    }

    check_neighbors = (cell) => {
        var neighbours = [];

        var top = this.grid[cell.x][cell.y - 1];
        if (cell.x < mazeSize - 1) var right = this.grid[cell.x + 1][cell.y];
        var bottom = this.grid[cell.x][cell.y + 1];
        if (cell.x > 0) var left = this.grid[cell.x - 1][cell.y];

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
}

export const Grid;