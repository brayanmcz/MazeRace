import React, { Component } from 'react';
import { Grid } from './maze/grid.js';
// import { Cell }  from './maze/cell.js';
import { Player } from './maze/player.js';
import P5Wrapper from 'react-p5-wrapper';

class Maze extends Component {
    gen_game(p5) {
        p5.frameRate(60);
        let canvasSize = p5.windowHeight - p5.windowWidth < 0 ? p5.windowHeight - 20 : p5.windowWidth - 20;
        var mazeComplexity = 10;
        var mazeSize = mazeComplexity % 2 === 0 ? mazeComplexity + 1 : mazeComplexity;
        var cellSize = canvasSize / mazeSize;
        var middle = p5.floor(mazeSize / 2);
        var maze = new Grid(mazeSize, cellSize, p5);
        var cell = maze.grid[middle][middle];
        var player = new Player(0, 0, 'red', p5);

        p5.keyPressed = () => {
            maze.keyPressed(player);
        }
        
        p5.setup = () => {
            p5.createCanvas(canvasSize + 1, canvasSize + 1);
            p5.background(255);
            cell.visited = true;
            maze.gen_maze();
            cell.show(0, 200, 25, 100);
            player.show(cellSize);
            console.table(maze.grid);
        }
        
        p5.draw = () => {
            ;
        }
    }

    render() {
        return (
            <div>
                <p>Maze Game</p>
                <P5Wrapper sketch={this.gen_game} />
            </div>
        );
    }
}

export default Maze;