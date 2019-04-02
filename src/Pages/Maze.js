import React, { Component } from 'react';
import Grid from 'maze/grid.js';
import Cell from 'maze/cell.js';
import Player from 'maze/player.js';

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

class Maze extends Component {
    render() {
        return (
            <p>GAME</p>
        );
    }
}

export default Maze;