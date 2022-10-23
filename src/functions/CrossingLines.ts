import { Line } from "./Classes/Line.js";
import { Point } from "./Classes/Point.js";

export function intersectPointOfLines(line1: Line, line2: Line): Point | null {
  const { startPoint: {x: x1, y: y1}, endPoint: {x: x2, y: y2}} = line1;
  const { startPoint: {x: x3, y: y3}, endPoint: {x: x4, y: y4}} = line2;

	if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
		return null
	}

	const denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))

	if (denominator === 0) {
		return null
	}

	let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
	let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator

	if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
		return null
	}

	let x = x1 + ua * (x2 - x1)
	let y = y1 + ua * (y2 - y1)

	return {x, y}
}
