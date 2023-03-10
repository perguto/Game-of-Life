"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Draggable = void 0;
const CanvasPlugin_js_1 = require("./CanvasPlugin.js");
class Draggable extends CanvasPlugin_js_1.CanvasPlugin {
    constructor(canvas, getConfig, setConfig) {
        super(canvas, getConfig, setConfig);
        this.state = {
            isDragging: false,
            lastX: 0,
            lastY: 0,
        };
        this.init();
    }
    init() {
        const canvas = this.canvas;
        canvas.onmousedown = (ev) => {
            const { state } = this;
            if (state.isDragging)
                return;
            this.state = Object.assign(Object.assign({}, state), { isDragging: true, lastX: ev.x, lastY: ev.y });
        };
        canvas.onmouseup = (ev) => {
            const { state } = this;
            if (!state.isDragging)
                return;
            this.state = Object.assign(Object.assign({}, state), { isDragging: false, lastX: 0, lastY: 0 });
        };
        canvas.onmousemove = (ev) => {
            const { state } = this;
            if (!state.isDragging)
                return;
            const { lastX, lastY } = state;
            const { board } = this.getConfig();
            const { offset_x, offset_y, zoom } = board;
            const x = ev.x - lastX;
            const y = ev.y - lastY;
            // Deprecated (used for canvas 2d scale)
            // const newOffset_x = Math.floor(offset_x+(x/(zoom/100)));
            // const newOffset_y = Math.floor(offset_y+(y/(zoom/100)));
            // Deprecated (used for canvas 2d scale)
            // const newOffset_x = offset_x+(x/(zoom/100));
            // const newOffset_y = offset_y+(y/(zoom/100));
            const newOffset_x = offset_x + x;
            const newOffset_y = offset_y + y;
            this.setConfig({
                board: {
                    offset_x: newOffset_x,
                    offset_y: newOffset_y,
                }
            });
            this.state = Object.assign(Object.assign({}, state), { lastX: ev.x, lastY: ev.y });
        };
        canvas.onwheel = (ev) => {
            ev.preventDefault();
            const zoom = Math.sign(ev.deltaY);
            const { board } = this.getConfig();
            let newZoom = board.zoom - (zoom * board.zoom / 20);
            newZoom = Math.min(newZoom, 200);
            newZoom = Math.max(newZoom, 50);
            newZoom = Math.round(newZoom);
            this.setConfig({
                board: {
                    zoom: newZoom,
                }
            });
        };
    }
}
exports.Draggable = Draggable;
