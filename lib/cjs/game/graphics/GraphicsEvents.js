"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphicsEvents = void 0;
class GraphicsEvents {
    constructor() {
        this.listeners = {
            onCellBorn: [],
            onCellKill: [],
            onCellToggle: [],
            onGameStartStop: [],
            onSpeedDown: [],
            onSpeedUp: [],
        };
    }
    on(event) {
        this.listeners[event.type].push(event.callback);
    }
    emit(event, payload) {
        this.listeners[event].forEach(callback => callback(payload));
    }
    emitCellBorn(point) {
        this.emit("onCellBorn", point);
    }
    emitCellKill(point) {
        this.emit("onCellKill", point);
    }
    emitCellToggle(point) {
        this.emit("onCellToggle", point);
    }
    emitGameStartStop() {
        this.emit("onGameStartStop", null);
    }
    emitSpeedUp(factor) {
        this.emit("onSpeedUp", factor);
    }
    emitSpeedDown(factor) {
        this.emit("onSpeedDown", factor);
    }
}
exports.GraphicsEvents = GraphicsEvents;
