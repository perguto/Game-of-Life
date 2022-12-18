"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameOfLife = void 0;
const GameBoard_js_1 = require("./core/GameBoard.js");
const GameEngine_js_1 = require("./core/GameEngine.js");
class GameOfLife {
    constructor(graphics) {
        this.evolution = {
            isEvolving: false,
            intervalID: -1,
            config: {
                onNextGeneration: (board) => { },
                delay: 500
            }
        };
        this.gameBoard = new GameBoard_js_1.GameBoard();
        this.engine = new GameEngine_js_1.GameEngine();
        this.graphics = graphics;
        this.initEvents();
    }
    bornCell({ x, y }) {
        this.stopEvolution();
        this.gameBoard.setCell(x, y, true);
        this.updateGraphics();
    }
    bornCells(points) {
        this.stopEvolution();
        points.forEach(point => this.gameBoard.setCell(point.x, point.y, true));
        this.updateGraphics();
    }
    killCell({ x, y }) {
        this.stopEvolution();
        this.gameBoard.setCell(x, y, false);
        this.updateGraphics();
    }
    toggleCell({ x, y }) {
        this.stopEvolution();
        this.gameBoard.setCell(x, y, !this.gameBoard.getCell(x, y));
        this.updateGraphics();
    }
    exterminateCells() {
        this.stopEvolution();
        this.gameBoard.resetCells();
        this.updateGraphics();
    }
    getCells() {
        return this.gameBoard.getCells();
    }
    speedUp(factor) {
        const { delay } = this.evolution.config;
        this.changeDelay(Math.floor((delay / (factor || 1))));
    }
    speedDown(factor) {
        const { delay } = this.evolution.config;
        this.changeDelay(Math.floor((delay / (factor || 1))));
    }
    changeDelay(ms) {
        this.setConfig({
            delay: ms >= 20 ? ms : 20
        });
    }
    setConfig(options) {
        const { onNextGeneration, delay } = options;
        const { config } = this.evolution;
        this.stopEvolution();
        config.onNextGeneration = onNextGeneration || config.onNextGeneration;
        config.delay = delay || config.delay;
        this.startEvolution();
    }
    startEvolution() {
        const { isEvolving, config } = this.evolution;
        const { onNextGeneration, delay } = config;
        if (isEvolving)
            return;
        onNextGeneration(this.gameBoard.getCells());
        this.updateGraphics();
        const intervalID = window.setInterval(() => {
            this.evolveGeneration();
            onNextGeneration(this.gameBoard.getCells());
        }, delay);
        this.evolution.isEvolving = true;
        this.evolution.intervalID = intervalID;
    }
    stopEvolution() {
        const { isEvolving, intervalID } = this.evolution;
        if (isEvolving && intervalID !== -1) {
            clearInterval(intervalID);
            this.evolution.intervalID = -1;
            this.evolution.isEvolving = false;
        }
    }
    evolveGeneration() {
        const newGeneration = this.engine.nextGeneration(this.gameBoard);
        this.gameBoard = newGeneration;
        this.updateGraphics();
    }
    updateGraphics() {
        this.graphics.setCells(this.gameBoard.getCells());
    }
    initEvents() {
        const { events } = this.graphics;
        events.on({
            type: "onCellBorn",
            callback: (point) => {
                this.bornCell(point);
            }
        });
        events.on({
            type: "onCellKill",
            callback: (point) => {
                this.killCell(point);
            }
        });
        events.on({
            type: "onCellToggle",
            callback: (point) => {
                this.toggleCell(point);
            }
        });
        events.on({
            type: "onGameStartStop",
            callback: () => {
                if (this.evolution.isEvolving)
                    this.stopEvolution();
                else
                    this.startEvolution();
            }
        });
        events.on({
            type: "onSpeedUp",
            callback: (factor) => {
                this.speedUp(factor);
            }
        });
        events.on({
            type: "onSpeedDown",
            callback: (factor) => {
                this.speedDown(factor);
            }
        });
    }
}
exports.GameOfLife = GameOfLife;
