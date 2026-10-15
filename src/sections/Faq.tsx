import { useState } from "react";
import { faqCopy, faqs } from "../content";
import { roman } from "../art/engrave";
import { Em, Icon } from "../ui";
import { Reveal } from "./Reveal";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="sec faq" id="faq" data-sec="faq" aria-labelledby="faq-h">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="wrap faq-grid">
        <Reveal className="faq-head">
          <span className="kicker">{faqCopy.kicker}</span>
          <h2 className="h2" id="faq-h">
            <Em text={faqCopy.title} />
          </h2>
          <p className="lede">{faqCopy.intro}</p>
        </Reveal>
        <div className="ledger">
          {faqs.map((f, i) => {
            const on = open === i;
            return (
              <div key={f.q} className="row" data-open={on}>
                <button type="button" className="rowbtn faq-btn" aria-expanded={on} aria-controls={`faq-${i}`} onClick={() => setOpen(on ? null : i)}>
                  <span className="num">{roman(i + 1)}.</span>
                  <span className="rowt faq-q">{f.q}</span>
                  <span className="plus">
                    <Icon name="plus" size={18} />
                  </span>
                </button>
                <div className="fold" id={`faq-${i}`} role="region">
                  <div>
                    <p className="faq-a">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
