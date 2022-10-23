import { Point } from "./Point.js";

export class Line {
  startPoint: Point;
  endPoint: Point;

  constructor(startX, startY, endX, endY) {
    this.startPoint = new Point(startX, startY);
    this.endPoint = new Point(endX, endY);
  }
}
