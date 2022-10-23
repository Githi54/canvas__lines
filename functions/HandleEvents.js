import { ctx } from "../Components/Canvas.js";
import { canvasTemp, ctxTemp } from "../Components/CanvasTemp.js";
import { Line } from "./Classes/Line.js";
import { intersectPointOfLines } from "./CrossingLines.js";
import { drawLine } from "./drawLine.js";
export var lines = [];
var startX = 0;
var startY = 0;
var mouseX;
var mouseY;
var isDown = false;
export function handleMouseDown(e) {
    mouseX = e.clientX - 30;
    mouseY = e.clientY - 10;
    startX = mouseX;
    startY = mouseY;
    if (canvasTemp) {
        ctxTemp === null || ctxTemp === void 0 ? void 0 : ctxTemp.clearRect(0, 0, canvasTemp.width, canvasTemp.height);
    }
    isDown = true;
}
export function handleMouseUp(e) {
    if (!isDown) {
        return;
    }
    isDown = false;
    mouseX = e.clientX - 30;
    mouseY = e.clientY - 10;
    drawLine(mouseX, mouseY, ctx, startX, startY);
    var line = new Line(startX, startY, mouseX, mouseY);
    lines.map(function (line2) {
        var intersectPoint = intersectPointOfLines(line, line2);
        if (intersectPoint && ctx) {
            ctx.fillStyle = "#c82124";
            ctx.beginPath();
            ctx.arc(intersectPoint.x, intersectPoint.y, 10, 0, 2 * Math.PI);
            ctx.fill();
        }
    });
    lines.push(line);
}
export function handleMouseMove(e) {
    if (!isDown) {
        return;
    }
    mouseX = e.clientX - 30;
    mouseY = e.clientY - 10;
    if (canvasTemp) {
        ctxTemp === null || ctxTemp === void 0 ? void 0 : ctxTemp.clearRect(0, 0, canvasTemp.width, canvasTemp.height);
        var line_1 = new Line(startX, startY, mouseX, mouseY);
        lines.map(function (line2) {
            var intersectPoint = intersectPointOfLines(line_1, line2);
            if (intersectPoint && canvasTemp) {
                var x = intersectPoint.x;
                var y = intersectPoint.y;
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
