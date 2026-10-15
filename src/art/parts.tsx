import { memo, useMemo } from "react";
import { bush, leaf, r, rng, rosette, sparkle, stars, stem, type Leaf } from "./engrave";

// Tone "p" = paper lines on cobalt (the night plate). Tone "i" = cobalt lines on paper.
export type Tone = "p" | "i";
const line = (t: Tone) => (t === "p" ? "var(--paper)" : "var(--ink)");
const ground = (t: Tone) => (t === "p" ? "var(--ink)" : "var(--paper)");
const hatch = (t: Tone, kind = "h") => `url(#${kind}-${t})`;

const S = { fill: "none", strokeLinecap: "round", strokeLinejoin: "round" } as const;

/** Shared hatch, cross-hatch and dot patterns. Render once per page. */
export function PlateDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        {(["p", "i"] as Tone[]).map((t) => (
          <g key={t}>
            <pattern id={`h-${t}`} width="2.6" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(-38)">
              <line x1="1.3" y1="0" x2="1.3" y2="4" stroke={line(t)} strokeWidth="0.75" />
            </pattern>
            <pattern id={`lh-${t}`} width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(-38)">
              <line x1="2" y1="0" x2="2" y2="4" stroke={line(t)} strokeWidth="0.55" />
            </pattern>
            <pattern id={`x-${t}`} width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <path d="M1.5 0V3M0 1.5H3" stroke={line(t)} strokeWidth="0.55" />
            </pattern>
            <pattern id={`hz-${t}`} width="8" height="3.2" patternUnits="userSpaceOnUse">
              <line x1="0" y1="1.6" x2="8" y2="1.6" stroke={line(t)} strokeWidth="0.55" />
            </pattern>
            <pattern id={`v-${t}`} width="3.2" height="8" patternUnits="userSpaceOnUse">
              <line x1="1.6" y1="0" x2="1.6" y2="8" stroke={line(t)} strokeWidth="0.6" />
            </pattern>
            <pattern id={`d-${t}`} width="3.4" height="3.4" patternUnits="userSpaceOnUse">
              <circle cx="0.85" cy="0.85" r="0.5" fill={line(t)} />
              <circle cx="2.55" cy="2.55" r="0.5" fill={line(t)} />
            </pattern>
          </g>
        ))}
      </defs>
    </svg>
  );
}

function Leaves({ leaves, t, sw = 0.9 }: { leaves: Leaf[]; t: Tone; sw?: number }) {
  return (
    <>
      {leaves.map((l, i) => (
        <g key={i}>
          <path d={l.outline} fill={ground(t)} stroke={line(t)} strokeWidth={sw} />
          <path d={l.shade} fill={hatch(t)} />
        </g>
      ))}
    </>
  );
}

export function Flower({ x, y, R, t, petals = 7, rot = 0 }: { x: number; y: number; R: number; t: Tone; petals?: number; rot?: number }) {
  const outer = useMemo(() => rosette(x, y, R, petals, rot), [x, y, R, petals, rot]);
  const inner = useMemo(() => rosette(x, y, R * 0.6, petals, rot + Math.PI / petals), [x, y, R, petals, rot]);
  return (
    <g>
      <Leaves leaves={outer} t={t} sw={0.8} />
      <Leaves leaves={inner} t={t} sw={0.7} />
      <circle cx={x} cy={y} r={R * 0.22} fill={hatch(t, "d")} stroke={line(t)} strokeWidth="0.8" />
    </g>
  );
}

export type BushSpec = { seed: number; x: number; y: number; rx: number; ry: number; n: number; size: number };

