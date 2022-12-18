import { CanvasConfig, CanvasConfigParams } from "../config.js";
import { CanvasPlugin } from "./CanvasPlugin.js";
export declare class Draggable extends CanvasPlugin {
    private state;
    constructor(canvas: HTMLCanvasElement, getConfig: () => CanvasConfig, setConfig: (config: CanvasConfigParams) => any);
    init(): void;
}
