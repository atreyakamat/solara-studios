import { brand, columns, contact, contactBand, EMAIL, socials, tagline, whatsappLink } from "../content";
import { StarField } from "../art/parts";
import { Skyline } from "../art/Skyline";
import { Arrow, Em, Icon, Mark } from "../ui";
import { Reveal } from "./Reveal";

export function ContactBand() {
  return (
    <section className="cta" id="contact" data-sec="contact" aria-labelledby="cta-h">
      <svg className="cta-stars" viewBox="0 0 1400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <StarField seed={77} n={90} x={0} y={0} w={1400} h={500} />
      </svg>
      <div className="wrap ctagrid">
        <Reveal>
          <span className="kicker">Contact</span>
          <h2 className="ctat" id="cta-h">
            <Em text={contactBand.title} />
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p>{contactBand.body}</p>
          <div className="ctabtns">
            <a className="btn btn-paper" href={contactBand.action.href} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={16} />
              <span>{contactBand.action.label}</span>
            </a>
            <a className="btn btn-ghost" href={contactBand.secondary.href}>
              <span>{contactBand.secondary.label}</span>
              <Arrow />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const external = (href: string) => href.startsWith("http");
  return (
    <footer className="foot">
      <div className="wrap fgrid">
        <div className="fbrand">
          <a className="brand" href="#top">
            <Mark size={26} />
            <span>{brand}</span>
          </a>
          <p>{tagline}</p>
          <ul className="contact">
            <li>
              <Icon name="mail" size={16} />
              <a href={`mailto:${EMAIL}`}>{contact.email}</a>
            </li>
            <li>
              <Icon name="whatsapp" size={16} />
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                {contact.phone}
              </a>
            </li>
            <li>
              <Icon name="pin" size={16} />
              <span>{contact.location}</span>
            </li>
          </ul>
        </div>
        {columns.map((c) => (
          <div key={c.title}>
            <h3 className="fh">{c.title}</h3>
            <ul className="flist">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} {...(external(l.href) ? { target: "_blank", rel: "noreferrer" } : {})}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="land">
        <Skyline t="i" />
      </div>
      <div className="wrap fbar">
        <span>
          © {year} {brand}. Panjim, Goa.
        </span>
        <div className="socials">
          {socials.map((s) => (
            <a key={s.kind} href={s.href} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" size={17} />
            </a>
          ))}
        </div>
        <a className="top" href="#top">
          Back to top <Arrow size={14} />
        </a>
      </div>
    </footer>
  );
}
