import { GameConfigParams } from "./config.js";
import { GameOfLife } from "./game/GameOfLife.js";
import { CanvasController } from "./game/graphics/canvas/CanvasController.js";
import { CanvasConfigParams } from "./game/graphics/canvas/config.js";
declare const createGameOfLife: (canvas: HTMLCanvasElement, defaultConfig?: {
    game?: GameConfigParams | undefined;
    graphics?: CanvasConfigParams | undefined;
}) => GameOfLife<CanvasController>;
export default createGameOfLife;
export * from './config.js';
export * from './game/GameOfLife.js';
export * from './game/core/GameBoard.js';
export * from './game/core/GameEngine.js';
export * from './game/graphics/EventTypes.js';
export * from './game/graphics/GraphicsController.js';
export * from './game/graphics/GraphicsEvents.js';
export * from './game/graphics/canvas/CanvasController.js';
export * from './game/graphics/canvas/CanvasPainter.js';
export * from './game/graphics/canvas/config.js';
export * from './game/graphics/canvas/plugins/CanvasPlugin.js';
export * from './game/graphics/canvas/plugins/Draggable.js';
export * from './game/graphics/canvas/plugins/KeyControl.js';
export * from './game/graphics/canvas/plugins/SelectedCells.js';
export * from './game/structures/CartesianPlane.js';
export * from './game/utils/Math.js';
