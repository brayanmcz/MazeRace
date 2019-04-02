import React, { Component } from 'react';
import { Grid } from './maze/grid.js';
import { Cell }  from './maze/cell.js';
import { Player } from './maze/player.js';
import P5Wrapper from "react-p5-wrapper";

class Maze extends Component {
    gen_maze(p5) {
        p5.frameRate(60);

        let canvasSize = p5.windowHeight - p5.windowWidth < 0 ? p5.windowHeight - 20 : p5.windowWidth - 20;
        
        var mazeComplexity = 25;
        var mazeSize = mazeComplexity % 2 === 0 ? mazeComplexity + 1 : mazeComplexity;
        
        var cellSize = canvasSize / mazeSize;
        
        var grid = new Grid(mazeSize);
        var cell = new Cell(cellSize);
        
        p5.setup = () => {
            grid.gen_grid(Cell);
        }
        
        p5.draw = () => {
            ;
        }
    }

    render() {
        return (
            <P5Wrapper sketch={this.gen_maze} />
        );
    }
}

export default Maze;