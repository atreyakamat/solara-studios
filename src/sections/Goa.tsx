import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { notes } from "../content";
import { roman } from "../art/engrave";
import { Skyline } from "../art/Skyline";
import { Reveal } from "./Reveal";

/** "Made for Goa": an engraved Fontainhas street that slides as you scroll, and who it serves. */
export function Goa() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["4%", "-4%"]);
  return (
    <section className="sec goa" id="goa" data-sec="goa" aria-labelledby="goa-h">
      <div className="wrap">
        <Reveal className="sechead">
          <div>
            <span className="kicker">Made for Goa</span>
            <h2 className="h2" id="goa-h">
              Websites for the <em>Latin Quarter</em> and beyond
            </h2>
          </div>
          <p className="lede">
            Goa runs on hospitality, tourism and local trade, and most customers find a business on their phone. Every site is mobile-first, light to load and built around a Google search, a WhatsApp message and a quick call.
          </p>
        </Reveal>
      </div>
      <div className="toile" ref={ref}>
        <motion.div className="toile-in" style={{ x }}>
          <Skyline t="i" />
        </motion.div>
      </div>
      <div className="wrap">
        <div className="notes" role="list">
          {notes.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.08}>
              <div role="listitem" className="note">
                <span className="note-n">{roman(i + 1)}</span>
                <b>{n.title}</b>
                <p>{n.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
