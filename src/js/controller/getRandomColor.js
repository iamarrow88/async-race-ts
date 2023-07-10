"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomColor() {
    const num = Math.random().toString(16).slice(3, 9);
    const color = `#${num}`;
    return color;
}
exports.default = getRandomColor;
