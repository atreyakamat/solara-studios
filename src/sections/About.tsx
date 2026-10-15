import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { about, clients, clientsLabel } from "../content";
import { Em, Mark, Spark } from "../ui";
import { Reveal } from "./Reveal";

export function Ticker() {
  const row = (hidden: boolean) => (
    <div className="tick" aria-hidden={hidden || undefined}>
      {clients.map((c) => (
        <span key={c} className="tick-item">
          <Spark />
          {c}
        </span>
      ))}
    </div>
  );
  return (
    <div className="wrap">
      <div className="ticker">
        <p className="tick-label">{clientsLabel}</p>
        <div className="tick-view">
          <div className="track">
            {row(false)}
            {row(true)}
          </div>
        </div>
      </div>
    </div>
  );
}

function Count({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = useReducedMotion();
  const [n, setN] = useState(reduced ? value : 0);
  useEffect(() => {
    if (!seen || reduced) return;
    const c = animate(0, value, { duration: 1.8, ease: [0.2, 0.7, 0.2, 1], onUpdate: setN });
    return () => c.stop();
  }, [seen, reduced, value]);
  return (
    <span ref={ref} className="stat-v">
      {Math.round(n).toLocaleString("en-IN")}
    </span>
  );
}

/** A circular engraved seal with the studio motto running round it; turns as you scroll. */
function Seal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-60, 120]);
  return (
    <div ref={ref}>
    <motion.svg className="seal" viewBox="0 0 200 200" style={{ rotate }} aria-hidden="true">
      <defs>
        <path id="seal-path" d="M100 100m-78 0a78 78 0 1 1 156 0a78 78 0 1 1 -156 0" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="56" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1 3" />
      <text fontSize="11.5" letterSpacing="2.6" fill="currentColor" style={{ textTransform: "uppercase", fontWeight: 600 }}>
        <textPath href="#seal-path" textLength="486" lengthAdjust="spacing">{about.seal}</textPath>
      </text>
      <g transform="translate(76 76) scale(1.5)" color="currentColor">
        <Mark size={32} />
      </g>
    </motion.svg>
    </div>
  );
}

export function About() {
  return (
    <section className="sec" id="about" data-sec="about" aria-labelledby="about-k">
      <div className="wrap">
        <div className="about">
          <Reveal>
            <span className="kicker" id="about-k">{about.kicker}</span>
            <p className="statement">
              <Em text={about.statement} />
            </p>
          </Reveal>
          <Reveal className="aside" delay={0.15}>
            <Seal />
            <p className="lede">{about.body}</p>
          </Reveal>
        </div>
        <dl className="stats">
          {about.stats.map((s, i) => (
            <Reveal key={s.label} className="stat" delay={i * 0.1}>
              <dd>
                <Count value={s.value} />
              </dd>
              <dt className="stat-l">{s.label}</dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
