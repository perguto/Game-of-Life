"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphicsController = void 0;
const GraphicsEvents_js_1 = require("./GraphicsEvents.js");
class GraphicsController {
    constructor() {
        this.events = new GraphicsEvents_js_1.GraphicsEvents();
        this.aliveCells = [];
    }
    setCells(cells) {
        this.aliveCells = cells;
        this.render();
    }
    ;
    render() {
        console.log('render');
    }
}
exports.GraphicsController = GraphicsController;
