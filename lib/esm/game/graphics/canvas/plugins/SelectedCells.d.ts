import { Point } from "../../../structures/CartesianPlane.js";
import { CanvasConfig, CanvasConfigParams } from "../config.js";
import { CanvasPlugin } from "./CanvasPlugin.js";
export declare class SelectedCells extends CanvasPlugin {
    private readonly getSelectedCells;
    private readonly setSelectCells;
    private readonly listeners;
    constructor(canvas: HTMLCanvasElement, getConfig: () => CanvasConfig, setConfig: (config: CanvasConfigParams) => any, getSelectedCells: () => Point[], setSelectCells: (points: Point[]) => any);
    onCellClicked(callback: (point: Point) => any): void;
    private emitCellSelected;
    init(): void;
}
