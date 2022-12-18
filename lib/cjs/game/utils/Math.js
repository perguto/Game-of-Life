"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = void 0;
const round = (number, decimals) => {
    const factorDecimal = Math.pow(10, decimals);
    return Math.round(number * factorDecimal) / factorDecimal;
};
exports.round = round;
