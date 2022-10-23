import { ctx } from "../Components/Canvas.js";
import { canvasTemp, ctxTemp } from "../Components/CanvasTemp.js";
import { Line } from "./Classes/Line.js";
import { intersectPointOfLines } from "./CrossingLines.js";
import { drawLine } from "./drawLine.js";

export const lines: Line[] = [];

let startX = 0;
let startY = 0;
let mouseX: number;
let mouseY: number;
let isDown = false;

export function handleMouseDown(e: MouseEvent) {
  mouseX = e.clientX - 30;
  mouseY = e.clientY - 10;

  startX = mouseX;
  startY = mouseY;

  if (canvasTemp) {
    ctxTemp?.clearRect(0, 0, canvasTemp.width, canvasTemp.height);
  }

  isDown = true;
}

export function handleMouseUp(e: MouseEvent) {
  if (!isDown) {
    return;
  }

  isDown = false;
  mouseX = e.clientX - 30;
  mouseY = e.clientY - 10;

  drawLine(mouseX, mouseY, ctx, startX, startY);

  const line: Line = new Line(startX, startY, mouseX, mouseY);

  lines.map(line2 => {
    const intersectPoint = intersectPointOfLines(line, line2);

    if (intersectPoint && ctx) {
      ctx.fillStyle = "#c82124";
      ctx.beginPath();
      ctx.arc(intersectPoint.x, intersectPoint.y, 10, 0, 2 * Math.PI);
      ctx.fill();
    }
  });

  lines.push(line);
}

export function handleMouseMove(e: MouseEvent) {

  if (!isDown) {
    return;
  }

  mouseX = e.clientX - 30;
  mouseY = e.clientY - 10;
  if (canvasTemp) {
    ctxTemp?.clearRect(0, 0, canvasTemp.width, canvasTemp.height);

    const line: Line = new Line(startX, startY, mouseX, mouseY);

    lines.map(line2 => {
      const intersectPoint = intersectPointOfLines(line, line2);

      if (intersectPoint && canvasTemp) {
        const x = intersectPoint.x;
        const y = intersectPoint.y;

        if (ctxTemp) {
          ctxTemp.fillStyle = "#c82124";
          ctxTemp.beginPath();
          ctxTemp.arc(x, y, 10, 0, 2 * Math.PI);
          ctxTemp.fill();
        }
      }
    });
  }

  drawLine(mouseX, mouseY, ctxTemp, startX, startY);

  if (e.button === 2) {
    e.preventDefault();
    return;
  }
}
