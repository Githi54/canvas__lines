export function intersectPointOfLines(line1, line2) {
    var _a = line1.startPoint, x1 = _a.x, y1 = _a.y, _b = line1.endPoint, x2 = _b.x, y2 = _b.y;
    var _c = line2.startPoint, x3 = _c.x, y3 = _c.y, _d = line2.endPoint, x4 = _d.x, y4 = _d.y;
    if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
        return null;
    }
    var denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
    if (denominator === 0) {
        return null;
    }
    var ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
    var ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
        return null;
    }
    var x = x1 + ua * (x2 - x1);
    var y = y1 + ua * (y2 - y1);
    return { x: x, y: y };
}
