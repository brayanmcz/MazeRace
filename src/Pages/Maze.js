import React, { Component } from 'react';
import { Grid } from './maze/grid.js';
import { Cell }  from './maze/cell.js';
import { Player } from './maze/player.js';
import P5Wrapper from "react-p5-wrapper";


class Maze extends Component {
    gen_game(p5) {
        p5.frameRate(60);

        let canvasSize = p5.windowHeight - p5.windowWidth < 0 ? p5.windowHeight - 20 : p5.windowWidth - 20;
        
        var mazeComplexity = 25;
        var mazeSize = mazeComplexity % 2 === 0 ? mazeComplexity + 1 : mazeComplexity;
        
        var cellSize = canvasSize / mazeSize;

        var middle = p5.floor(mazeSize / 2);
        
        var grid = new Grid(mazeSize, cellSize);
        var cell = new Cell(middle, middle, cellSize);
        
        p5.setup = () => {
            p5.createCanvas(canvasSize + 1, canvasSize + 1);
            p5.background(255);
            cell.visited = true;
            grid.gen_grid(cell);
            cell.showCell(0, 200, 25, 100);
        }
        
        p5.draw = () => {
            ;
        }
    }

    render() {
        return (
            <p>GAME</p>
        );
    }
}

export default Maze;