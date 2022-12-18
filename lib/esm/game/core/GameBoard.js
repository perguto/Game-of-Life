export class GameBoard {
    constructor() {
        this.board = new Map();
    }
    setCell(x, y, alive = true) {
        if (alive)
            this.board.set(`${x}:${y}`, { x, y });
        else
            this.board.delete(`${x}:${y}`);
    }
    getCell(x, y) {
        return this.board.has(`${x}:${y}`);
    }
    getCells() {
        return Array.from(this.board.values());
    }
    resetCells() {
        this.board.clear();
    }
}
