import { useState } from "react";
import { motion } from "framer-motion";
import { services, servicesCopy, whatsappLink } from "../content";
import { roman } from "../art/engrave";
import { Arrow, Em, Icon } from "../ui";
import { Reveal } from "./Reveal";

const tags = [
  { k: "Business Starter", price: "₹2,500", note: "paid once", lines: ["Website", "Starter digital library", "Posting"] },
  { k: "Care Plan · to start", price: "Free", was: "₹899", note: "while you settle in", lines: ["Updates and edits", "Uptime checks"] },
  { k: "Care Plan · after", price: "₹799", note: "per year", lines: ["Edits on request", "Speed and uptime checks"] },
];

export function Pricing() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="sec" id="pricing" data-sec="pricing" aria-labelledby="price-h">
      <div className="wrap">
        <Reveal className="sechead">
          <div>
            <span className="kicker">{servicesCopy.kicker}</span>
            <h2 className="h2" id="price-h">
              <Em text={servicesCopy.title} />
            </h2>
          </div>
          <p className="lede">{servicesCopy.intro}</p>
        </Reveal>

        <div className="tags">
          {tags.map((t, i) => (
            <Reveal key={t.k} delay={i * 0.1}>
              <motion.article className="tag" data-main={i === 0} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
                <span className="tag-k">
                  {roman(i + 1)} · {t.k}
                </span>
                <p className="tag-price">
                  {t.was && <s>{t.was}</s>}
                  {t.price}
                </p>
                <span className="tag-note">{t.note}</span>
                <ul>
                  {t.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
                {i === 0 && (
                  <a className="btn btn-paper" href={whatsappLink("Hi Solara Studios, I want the ₹2,500 Business Starter for my business.")} target="_blank" rel="noreferrer">
                    <span>Start on WhatsApp</span>
                    <Arrow />
                  </a>
                )}
              </motion.article>
            </Reveal>
          ))}
        </div>

        <div className="ledger">
          {services.map((s, i) => {
            const on = open === i;
            return (
              <div key={s.title} className="row" data-open={on}>
                <button type="button" className="rowbtn" aria-expanded={on} aria-controls={`row-${i}`} onClick={() => setOpen(on ? null : i)}>
                  <span className="num">{roman(i + 1)}.</span>
                  <span className="rowt">{s.title}</span>
                  <span className="rows">{s.summary}</span>
                  <span className="plus">
                    <Icon name="plus" size={18} />
                  </span>
                </button>
                <div className="fold" id={`row-${i}`} role="region">
                  <div>
                    <div className="foldin">
                      <span className="gap" />
                      <p>{s.details}</p>
                      <div>
                        <ul className="dl">
                          {s.deliverables.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                        <p className="dur">{s.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="fine">Prices in Indian rupees; dollar figures are for clients abroad. Pay by UPI or bank transfer in India, or international bank transfer from abroad. Your scope is written down and agreed before you pay.</p>
      </div>
    </section>
  );
}
