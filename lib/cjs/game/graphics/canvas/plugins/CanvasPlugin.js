"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasPlugin = void 0;
class CanvasPlugin {
    constructor(canvas, getConfig, setConfig) {
        this.canvas = canvas;
        this.getConfig = getConfig;
        this.setConfig = setConfig;
    }
}
exports.CanvasPlugin = CanvasPlugin;
