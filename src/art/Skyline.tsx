import { memo } from "react";
import { rng } from "./engrave";
import { Church, Foliage, GoanHouse, Vine, type BushSpec, type Tone } from "./parts";

/** A coconut palm: a leaning trunk with rings and a crown of drooping fronds. */
function Palm({ x, base, h, lean, t, seed }: { x: number; base: number; h: number; lean: number; t: Tone; seed: number }) {
  const L = t === "p" ? "var(--paper)" : "var(--ink)";
  const tx = x + lean;
  const ty = base - h;
  const rings = Array.from({ length: 12 }, (_, i) => {
    const k = (i + 0.5) / 12;
    const cx = x + lean * k * k;
    const cy = base - h * k;
    return `M${cx - 5} ${cy}q5 3 10 0`;
  });
  const rand = rng(seed);
  const fronds = Array.from({ length: 7 }, (_, i) => {
    const a = -Math.PI + (i / 6) * Math.PI + (rand() - 0.5) * 0.3;
    const len = 60 + rand() * 20;
    const pts: [number, number][] = Array.from({ length: 5 }, (_, j) => {
      const k = j / 4;
      return [tx + Math.cos(a) * len * k, ty + Math.sin(a) * len * k + k * k * 34];
    });
    return pts;
  });
  return (
    <g>
      <path d={`M${x - 6} ${base}Q${x + lean * 0.3 - 4} ${base - h * 0.6} ${tx - 3} ${ty}M${x + 6} ${base}Q${x + lean * 0.3 + 4} ${base - h * 0.6} ${tx + 3} ${ty}`} fill="none" stroke={L} strokeWidth="1.3" />
      <g fill="none" stroke={L} strokeWidth="0.8">
        {rings.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      {fronds.map((p, i) => (
        <Vine key={i} points={p} t={t} size={11} seed={seed + i} />
      ))}
      <circle cx={tx - 5} cy={ty + 6} r="5" fill={t === "p" ? "var(--ink)" : "var(--paper)"} stroke={L} />
      <circle cx={tx + 5} cy={ty + 7} r="5" fill={t === "p" ? "var(--ink)" : "var(--paper)"} stroke={L} />
    </g>
  );
}

function hedge(seed: number, y: number, w: number): BushSpec[] {
  const rand = rng(seed);
  return Array.from({ length: Math.ceil(w / 70) + 1 }, (_, i) => ({
    seed: Math.floor(rand() * 1e9),
    x: i * 70 + (rand() - 0.5) * 30,
    y: y + (rand() - 0.5) * 20,
    rx: 52,
    ry: 34,
    n: 22,
    size: 14,
  }));
}

/** The Fontainhas street scene used in the Goa band and above the footer (1400 x 380). */
export const Skyline = memo(function Skyline({ t = "i" }: { t?: Tone }) {
  return (
    <svg viewBox="0 0 1400 380" preserveAspectRatio="xMidYMax slice" aria-hidden="true" className="skyline">
      <Palm x={90} base={340} h={250} lean={30} t={t} seed={3} />
      <GoanHouse x={150} base={340} w={190} h={230} t={t} />
      <GoanHouse x={360} base={340} w={160} h={200} t={t} flip />
      <Church cx={700} base={340} s={1.35} t={t} />
      <GoanHouse x={880} base={340} w={160} h={200} t={t} />
      <GoanHouse x={1060} base={340} w={190} h={230} t={t} flip />
      <Palm x={1310} base={340} h={260} lean={-34} t={t} seed={9} />
      <Palm x={560} base={340} h={180} lean={-20} t={t} seed={15} />
      <Foliage bushes={hedge(41, 350, 1400)} t={t} />
    </svg>
  );
});
