import { Point } from "../../structures/CartesianPlane.js";
import { CanvasConfig } from "./config.js";
export declare class CanvasPainter {
    canvas: HTMLCanvasElement;
    canvasContext: CanvasRenderingContext2D;
    constructor(canvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D);
    paint(config: CanvasConfig, aliveCells: Point[], selectedCells: Point[]): void;
    private renderGrid;
    private renderCells;
    private renderBackground;
    private applyTransforms;
}
