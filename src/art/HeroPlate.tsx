import { memo, type ReactNode } from "react";
import { motion, type MotionValue } from "framer-motion";
import { rng, r } from "./engrave";
import { Church, Flower, Foliage, GoanHouse, Lamp, Moon, StarField, Vine, type BushSpec } from "./parts";

// The hero plate is drawn on a 1600 x 960 sheet. The arch opening spans x 540-1060
// and springs at y 400; the copy is laid over that opening in Hero.tsx.
export const W = 1600;
export const H = 960;
const CX = 800;
const SPRING = 400;
const RI = 260; // inner arch radius
const RO = 304; // outer arch radius

type Box = [number, number, number, number];
const inside = (x: number, y: number, [x0, y0, x1, y1]: Box) => x > x0 && x < x1 && y > y0 && y < y1;

function scatter(seed: number, keepOut: Box[], step: [number, number], size: number, n: number, yMin = 20): BushSpec[] {
  const rand = rng(seed);
  const out: BushSpec[] = [];
  for (let y = yMin; y < H + 40; y += step[1]) {
    for (let x = -30; x < W + 40; x += step[0]) {
      const jx = x + (rand() - 0.5) * step[0] * 0.8;
      const jy = y + (rand() - 0.5) * step[1] * 0.8;
      if (keepOut.some((b) => inside(jx, jy, b))) continue;
      out.push({ seed: Math.floor(rand() * 1e9), x: jx, y: jy, rx: step[0] * 0.62, ry: step[1] * 0.58, n, size: size * (0.85 + rand() * 0.3) });
    }
  }
  return out;
}

// Keep the arch, the two houses and the moons clear; foliage fills everything else.
const archBox: Box = [458, 70, 1142, H + 50];
const houseL: Box = [96, 410, 384, 770];
const houseR: Box = [1216, 410, 1504, 770];
const moonL: Box = [262, 104, 398, 236];
const moonR: Box = [1202, 104, 1338, 236];

const farBushes = scatter(11, [archBox, houseL, houseR, moonL, moonR], [112, 100], 22, 52, 30);
const nearBushes = scatter(29, [[400, -100, 1200, H + 50], [60, 0, 1540, 800]], [92, 70], 21, 40, 820);
const flowers = (() => {
  const rand = rng(5);
  const list: { x: number; y: number; R: number; petals: number }[] = [];
  while (list.length < 16) {
    const x = rand() * W;
    const y = 60 + rand() * 820;
    if ([archBox, houseL, houseR, moonL, moonR].some((b) => inside(x, y, b))) continue;
    list.push({ x, y, R: 9 + rand() * 7, petals: 6 + Math.floor(rand() * 3) });
  }
  return list;
})();

const archOpening = `M${CX - RI} ${H + 10}V${SPRING}A${RI} ${RI} 0 0 1 ${CX + RI} ${SPRING}V${H + 10}Z`;

const Sky = memo(function Sky() {
  return (
    <>
      <StarField seed={3} n={130} x={0} y={0} w={W} h={420} />
      <Moon x={330} y={170} R={34} />
      <Moon x={1270} y={170} R={34} flip />
    </>
  );
});

const Village = memo(function Village() {
  return (
    <>
      <Foliage bushes={farBushes} flowers={flowers} />
      <GoanHouse x={90} base={810} w={300} h={420} />
      <GoanHouse x={1210} base={810} w={300} h={420} flip />
      <Lamp x={428} base={880} h={300} />
      <g transform={`translate(${2 * 1172} 0) scale(-1 1)`}>
        <Lamp x={1172} base={880} h={300} />
      </g>
    </>
  );
});

const Hedge = memo(function Hedge() {
  return <Foliage bushes={nearBushes} />;
});

