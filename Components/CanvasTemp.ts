export const canvasTemp: HTMLCanvasElement | null = document.querySelector('#canvasTemp');
export const ctxTemp: CanvasRenderingContext2D | null = canvasTemp?.getContext('2d') || null;