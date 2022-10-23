export function drawLine(toX, toY, context, startX, startY) {
    if (context) {
        context.beginPath();
        context.lineCap = 'round';
        context.moveTo(startX, startY);
        context.lineTo(toX, toY);
        context.stroke();
    }
}
