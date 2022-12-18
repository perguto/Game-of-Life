import { CanvasConfig, CanvasConfigParams } from "../config.js";
export declare class CanvasPlugin {
    protected readonly canvas: HTMLCanvasElement;
    protected readonly getConfig: () => CanvasConfig;
    protected readonly setConfig: (config: CanvasConfigParams) => any;
    constructor(canvas: HTMLCanvasElement, getConfig: () => CanvasConfig, setConfig: (config: CanvasConfigParams) => any);
}
