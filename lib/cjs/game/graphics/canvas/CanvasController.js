"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasController = void 0;
const GraphicsController_js_1 = require("../GraphicsController.js");
const CanvasPainter_js_1 = require("./CanvasPainter.js");
const config_js_1 = require("./config.js");
const SelectedCells_js_1 = require("./plugins/SelectedCells.js");
const Draggable_js_1 = require("./plugins/Draggable.js");
const KeyControl_js_1 = require("./plugins/KeyControl.js");
class CanvasController extends GraphicsController_js_1.GraphicsController {
    constructor(canvas) {
        super();
        this.selectedCells = [];
        this.canvas = canvas;
        this.canvasContext = canvas.getContext("2d") || new CanvasRenderingContext2D();
        if (!this.canvas || !this.canvas.getContext("2d"))
            throw new Error("Canvas cannot be null");
        this.config = config_js_1.defaultCanvasConfig;
        this.listeners = {
            onConfigChange: []
        };
        this.painter = new CanvasPainter_js_1.CanvasPainter(canvas, this.canvasContext);
        this.plugins = [];
        this.initPlugins();
        this.configDOMCanvas();
    }
    render() {
        this.painter.paint(this.config, this.aliveCells, this.selectedCells);
    }
    initPlugins() {
        const draggable = new Draggable_js_1.Draggable(this.canvas, () => this.getConfig(), (config) => this.setConfig(config));
        const selectedCells = new SelectedCells_js_1.SelectedCells(this.canvas, () => this.getConfig(), (config) => this.setConfig(config), () => this.selectedCells, (selectedCells) => this.setSelectedCells(selectedCells));
        selectedCells.onCellClicked(point => {
            this.events.emitCellToggle(point);
        });
        const keyControls = new KeyControl_js_1.KeyControl(this.canvas, () => this.getConfig(), (config) => this.setConfig(config));
        keyControls.onGameStartStop(() => {
            this.events.emitGameStartStop();
        });
        keyControls.onSpeedUp((factor) => {
            this.events.emitSpeedUp(factor);
        });
        keyControls.onSpeedDowm((factor) => {
            this.events.emitSpeedDown(factor);
        });
        this.plugins = [
            draggable,
            selectedCells,
            keyControls
        ];
    }
    configDOMCanvas() {
        const { height, width } = this.config.board;
        const { width: canvasWidth, height: canvasHeight } = this.canvas;
        this.canvas.style.width = `${this.config.board.width}px`;
        this.canvas.style.height = `${this.config.board.height}px`;
        if (width !== canvasWidth)
            this.canvas.width = this.config.board.width;
        if (height !== canvasHeight)
            this.canvas.height = this.config.board.height;
        this.canvas.style.overflow = 'hidden';
        this.canvas.style.backgroundColor = this.config.colors.background;
    }
    setSelectedCells(selectedCells) {
        this.selectedCells = selectedCells;
        this.render();
    }
    getConfig() {
        const { board, cells, colors, grid } = this.config;
        return {
            board: Object.assign({}, board),
            cells: Object.assign({}, cells),
            colors: Object.assign({}, colors),
            grid: Object.assign({}, grid),
        };
    }
    setConfig({ board, cells, colors, grid }) {
        this.config = {
            board: Object.assign(Object.assign({}, this.config.board), board),
            cells: Object.assign(Object.assign({}, this.config.cells), cells),
            colors: Object.assign(Object.assign({}, this.config.colors), colors),
            grid: Object.assign(Object.assign({}, this.config.grid), grid)
        };
        window.requestAnimationFrame(() => {
            this.render();
            this.configDOMCanvas();
            setTimeout(() => {
                this.listeners.onConfigChange.forEach(listener => listener(this.getConfig()));
            }, 1);
        });
    }
    onConfigChange(listener) {
        this.listeners.onConfigChange.push(listener);
    }
}
exports.CanvasController = CanvasController;
