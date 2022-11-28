export function randomInt(min: number, max: number): number {
  return Math.floor(randomNumber(min, max));
}

export function randomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
