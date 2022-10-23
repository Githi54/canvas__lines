import { onClick } from "./functions/onClick.js";
import { canvas, ctx } from "./Components/Canvas.js";
import { collapseButton } from "./Components/CollapseButton.js";
import { handleMouseDown, handleMouseMove, handleMouseUp } from "./functions/HandleEvents.js";

window.addEventListener('load', () => {
  collapseButton?.addEventListener('click', onClick);

  if (ctx) {
    ctx.strokeStyle = 'round';
  }

  canvas?.addEventListener('mousedown', handleMouseDown);
  canvas?.addEventListener('mouseup', handleMouseUp);
  canvas?.addEventListener('mousemove', handleMouseMove);
  canvas?.addEventListener('mouseout', handleMouseUp);
});
