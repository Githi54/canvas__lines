import { canvas, ctx } from "../Components/Canvas.js";
import { canvasTemp, ctxTemp } from "../Components/CanvasTemp.js";
import { lines } from "./HandleEvents.js";

export function onClick() {
  if (canvas) {
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    lines.length = 0;
  }

  if (canvasTemp) {
    ctxTemp?.clearRect(0, 0, canvasTemp.width, canvasTemp.height);
  }
}
