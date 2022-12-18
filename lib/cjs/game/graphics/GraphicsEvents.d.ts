import { Point } from '../structures/CartesianPlane.js';
import { onCellBorn, onCellKill, onCellToggle, onGameStartStop, onSpeedDown, onSpeedUp } from './EventTypes.js';
export declare class GraphicsEvents {
    private listeners;
    constructor();
    on(event: onCellBorn | onCellKill | onCellToggle | onGameStartStop | onSpeedUp | onSpeedDown): void;
    private emit;
    emitCellBorn(point: Point): void;
    emitCellKill(point: Point): void;
    emitCellToggle(point: Point): void;
    emitGameStartStop(): void;
    emitSpeedUp(factor: number): void;
    emitSpeedDown(factor: number): void;
}