/** A drift of leafy bushes, stems, berries and flowers. */
export const Foliage = memo(function Foliage({
  bushes,
  flowers = [],
  t = "p",
}: {
  bushes: BushSpec[];
  flowers?: { x: number; y: number; R: number; petals?: number }[];
  t?: Tone;
}) {
  const drawn = useMemo(
    () =>
      bushes.map((b) => {
        const rand = rng(b.seed * 7 + 3);
        const stems = Array.from({ length: Math.max(2, Math.round(b.n / 14)) }, () => {
          const a = rand() * Math.PI * 2;
          return stem(b.x, b.y + b.ry * 0.6, b.x + Math.cos(a) * b.rx * 0.9, b.y + Math.sin(a) * b.ry * 0.9, (rand() - 0.5) * 30);
        });
        const berries = Array.from({ length: Math.round(b.n / 18) }, () => ({
          x: b.x + (rand() - 0.5) * b.rx * 1.6,
          y: b.y + (rand() - 0.5) * b.ry * 1.6,
          r: 2 + rand() * 2.4,
        }));
        return { leaves: bush(b.seed, b.x, b.y, b.rx, b.ry, b.n, b.size), stems, berries };
      }),
    [bushes],
  );
  return (
    <g>
      {drawn.map((d, i) => (
        <g key={i}>
          {d.stems.map((s, j) => (
            <path key={j} d={s} {...S} stroke={line(t)} strokeWidth="1.1" />
          ))}
          <Leaves leaves={d.leaves} t={t} />
          {d.berries.map((b, j) => (
            <circle key={j} cx={b.x} cy={b.y} r={b.r} fill={ground(t)} stroke={line(t)} strokeWidth="0.8" />
          ))}
        </g>
      ))}
      {flowers.map((f, i) => (
        <Flower key={i} {...f} t={t} rot={i * 0.7} />
      ))}
    </g>
  );
});

/** A climbing vine of paired leaves along a path given as points. */
export function Vine({ points, t = "p", size = 13, seed = 1 }: { points: [number, number][]; t?: Tone; size?: number; seed?: number }) {
  const { d, leaves } = useMemo(() => {
    const rand = rng(seed);
    const out: Leaf[] = [];
    let path = `M${r(points[0][0])} ${r(points[0][1])}`;
    for (let i = 1; i < points.length; i++) {
      const [ax, ay] = points[i - 1];
      const [bx, by] = points[i];
      path += `L${r(bx)} ${r(by)}`;
      const a = Math.atan2(by - ay, bx - ax);
      for (let k = 0.25; k < 1; k += 0.5) {
        const x = ax + (bx - ax) * k;
        const y = ay + (by - ay) * k;
        const l = size * (0.8 + rand() * 0.4);
        out.push(leaf(x, y, a - 1.1 + (rand() - 0.5) * 0.4, l, l * 0.38));
        out.push(leaf(x, y, a + 1.1 + (rand() - 0.5) * 0.4, l, l * 0.38));
      }
    }
    return { d: path, leaves: out };
  }, [points, size, seed]);
  return (
    <g>
      <path d={d} {...S} stroke={line(t)} strokeWidth="1.2" />
      <Leaves leaves={leaves} t={t} sw={0.8} />
    </g>
  );
}

export function StarField({ seed, n, x, y, w, h }: { seed: number; n: number; x: number; y: number; w: number; h: number }) {
  const list = useMemo(() => stars(seed, n, x, y, w, h), [seed, n, x, y, w, h]);
  return (
    <g fill="var(--paper)">
      {list.map((s, i) =>
        s.sparkle ? (
          <path key={i} d={sparkle(s.x, s.y, s.r * 4)} className={`tw tw${i % 3}`} />
        ) : (
          <circle key={i} cx={r(s.x)} cy={r(s.y)} r={r(s.r)} className={i % 4 === 0 ? `tw tw${i % 3}` : undefined} />
        ),
      )}
    </g>
  );
}

