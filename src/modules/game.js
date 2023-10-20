import { Square } from "./square.js";

const myCanvas = create("myCanvas", document.body, 480, 320);

let square = Square(50, 50, 100, "blue");
square.draw(myCanvas.ctx);
