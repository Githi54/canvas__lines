import { onClick } from "./functions/onClick.js";
import { canvas, ctx } from "./Components/Canvas.js";
import { collapseButton } from "./Components/CollapseButton.js";
import { handleMouseDown, handleMouseMove, handleMouseUp } from "./functions/HandleEvents.js";
window.addEventListener('load', function () {
    collapseButton === null || collapseButton === void 0 ? void 0 : collapseButton.addEventListener('click', onClick);
    if (ctx) {
        ctx.strokeStyle = 'round';
    }
    canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('mousedown', handleMouseDown);
    canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('mouseup', handleMouseUp);
    canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('mousemove', handleMouseMove);
    canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('mouseout', handleMouseUp);
});