/** Crescent moon with an engraved halo. */
export function Moon({ x, y, R, flip = false }: { x: number; y: number; R: number; flip?: boolean }) {
  const off = flip ? -R * 0.42 : R * 0.42;
  const id = `moon-${Math.round(x)}`;
  return (
    <g>
      <circle cx={x} cy={y} r={R * 1.55} {...S} stroke="var(--paper)" strokeWidth="0.6" strokeDasharray="1 4" />
      <circle cx={x} cy={y} r={R * 1.28} {...S} stroke="var(--paper)" strokeWidth="0.5" opacity="0.6" />
      <mask id={id}>
        <circle cx={x} cy={y} r={R} fill="#fff" />
        <circle cx={x + off} cy={y - R * 0.12} r={R * 0.86} fill="#000" />
      </mask>
      <circle cx={x} cy={y} r={R} fill="var(--paper)" mask={`url(#${id})`} />
    </g>
  );
}

/**
 * A two-storey Fontainhas house: tiled roof, a balcão (porch with seats), arched
 * windows glazed with oyster-shell panes and an azulejo band.
 */
export function GoanHouse({ x, base, w, h, t = "p", flip = false }: { x: number; base: number; w: number; h: number; t?: Tone; flip?: boolean }) {
  const L = line(t);
  const top = base - h;
  const roofH = h * 0.18;
  const floor = top + h * 0.5;
  const winW = w * 0.16;
  const cols = [0.2, 0.5, 0.8];
  const archWin = (cx: number, y0: number, ww: number, hh: number, key: string) => (
    <g key={key}>
      <path
        d={`M${r(cx - ww / 2)} ${r(y0 + hh)}V${r(y0 + ww / 2)}A${r(ww / 2)} ${r(ww / 2)} 0 0 1 ${r(cx + ww / 2)} ${r(y0 + ww / 2)}V${r(y0 + hh)}Z`}
        fill={hatch(t, "x")}
        stroke={L}
        strokeWidth="1.2"
      />
      <path d={`M${r(cx)} ${r(y0)}V${r(y0 + hh)}M${r(cx - ww / 2)} ${r(y0 + hh * 0.55)}H${r(cx + ww / 2)}`} stroke={L} strokeWidth="0.9" />
      <rect x={cx - ww / 2 - 4} y={y0 + hh} width={ww + 8} height="4" fill={ground(t)} stroke={L} strokeWidth="0.9" />
    </g>
  );
  return (
    <g transform={flip ? `translate(${2 * x + w} 0) scale(-1 1)` : undefined}>
      {/* roof */}
      <path d={`M${x - 10} ${top + roofH}L${x + w * 0.5} ${top}L${x + w + 10} ${top + roofH}Z`} fill={hatch(t, "hz")} stroke={L} strokeWidth="1.3" />
      {Array.from({ length: 9 }, (_, i) => (
        <path key={i} d={`M${r(x - 10 + ((w + 20) * (i + 1)) / 10)} ${r(top + roofH)}v-6`} stroke={L} strokeWidth="0.8" />
      ))}
      {/* walls */}
      <rect x={x} y={top + roofH} width={w} height={h - roofH} fill={ground(t)} stroke={L} strokeWidth="1.4" />
      <rect x={x} y={top + roofH} width={w} height={h - roofH} fill={hatch(t, "lh")} opacity="0.35" />
      {/* azulejo band */}
      <g>
        <rect x={x} y={floor - 12} width={w} height="12" fill={ground(t)} stroke={L} strokeWidth="1" />
        {Array.from({ length: Math.floor(w / 12) }, (_, i) => (
          <path key={i} d={`M${x + 6 + i * 12} ${floor - 11}l5 5l-5 5l-5 -5Z`} fill="none" stroke={L} strokeWidth="0.7" />
        ))}
      </g>
      {/* upper windows */}
      {cols.map((c, i) => archWin(x + w * c, top + roofH + h * 0.06, winW, h * 0.22, "u" + i))}
      {/* balcão: steps, low wall with seats and pillars */}
      <rect x={x + w * 0.08} y={base - h * 0.2} width={w * 0.84} height={h * 0.2} fill={ground(t)} stroke={L} strokeWidth="1.2" />
      <rect x={x + w * 0.08} y={base - h * 0.2} width={w * 0.84} height={h * 0.2} fill={hatch(t, "v")} opacity="0.55" />
      {[0.08, 0.92].map((p, i) => (
        <rect key={i} x={x + w * p - 5} y={floor + 6} width="10" height={base - floor - 6} fill={ground(t)} stroke={L} strokeWidth="1.1" />
      ))}
      <path d={`M${x + w * 0.08 - 8} ${floor + 6}H${x + w * 0.92 + 8}`} stroke={L} strokeWidth="1.6" />
      {/* door and lower windows */}
      <path
        d={`M${r(x + w * 0.42)} ${r(base - h * 0.2)}V${r(floor + h * 0.12)}A${r(w * 0.08)} ${r(w * 0.08)} 0 0 1 ${r(x + w * 0.58)} ${r(floor + h * 0.12)}V${r(base - h * 0.2)}`}
        fill={hatch(t, "h")}
        stroke={L}
        strokeWidth="1.2"
      />
      {archWin(x + w * 0.22, floor + h * 0.07, winW * 0.9, h * 0.16, "l1")}
      {archWin(x + w * 0.78, floor + h * 0.07, winW * 0.9, h * 0.16, "l2")}
      {/* steps */}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={x + w * 0.36 - i * 8} y={base - (3 - i) * 5} width={w * 0.28 + i * 16} height="5" fill={ground(t)} stroke={L} strokeWidth="0.9" />
      ))}
    </g>
  );
}

