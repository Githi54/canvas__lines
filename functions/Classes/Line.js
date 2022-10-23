import { Point } from "./Point.js";
var Line = /** @class */ (function () {
    function Line(startX, startY, endX, endY) {
        this.startPoint = new Point(startX, startY);
        this.endPoint = new Point(endX, endY);
    }
    return Line;
}());
export { Line };
