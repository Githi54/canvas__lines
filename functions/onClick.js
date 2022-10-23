import { canvas, ctx } from "../Components/Canvas.js";
import { canvasTemp, ctxTemp } from "../Components/CanvasTemp.js";
import { lines } from "./HandleEvents.js";
export function onClick() {
    if (canvas) {
        ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, canvas.width, canvas.height);
        lines.length = 0;
    }
    if (canvasTemp) {
        ctxTemp === null || ctxTemp === void 0 ? void 0 : ctxTemp.clearRect(0, 0, canvasTemp.width, canvasTemp.height);
    }
}
