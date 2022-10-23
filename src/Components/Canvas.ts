export const canvas: HTMLCanvasElement | null = document.querySelector('#canvas');
export const ctx: CanvasRenderingContext2D | null = canvas?.getContext('2d') || null;