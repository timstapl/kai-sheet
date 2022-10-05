export function rolld10() : number {
  return randomInRange(1, 11)
}

export function randomInRange(min: number, max: number) : number {
  return Math.floor(Math.random() * (max - min) + min)
}
