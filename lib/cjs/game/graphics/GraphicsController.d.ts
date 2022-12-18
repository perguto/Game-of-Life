import { Point } from "../structures/CartesianPlane.js";
import { GraphicsEvents } from "./GraphicsEvents.js";
export declare class GraphicsController {
    protected aliveCells: Point[];
    events: GraphicsEvents;
    constructor();
    setCells(cells: Point[]): void;
    protected render(): void;
}
