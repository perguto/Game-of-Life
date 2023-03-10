"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultCanvasConfig = void 0;
exports.defaultCanvasConfig = {
    cells: {
        size: 20,
    },
    grid: {
        lineWidth: 1,
        gap: 0.5,
    },
    board: {
        height: 900,
        width: 1900,
        offset_x: 0,
        offset_y: 0,
        zoom: 100,
    },
    colors: {
        background: '#222222',
        cell: '#ffffff',
        selected_cell: 'rgba(255,255,255,0.2)',
        grid: '#626567'
    }
};
