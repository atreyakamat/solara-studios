import { useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { solutions, solutionsCopy } from "../content";
import { roman } from "../art/engrave";
import { Arrow, Em, Icon, Mark } from "../ui";
import { Reveal } from "./Reveal";

type Art = "tower" | "typewriter" | "steamer" | "monogram";

/** Small engraved vignettes for the top of each bookmark (drawn in a 200 x 220 box). */
function Vignette({ art, fg, bg }: { art: Art; fg: string; bg: string }) {
  const s = { stroke: fg, strokeWidth: 1.6, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (art) {
    case "tower": // a Fontainhas house front with a balcão
      return (
        <g {...s}>
          <path d="M40 92L100 58L160 92Z" fill={bg} />
          <rect x="48" y="92" width="104" height="96" fill={bg} />
          <path d="M60 128V108a10 10 0 0 1 20 0v20zM90 128V108a10 10 0 0 1 20 0v20zM120 128V108a10 10 0 0 1 20 0v20z" />
          <path d="M48 140h104M56 188v-34h88v34M88 188v-22a12 12 0 0 1 24 0v22" />
          <path d="M70 108v20M100 108v20M130 108v20" strokeWidth="0.9" />
          <path d="M30 196h140" />
        </g>
      );
    case "typewriter": // an open ledger: the digital library
      return (
        <g {...s}>
          <path d="M100 82c-18-12-42-14-62-8v104c20-6 44-4 62 8 18-12 42-14 62-8V74c-20-6-44-4-62 8z" fill={bg} />
          <path d="M100 82v104" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path key={i} d={`M50 ${98 + i * 13}c14-4 28-3 40 2M110 ${100 + i * 13}c12-5 26-6 40-2`} strokeWidth="0.9" />
          ))}
          <path d="M100 60v-14M88 54l12-8 12 8" />
        </g>
      );
    case "steamer": // a Goan fishing boat under a map pin
      return (
        <g {...s}>
          <path d="M100 52c-14 0-24 10-24 23 0 17 24 37 24 37s24-20 24-37c0-13-10-23-24-23z" fill={bg} />
          <circle cx="100" cy="75" r="8" />
          <path d="M38 160h124l-16 22H54z" fill={bg} />
          <path d="M100 160V120l34 34H100M100 128l-26 26h26" />
          <path d="M30 192c10-6 20-6 30 0s20 6 30 0 20-6 30 0 20 6 30 0 20-6 30 0" strokeWidth="1" />
        </g>
      );
    case "monogram": // the Solara sun, kept lit
      return (
        <g>
          <circle cx="100" cy="120" r="56" fill={bg} stroke={fg} strokeWidth="1.6" />
          <circle cx="100" cy="120" r="48" fill="none" stroke={fg} strokeWidth="0.8" strokeDasharray="1 4" />
          <g transform="translate(70 90) scale(1.9)" color={fg}>
            <Mark size={32} />
          </g>
        </g>
      );
  }
}

function Bookmark({ item, i }: { item: (typeof solutions)[number]; i: number }) {
  const paper = item.tone === "paper";
  const fg = paper ? "var(--ink)" : "var(--paper)";
  const bg = paper ? "var(--paper)" : "var(--ink)";
  return (
    <svg viewBox="0 0 200 600" aria-hidden="true">
      <path d="M0 0H200V600L100 548L0 600Z" fill={bg} />
      <path d="M10 10H190V578L100 532L10 578Z" fill="none" stroke={fg} strokeWidth="1" />
      <path d="M16 16H184V568L100 524L16 568Z" fill="none" stroke={fg} strokeWidth="0.5" />
      <text x="100" y="44" textAnchor="middle" fill={fg} fontSize="13" letterSpacing="3" fontWeight="600">
        {roman(i + 1)} · {item.kicker.toUpperCase()}
      </text>
      <g transform="translate(0 20)">
        <Vignette art={item.art as Art} fg={fg} bg={bg} />
      </g>
      <path d="M40 252h120" stroke={fg} strokeWidth="0.8" />
      <foreignObject x="34" y="266" width="132" height="240">
        <p className="bm-quote" style={{ color: fg }}>«{item.quote}»</p>
      </foreignObject>
    </svg>
  );
}

export function Bookmarks() {
  const [sel, setSel] = useState(0);
  const item = solutions[sel];
  const onKey = (e: KeyboardEvent) => {
    const n = solutions.length;
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown" ? (sel + 1) % n
      : e.key === "ArrowLeft" || e.key === "ArrowUp" ? (sel - 1 + n) % n
      : e.key === "Home" ? 0
      : e.key === "End" ? n - 1
      : null;
    if (next === null) return;
    e.preventDefault();
    setSel(next);
    document.getElementById(`bm-${next}`)?.focus();
  };
  return (
    <section className="sec sol" id="solutions" data-sec="solutions" aria-labelledby="sol-h">
      <div className="wrap">
        <Reveal className="sechead">
          <div>
            <span className="kicker">{solutionsCopy.kicker}</span>
            <h2 className="h2" id="sol-h">
              <Em text={solutionsCopy.title} />
            </h2>
          </div>
          <p className="lede">{solutionsCopy.intro}</p>
        </Reveal>
        <div className="solgrid">
          <div className="marks" role="tablist" aria-label="What the starter includes" onKeyDown={onKey}>
            {solutions.map((s, i) => (
              <div key={s.title} className="markcol">
                <button
                  id={`bm-${i}`}
                  type="button"
                  role="tab"
                  className="mark"
                  aria-selected={sel === i}
                  aria-controls="bm-panel"
                  tabIndex={sel === i ? 0 : -1}
                  onClick={() => setSel(i)}
                  style={{ ["--y" as string]: `${[10, 0, 18, 6][i]}px`, ["--r" as string]: `${[-2.5, 1.5, -1, 2.5][i]}deg` }}
                >
                  <Bookmark item={s} i={i} />
                  <span className="sr">{s.title}</span>
                </button>
                <span className="marklabel" data-on={sel === i}>
                  {roman(i + 1)}
                </span>
              </div>
            ))}
          </div>
          <div className="panel" id="bm-panel" role="tabpanel" aria-labelledby={`bm-${sel}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={sel}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <span className="panelnum">
                  {roman(sel + 1)}. {item.kicker}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul className="points">
                  {item.points.map((p) => (
                    <li key={p}>
                      <Icon name="plus" size={14} />
                      {p}
                    </li>
                  ))}
                </ul>
                <a className="btn btn-paper" href="#pricing">
                  <span>See the price</span>
                  <Arrow />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
