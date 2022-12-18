import { Point } from "../../structures/CartesianPlane.js";
import { GraphicsController } from "../GraphicsController.js";
import { CanvasConfig, CanvasConfigParams } from "./config.js";
export declare class CanvasController extends GraphicsController {
    private painter;
    private plugins;
    protected listeners: {
        onConfigChange: ((config: CanvasConfig) => any)[];
    };
    protected canvas: HTMLCanvasElement;
    protected canvasContext: CanvasRenderingContext2D;
    protected config: CanvasConfig;
    protected selectedCells: Point[];
    constructor(canvas: HTMLCanvasElement);
    protected render(): void;
    private initPlugins;
    private configDOMCanvas;
    protected setSelectedCells(selectedCells: Point[]): void;
    getConfig(): CanvasConfig;
    setConfig({ board, cells, colors, grid }: CanvasConfigParams): void;
    onConfigChange(listener: (config: CanvasConfig) => any): void;
}
declare global {
    interface CanvasRenderingContext2D {
        reset(): void;
    }
}