/** Paper interior of the arch: sun rays, a tiled floor and the church at the far end. */
const Interior = memo(function Interior() {
  const rays = Array.from({ length: 23 }, (_, i) => {
    const a = Math.PI + (i * Math.PI) / 22;
    return `M${CX} 770L${r(CX + Math.cos(a) * 600)} ${r(770 + Math.sin(a) * 600)}`;
  });
  const floor = Array.from({ length: 13 }, (_, i) => `M${CX} 700L${r(CX - 360 + i * 60)} ${H + 10}`);
  const rows = [790, 820, 862, 916].map((y) => `M${CX - RI} ${y}H${CX + RI}`);
  return (
    <g>
      <path d={archOpening} fill="var(--paper)" />
      <clipPath id="arch-clip">
        <path d={archOpening} />
      </clipPath>
      <g clipPath="url(#arch-clip)" stroke="var(--ink)" fill="none">
        <g strokeWidth="0.6" opacity="0.28">
          {rays.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
        <circle cx={CX} cy={770} r={150} strokeWidth="0.6" opacity="0.3" strokeDasharray="2 5" />
        <g strokeWidth="0.7" opacity="0.45">
          {floor.map((d, i) => (
            <path key={i} d={d} />
          ))}
          {rows.map((d, i) => (
            <path key={"r" + i} d={d} />
          ))}
        </g>
        <path d={`M${CX - RI} 780H${CX + RI}`} strokeWidth="1" />
        <Church cx={CX} base={782} s={1.05} />
        {/* low balustrades either side of the church */}
        {[-1, 1].map((side) => (
          <g key={side} strokeWidth="0.9">
            <path d={`M${CX + side * 110} 742H${CX + side * 245}M${CX + side * 110} 780H${CX + side * 245}`} strokeWidth="1.1" />
            {Array.from({ length: 9 }, (_, i) => {
              const x = CX + side * (122 + i * 15);
              return <path key={i} d={`M${x} 744c-5 8 -5 14 0 18c5 4 5 10 0 17M${x} 744c5 8 5 14 0 18c-5 4 -5 10 0 17`} />;
            })}
          </g>
        ))}
      </g>
    </g>
  );
});

/** The stone arch: voussoirs, keystone with an urn of flowers, pilasters and plinths. */
const Arch = memo(function Arch() {
  const vous = Array.from({ length: 21 }, (_, i) => {
    const a = Math.PI + (i * Math.PI) / 20;
    return `M${r(CX + Math.cos(a) * RI)} ${r(SPRING + Math.sin(a) * RI)}L${r(CX + Math.cos(a) * RO)} ${r(SPRING + Math.sin(a) * RO)}`;
  });
  const ring = `M${CX - RO} ${SPRING}A${RO} ${RO} 0 0 1 ${CX + RO} ${SPRING}H${CX + RI}A${RI} ${RI} 0 0 0 ${CX - RI} ${SPRING}Z`;
  const pilaster = (x0: number, key: string) => (
    <g key={key}>
      <rect x={x0} y={SPRING} width={RO - RI + 6} height={480} fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.4" />
      <rect x={x0 + 9} y={SPRING + 30} width={RO - RI - 12} height={430} fill="url(#v-i)" stroke="var(--ink)" strokeWidth="0.9" />
      {/* capital */}
      <rect x={x0 - 10} y={SPRING - 4} width={RO - RI + 26} height="16" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.3" />
      <rect x={x0 - 4} y={SPRING + 12} width={RO - RI + 14} height="12" fill="url(#hz-i)" stroke="var(--ink)" strokeWidth="1" />
      {/* plinth */}
      <rect x={x0 - 14} y={872} width={RO - RI + 34} height="30" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.3" />
      <rect x={x0 - 22} y={902} width={RO - RI + 50} height="60" fill="url(#lh-i)" stroke="var(--ink)" strokeWidth="1.3" />
    </g>
  );
  return (
    <g>
      <path d={ring} fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.6" />
      <path d={`M${CX - RO + 12} ${SPRING}A${RO - 12} ${RO - 12} 0 0 1 ${CX + RO - 12} ${SPRING}`} fill="none" stroke="var(--ink)" strokeWidth="0.8" />
      <g stroke="var(--ink)" strokeWidth="1">
        {vous.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      {pilaster(CX - RO, "l")}
      {pilaster(CX + RI - 6, "r")}
      {/* keystone, urn and bouquet */}
      <path d={`M${CX - 26} ${SPRING - RO - 8}H${CX + 26}L${CX + 18} ${SPRING - RI + 8}H${CX - 18}Z`} fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.4" />
      <path d={`M${CX - 14} ${SPRING - RO + 2}H${CX + 14}L${CX + 10} ${SPRING - RI - 4}H${CX - 10}Z`} fill="url(#h-i)" />
      <path d={`M${CX - 30} ${SPRING - RO - 8}c4 -26 56 -26 60 0z`} fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.3" />
      <path d={`M${CX - 30} ${SPRING - RO - 8}c4 -26 56 -26 60 0`} fill="url(#x-i)" />
      <path d={`M${CX - 36} ${SPRING - RO - 28}h72`} stroke="var(--ink)" strokeWidth="2" />
      <Flower x={CX} y={SPRING - RO - 58} R={18} t="i" petals={8} />
      <Flower x={CX - 36} y={SPRING - RO - 42} R={11} t="i" />
      <Flower x={CX + 36} y={SPRING - RO - 42} R={11} t="i" />
      <Vine points={[[CX - 44, SPRING - RO - 34], [CX - 70, SPRING - RO - 52], [CX - 96, SPRING - RO - 46]]} t="p" size={12} seed={8} />
      <Vine points={[[CX + 44, SPRING - RO - 34], [CX + 70, SPRING - RO - 52], [CX + 96, SPRING - RO - 46]]} t="p" size={12} seed={9} />
      {/* ivy over the shoulders of the arch */}
      <Vine
        points={Array.from({ length: 8 }, (_, i) => {
          const a = Math.PI + 0.08 + i * 0.11;
          return [CX + Math.cos(a) * (RO + 4), SPRING + Math.sin(a) * (RO + 4)] as [number, number];
        })}
        t="p"
        size={15}
        seed={21}
      />
      <Vine
        points={Array.from({ length: 8 }, (_, i) => {
          const a = -0.08 - i * 0.11;
          return [CX + Math.cos(a) * (RO + 4), SPRING + Math.sin(a) * (RO + 4)] as [number, number];
        })}
        t="p"
        size={15}
        seed={22}
      />
    </g>
  );
});

function Layer({ children, x, y }: { children: ReactNode; x?: MotionValue<number>; y?: MotionValue<number> }) {
  return (
    <motion.svg className="plate-layer" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" style={{ x, y }} aria-hidden="true">
      {children}
    </motion.svg>
  );
}

export type PlateMotion = {
  sky: { x: MotionValue<number>; y: MotionValue<number> };
  village: { x: MotionValue<number>; y: MotionValue<number> };
  arch: { x: MotionValue<number>; y: MotionValue<number> };
  hedge: { x: MotionValue<number>; y: MotionValue<number> };
};

/** All hero layers, back to front. Each can drift on its own for parallax. */
export function HeroPlate({ m }: { m: PlateMotion }) {
  return (
    <>
      <Layer {...m.sky}>
        <Sky />
      </Layer>
      <Layer {...m.village}>
        <Village />
      </Layer>
      <Layer {...m.arch}>
        <Interior />
        <Arch />
      </Layer>
      <Layer {...m.hedge}>
        <Hedge />
      </Layer>
    </>
  );
}
