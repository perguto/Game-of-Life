"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameOfLife_1 = require("./game/GameOfLife");
const CanvasController_1 = require("./game/graphics/canvas/CanvasController");
const index_1 = __importDefault(require("./index"));
const canvas = document.querySelector('#gameboard-main');
const info = document.querySelector('.floating-info');
describe('Game of life', () => {
    test('Instance a new game', () => {
        const canvas = document.createElement('canvas');
        const game = (0, index_1.default)(canvas);
        expect(game).toBeInstanceOf(GameOfLife_1.GameOfLife);
        expect(game.graphics).toBeInstanceOf(CanvasController_1.CanvasController);
        expect(game.getCells().length).toBe(0);
    });
    test('Add a cell', () => {
        const canvas = document.createElement('canvas');
        const game = (0, index_1.default)(canvas);
        game.bornCell({ x: 1, y: 1 });
        expect(game.getCells().length).toBe(1);
        expect(game.getCells()).toContainEqual({ x: 1, y: 1 });
    });
});
function init() {
    if (!info)
        return;
    if (!canvas)
        return;
    const game = (0, index_1.default)(canvas, {
        game: {
            delay: 200
        }
    });
    game.bornCell({ x: 10, y: 10 });
    game.bornCell({ x: 10, y: 11 });
    game.bornCell({ x: 10, y: 12 });
    game.bornCell({ x: 10, y: 14 });
    game.bornCell({ x: 9, y: 14 });
    game.bornCell({ x: 11, y: 14 });
    game.startEvolution();
    game.graphics.setConfig({
        board: {
        // width: 300,
        // height: 100
        },
        grid: {
            gap: 0.5
        },
        cells: {
            size: 20
        },
        colors: {
            background: '#222222'
        }
    });
    game.graphics.onConfigChange((newConfig) => {
        info.innerHTML = JSON.stringify(newConfig, null, 4);
    });
    window.gameStart = () => game.startEvolution();
    window.gameStop = () => game.stopEvolution();
    // let n = 100;
    // setInterval(() => {
    //     n+= 0.8;
    //     game.graphics.setConfig({
    //         board: {
    //             offset_x: n,
    //             offset_y: n
    //         }
    //     });
    // }, 1000);
}
init();
