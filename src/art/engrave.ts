// Small geometry helpers for the engraved toile art. Everything is seeded, so the
// plate draws the same way on every visit and on the server.

export type Rng = () => number;

/** Mulberry32: a tiny, fast seeded random number generator. */
export function rng(seed: number): Rng {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Round to one decimal so the SVG markup stays small. */
export const r = (n: number) => String(Math.round(n * 10) / 10);
const pt = (x: number, y: number) => `${r(x)} ${r(y)}`;

export type Leaf = { outline: string; shade: string };

/**
 * One almond leaf from (x, y) pointing along `angle`. `shade` is the lower half,
 * which the plate fills with hatching so each leaf reads as engraved.
 */
export function leaf(x: number, y: number, angle: number, length: number, width: number): Leaf {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  const p = (u: number, v: number) => pt(x + c * u * length - s * v * width, y + s * u * length + c * v * width);
  return {
    outline: `M${p(0, 0)}C${p(0.3, 1)} ${p(0.72, 1)} ${p(1, 0)}C${p(0.72, -1)} ${p(0.3, -1)} ${p(0, 0)}Z`,
    shade: `M${p(0, 0)}L${p(1, 0)}C${p(0.72, -1)} ${p(0.3, -1)} ${p(0, 0)}Z`,
  };
}

/** A rounded mass of leaves filling an ellipse; outer leaves are drawn first so inner ones sit on top. */
export function bush(seed: number, cx: number, cy: number, rx: number, ry: number, count: number, size: number): Leaf[] {
  const rand = rng(seed);
  const items: { d: number; x: number; y: number; a: number; l: number }[] = [];
  for (let i = 0; i < count; i++) {
    const t = rand() * Math.PI * 2;
    const d = Math.sqrt(rand());
    items.push({
      d,
      x: cx + Math.cos(t) * d * rx,
      y: cy + Math.sin(t) * d * ry,
      a: t + (rand() - 0.5) * 1.8 + 0.25,
      l: size * (0.72 + rand() * 0.56),
    });
  }
  items.sort((p, q) => q.d - p.d);
  return items.map((i) => leaf(i.x, i.y, i.a, i.l, i.l * 0.36));
}

/** Petals arranged in a ring: used for rosettes and flower heads. */
export function rosette(x: number, y: number, radius: number, petals: number, rot = 0): Leaf[] {
  return Array.from({ length: petals }, (_, i) =>
    leaf(x, y, rot + (i * Math.PI * 2) / petals, radius, radius * 0.58),
  );
}

export type Star = { x: number; y: number; r: number; sparkle: boolean };

export function stars(seed: number, count: number, x: number, y: number, w: number, h: number): Star[] {
  const rand = rng(seed);
  return Array.from({ length: count }, () => {
    const k = rand();
    return { x: x + rand() * w, y: y + rand() * rand() * h, r: 0.5 + k * k * 1.4, sparkle: k > 0.93 };
  });
}

/** Four-point sparkle path. */
export function sparkle(x: number, y: number, s: number): string {
  const c = pt(x, y);
  return `M${pt(x, y - s)}Q${c} ${pt(x + s, y)}Q${c} ${pt(x, y + s)}Q${c} ${pt(x - s, y)}Q${c} ${pt(x, y - s)}Z`;
}

/** A curving stem (quadratic) from a to b, bowed sideways by `bow`. */
export function stem(ax: number, ay: number, bx: number, by: number, bow: number): string {
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;
  const dx = by - ay;
  const dy = -(bx - ax);
  const len = Math.hypot(dx, dy) || 1;
  return `M${pt(ax, ay)}Q${pt(mx + (dx / len) * bow, my + (dy / len) * bow)} ${pt(bx, by)}`;
}

export function roman(n: number): string {
  const map: [number, string][] = [
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"],
    [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
  ];
  let out = "";
  let v = Math.max(0, Math.floor(n));
  for (const [k, s] of map) while (v >= k) { out += s; v -= k; }
  return out;
}
