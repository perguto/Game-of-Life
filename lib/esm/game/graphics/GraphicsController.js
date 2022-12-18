import { GraphicsEvents } from "./GraphicsEvents.js";
export class GraphicsController {
    constructor() {
        this.events = new GraphicsEvents();
        this.aliveCells = [];
    }
    setCells(cells) {
        this.aliveCells = cells;
        this.render();
    }
    ;
    render() {
        console.log('render');
    }
}
