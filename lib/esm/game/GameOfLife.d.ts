import { GraphicsController } from "./graphics/GraphicsController.js";
import { Point } from "./structures/CartesianPlane.js";
export declare class GameOfLife<GraphicsType extends GraphicsController> {
    private gameBoard;
    private engine;
    readonly graphics: GraphicsType;
    private evolution;
    constructor(graphics: GraphicsType);
    bornCell({ x, y }: Point): void;
    bornCells(points: Point[]): void;
    killCell({ x, y }: Point): void;
    toggleCell({ x, y }: Point): void;
    exterminateCells(): void;
    getCells(): Point[];
    speedUp(factor: number): void;
    speedDown(factor: number): void;
    changeDelay(ms: number): void;
    setConfig(options: {
        onNextGeneration?: (board: Point[]) => void;
        delay?: number;
    }): void;
    startEvolution(): void;
    stopEvolution(): void;
    private evolveGeneration;
    private updateGraphics;
    private initEvents;
}
