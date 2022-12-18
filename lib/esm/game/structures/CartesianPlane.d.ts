export interface Point {
    x: number;
    y: number;
}
/**
 * Deprecated
 */
export declare class CartesianPlane<ValueType> {
    private quadrant1;
    private quadrant2;
    private quadrant3;
    private quadrant4;
    readonly defaultValue: ValueType | null;
    constructor(defaultValue: ValueType | null);
    setPoint({ x, y }: Point, value: ValueType): void;
    getPoint({ x, y }: Point): ValueType | null;
    resetPlane(): void;
    private verifyRow;
}
