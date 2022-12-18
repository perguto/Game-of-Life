"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameOfLife_js_1 = require("./game/GameOfLife.js");
const CanvasController_js_1 = require("./game/graphics/canvas/CanvasController.js");
const createGameOfLife = (canvas, defaultConfig = {}) => {
    // Create game
    const graphics = new CanvasController_js_1.CanvasController(canvas);
    const game = new GameOfLife_js_1.GameOfLife(graphics);
    // Default config
    const { game: gameConfig, graphics: graphicsConfig } = defaultConfig;
    if (gameConfig)
        game.setConfig(gameConfig);
    if (graphicsConfig)
        graphics.setConfig(graphicsConfig);
    return game;
};
exports.default = createGameOfLife;
__exportStar(require("./config.js"), exports);
__exportStar(require("./game/GameOfLife.js"), exports);
__exportStar(require("./game/core/GameBoard.js"), exports);
__exportStar(require("./game/core/GameEngine.js"), exports);
__exportStar(require("./game/graphics/EventTypes.js"), exports);
__exportStar(require("./game/graphics/GraphicsController.js"), exports);
__exportStar(require("./game/graphics/GraphicsEvents.js"), exports);
__exportStar(require("./game/graphics/canvas/CanvasController.js"), exports);
__exportStar(require("./game/graphics/canvas/CanvasPainter.js"), exports);
__exportStar(require("./game/graphics/canvas/config.js"), exports);
__exportStar(require("./game/graphics/canvas/plugins/CanvasPlugin.js"), exports);
__exportStar(require("./game/graphics/canvas/plugins/Draggable.js"), exports);
__exportStar(require("./game/graphics/canvas/plugins/KeyControl.js"), exports);
__exportStar(require("./game/graphics/canvas/plugins/SelectedCells.js"), exports);
__exportStar(require("./game/structures/CartesianPlane.js"), exports);
__exportStar(require("./game/utils/Math.js"), exports);
