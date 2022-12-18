import { Point } from "../structures/CartesianPlane.js";
export declare class GameBoard {
    private board;
    constructor();
    setCell(x: number, y: number, alive?: boolean): void;
    getCell(x: number, y: number): boolean;
    getCells(): Point[];
    resetCells(): void;
}
