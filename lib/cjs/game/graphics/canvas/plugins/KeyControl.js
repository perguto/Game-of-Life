"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyControl = void 0;
const CanvasPlugin_js_1 = require("./CanvasPlugin.js");
class KeyControl extends CanvasPlugin_js_1.CanvasPlugin {
    constructor(canvas, getConfig, setConfig) {
        super(canvas, getConfig, setConfig);
        this.listeners = {
            onGameStartStop: [],
            onSpeedDown: [],
            onSpeedUp: []
        };
        this.init();
    }
    onGameStartStop(callback) {
        this.listeners.onGameStartStop.push(callback);
    }
    onSpeedUp(callback) {
        this.listeners.onSpeedUp.push(callback);
    }
    onSpeedDowm(callback) {
        this.listeners.onSpeedDown.push(callback);
    }
    emitGameStartStop() {
        this.listeners.onGameStartStop.forEach(callback => callback());
    }
    emitSpeedUp(factor) {
        this.listeners.onSpeedUp.forEach(callback => callback(factor));
    }
    emitSpeedDown(factor) {
        this.listeners.onSpeedDown.forEach(callback => callback(factor));
    }
    init() {
        if (!!window) {
            window.addEventListener('keydown', (evt) => this.onKey(evt));
        }
        else {
            this.canvas.ownerDocument.addEventListener('keydown', (evt) => this.onKey(evt));
        }
    }
    onKey(evt) {
        const { key } = evt;
        switch (key) {
            case 'Enter':
                this.emitGameStartStop();
                break;
            case '+':
                this.emitSpeedUp(1.2);
                break;
            case '-':
                this.emitSpeedDown(0.8);
                break;
        }
    }
}
exports.KeyControl = KeyControl;
