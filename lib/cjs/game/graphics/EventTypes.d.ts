import { Point } from "../structures/CartesianPlane.js";
export declare type EventTypes = "onCellBorn" | "onCellKill" | "onCellToggle" | "onGameStartStop" | "onSpeedUp" | "onSpeedDown";
export declare type onCellBorn = {
    type: "onCellBorn";
    callback: (point: Point) => any;
};
export declare type onCellKill = {
    type: "onCellKill";
    callback: (point: Point) => any;
};
export declare type onCellToggle = {
    type: "onCellToggle";
    callback: (point: Point) => any;
};
export declare type onGameStartStop = {
    type: "onGameStartStop";
    callback: Function;
};
export declare type onSpeedUp = {
    type: "onSpeedUp";
    callback: (factor: number) => any;
};
export declare type onSpeedDown = {
    type: "onSpeedDown";
    callback: (factor: number) => any;
};
