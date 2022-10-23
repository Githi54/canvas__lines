export function drawLine(
  toX: number,
  toY: number,
  context: CanvasRenderingContext2D | null,
  startX: number,
  startY: number,
) {
  if (context) {
    context.beginPath();
    context.lineCap = 'round';
    context.moveTo(startX, startY);
    context.lineTo(toX, toY);
    context.stroke();
  }
}