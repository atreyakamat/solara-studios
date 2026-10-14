import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brand, cta, nav } from "../content";
import { roman } from "../art/engrave";
import { Icon, Mark } from "../ui";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Underline the link for the section in the middle of the screen.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-sec]"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.getAttribute("data-sec"))),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav" data-scrolled={scrolled}>
      <div className="wrap nav-in">
        <a className="brand" href="#top" aria-label={`${brand}, back to top`}>
          <Mark />
          <span>{brand}</span>
        </a>
        <nav className="links" aria-label="Main">
          {nav.map((l) => (
            <a key={l.href} className="link" href={l.href} aria-current={active && l.href === `#${active}` ? "true" : undefined}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="btn nav-cta" href={cta.href}>
          <span>{cta.label}</span>
        </a>
        <button type="button" className="burger" aria-expanded={open} aria-controls="menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
          <Icon name={open ? "close" : "menu"} size={20} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id="menu"
            className="menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <nav className="wrap" aria-label="Mobile">
              {nav.map((l, i) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                  <small>{roman(i + 1)}.</small>
                  {l.label}
                </a>
              ))}
              <a href={cta.href} onClick={() => setOpen(false)}>
                <small>→</small>
                {cta.label}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
