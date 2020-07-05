declare class Vect {
  x: number;
  y: number;
}

declare class Rate extends Vect {
  vx: number;
  vy: number;
}

declare class Circ extends Rate {
  r: number;
}

declare class Rect extends Rate {
  w: number;
  h: number;
}
