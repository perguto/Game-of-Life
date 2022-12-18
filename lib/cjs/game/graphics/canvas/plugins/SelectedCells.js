"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedCells = void 0;
const CanvasPlugin_js_1 = require("./CanvasPlugin.js");
class SelectedCells extends CanvasPlugin_js_1.CanvasPlugin {
    constructor(canvas, getConfig, setConfig, getSelectedCells, setSelectCells) {
        super(canvas, getConfig, setConfig);
        this.getSelectedCells = getSelectedCells;
        this.setSelectCells = setSelectCells;
        this.listeners = {
            onCellClicked: []
        };
        this.init();
    }
    onCellClicked(callback) {
        this.listeners.onCellClicked.push(callback);
    }
    emitCellSelected(point) {
        this.listeners.onCellClicked.forEach(callback => callback(point));
    }
    init() {
        const canvas = this.canvas;
        canvas.addEventListener('mousemove', (ev) => {
            const { offsetX: x, offsetY: y } = ev;
            const { board, cells, grid } = this.getConfig();
            const { width, height, offset_x, offset_y, zoom } = board;
            const { lineWidth, gap } = grid;
            let { size } = cells;
            size = size * zoom / 100;
            size = Math.ceil(size);
            let cell_size = size + gap * 4;
            const pos_x = Math.floor(((x - offset_x) / cell_size));
            const pos_y = Math.floor(((y - offset_y) / cell_size));
            this.setSelectCells([{ x: pos_x, y: pos_y }]);
        });
        canvas.addEventListener('dblclick', (ev) => {
            const cell = this.getSelectedCells()[0];
            if (cell)
                this.emitCellSelected(cell);
        });
    }
}
exports.SelectedCells = SelectedCells;