/**
 * The white baroque church of Panjim in miniature: twin bell towers, a central
 * gable with a bell, and the zig-zag staircase in front.
 */
export function Church({ cx, base, s, t = "i" }: { cx: number; base: number; s: number; t?: Tone }) {
  const L = line(t);
  const G = ground(t);
  const w = 150 * s;
  const h = 120 * s;
  const top = base - h - 34 * s;
  const tw = 34 * s;
  const left = cx - w / 2;
  return (
    <g strokeLinejoin="round">
      {/* zig-zag stairs */}
      {Array.from({ length: 4 }, (_, i) => {
        const y = base - i * 8.5 * s;
        const ww = (w + 70 * s) * (1 - i * 0.12);
        return <rect key={i} x={cx - ww / 2} y={y - 8.5 * s} width={ww} height={8.5 * s} fill={G} stroke={L} strokeWidth="0.9" />;
      })}
      {Array.from({ length: 4 }, (_, i) => (
        <path key={"z" + i} d={`M${r(cx - 50 * s + i * 25 * s)} ${r(base - 34 * s)}l${r(12 * s)} ${r(34 * s)}`} stroke={L} strokeWidth="0.6" opacity="0.7" />
      ))}
      {/* body */}
      <rect x={left} y={top + 30 * s} width={w} height={h - 30 * s} fill={G} stroke={L} strokeWidth="1.2" />
      {/* towers */}
      {[left - tw * 0.2, left + w - tw * 0.8].map((x, i) => (
        <g key={i}>
          <rect x={x} y={top} width={tw} height={h} fill={G} stroke={L} strokeWidth="1.2" />
          <path d={`M${r(x)} ${r(top)}Q${r(x + tw / 2)} ${r(top - 26 * s)} ${r(x + tw)} ${r(top)}`} fill={hatch(t, "lh")} stroke={L} strokeWidth="1.1" />
          <path d={`M${r(x + tw / 2)} ${r(top - 20 * s)}v${r(-16 * s)}M${r(x + tw / 2 - 5 * s)} ${r(top - 30 * s)}h${r(10 * s)}`} stroke={L} strokeWidth="1.2" />
          <path
            d={`M${r(x + tw * 0.3)} ${r(top + 40 * s)}V${r(top + 18 * s)}A${r(tw * 0.2)} ${r(tw * 0.2)} 0 0 1 ${r(x + tw * 0.7)} ${r(top + 18 * s)}V${r(top + 40 * s)}Z`}
            fill={hatch(t, "h")}
            stroke={L}
            strokeWidth="0.9"
          />
          <path d={`M${r(x)} ${r(top + 52 * s)}h${r(tw)}`} stroke={L} strokeWidth="0.8" />
        </g>
      ))}
      {/* central gable with bell */}
      <path
        d={`M${r(cx - 44 * s)} ${r(top + 30 * s)}Q${r(cx - 40 * s)} ${r(top + 6 * s)} ${r(cx - 18 * s)} ${r(top + 4 * s)}L${r(cx)} ${r(top - 18 * s)}L${r(cx + 18 * s)} ${r(top + 4 * s)}Q${r(cx + 40 * s)} ${r(top + 6 * s)} ${r(cx + 44 * s)} ${r(top + 30 * s)}Z`}
        fill={G}
        stroke={L}
        strokeWidth="1.2"
      />
      <path d={`M${r(cx)} ${r(top - 18 * s)}v${r(-14 * s)}M${r(cx - 5 * s)} ${r(top - 27 * s)}h${r(10 * s)}`} stroke={L} strokeWidth="1.2" />
      <path d={`M${r(cx - 8 * s)} ${r(top + 24 * s)}a${r(8 * s)} ${r(9 * s)} 0 0 1 ${r(16 * s)} 0z`} fill={hatch(t, "x")} stroke={L} strokeWidth="0.9" />
      {/* door, rose window, cornices */}
      <circle cx={cx} cy={top + 52 * s} r={9 * s} fill={hatch(t, "x")} stroke={L} strokeWidth="1" />
      <path
        d={`M${r(cx - 14 * s)} ${r(base - 34 * s)}V${r(top + 84 * s)}A${r(14 * s)} ${r(14 * s)} 0 0 1 ${r(cx + 14 * s)} ${r(top + 84 * s)}V${r(base - 34 * s)}`}
        fill={hatch(t, "h")}
        stroke={L}
        strokeWidth="1.1"
      />
      <path d={`M${r(left)} ${r(top + 66 * s)}H${r(left + w)}M${r(left - 6 * s)} ${r(top + 30 * s)}H${r(left + w + 6 * s)}`} stroke={L} strokeWidth="1" />
      {[-0.32, 0.32].map((p, i) => (
        <path
          key={i}
          d={`M${r(cx + p * w - 7 * s)} ${r(top + 100 * s)}V${r(top + 82 * s)}A${r(7 * s)} ${r(7 * s)} 0 0 1 ${r(cx + p * w + 7 * s)} ${r(top + 82 * s)}V${r(top + 100 * s)}Z`}
          fill={hatch(t, "h")}
          stroke={L}
          strokeWidth="0.9"
        />
      ))}
    </g>
  );
}

/** A Goan lamp post with a hanging lantern, used to frame the arch. */
export function Lamp({ x, base, h }: { x: number; base: number; h: number }) {
  const top = base - h;
  return (
    <g stroke="var(--paper)" strokeWidth="1.3" strokeLinecap="round">
      <rect x={x - 14} y={base - 26} width="28" height="26" fill="var(--ink)" />
      <rect x={x - 14} y={base - 26} width="28" height="26" fill="url(#hz-p)" />
      <path d={`M${x - 4} ${base - 26}V${top + 40}M${x + 4} ${base - 26}V${top + 40}`} />
      <path d={`M${x - 4} ${top + 40}h8M${x} ${top + 40}q0 -26 22 -30`} fill="none" />
      <path d={`M${x + 22} ${top + 10}v8`} />
      <path d={`M${x + 12} ${top + 18}h20l-4 26h-12z`} fill="url(#x-p)" />
      <path d={`M${x + 10} ${top + 18}l12 -8l12 8`} fill="var(--ink)" />
    </g>
  );
}
