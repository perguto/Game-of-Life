import { CanvasConfig, CanvasConfigParams } from "../config.js";
import { CanvasPlugin } from "./CanvasPlugin.js";
export declare class KeyControl extends CanvasPlugin {
    private readonly listeners;
    constructor(canvas: HTMLCanvasElement, getConfig: () => CanvasConfig, setConfig: (config: CanvasConfigParams) => any);
    onGameStartStop(callback: () => any): void;
    onSpeedUp(callback: (factor: number) => any): void;
    onSpeedDowm(callback: (factor: number) => any): void;
    private emitGameStartStop;
    private emitSpeedUp;
    private emitSpeedDown;
    private init;
    private onKey;
}
