import { useEffect, useRef, type PointerEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { HeroPlate } from "../art/HeroPlate";
import { hero } from "../content";
import { Arrow, Mark } from "../ui";

const spring = { stiffness: 60, damping: 18, mass: 0.6 };

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion() ?? false;

  // Pointer parallax: -1..1 across the stage, smoothed.
  const px = useSpring(0, spring);
  const py = useSpring(0, spring);
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType === "touch") return;
    const b = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - b.left) / b.width) * 2 - 1);
    py.set(((e.clientY - b.top) / b.height) * 2 - 1);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  // Scroll parallax: deeper layers sink slower as the hero scrolls away.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const depth = (d: number) => useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : d]);
  const sY = depth(60);
  const vY = depth(110);
  const aY = depth(170);
  const hY = depth(260);

  const layer = (k: number, scrollY: ReturnType<typeof depth>) => ({
    x: useTransform(px, (v) => v * -k),
    y: useTransform([py, scrollY], ([a, b]: number[]) => a * -k * 0.6 + b),
  });
  const m = {
    sky: layer(6, sY),
    village: layer(12, vY),
    arch: layer(4, aY),
    hedge: layer(22, hY),
  };

  // Etched intro: a cobalt veil opens from the arch outwards.
  const veil = useMotionValue(reduced ? 140 : 0);
  const mask = useMotionTemplate`radial-gradient(circle at 50% 58%, transparent ${veil}%, #000 calc(${veil}% + 7%))`;
  useEffect(() => {
    if (reduced) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 2200);
      const eased = 1 - Math.pow(1 - t, 3);
      veil.set(eased * 140);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced, veil]);

  const [l1, l2] = hero.title.split("\n");

  return (
    <section ref={ref} className="hero" id="top" data-sec="top" aria-labelledby="hero-title">
      <div className="stage" onPointerMove={onMove} onPointerLeave={onLeave}>
        <motion.div
          className="cover"
          initial={reduced ? false : { scale: 1.07 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <HeroPlate m={m} />
          <motion.div className="copy" style={m.arch}>
            <motion.div
              className="copy-in"
              initial={reduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <span className="copy-mark">
                <Mark size={30} />
              </span>
              <h1 id="hero-title" className="h1">
                <span>{l1}</span>
                <span>{l2}</span>
              </h1>
              <p className="sub">{hero.subtitle}</p>
              <a className="btn" href={hero.action.href}>
                <span>{hero.action.label}</span>
                <Arrow />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="shoot" aria-hidden="true" />
        <div className="frame" aria-hidden="true" />
        <span className="corner" style={{ left: 24, top: 22 }}>{hero.est}</span>
        <span className="corner" style={{ right: 24, top: 22 }}>{hero.edition}</span>
        <span className="cue" aria-hidden="true">
          Scroll <i />
        </span>
        <motion.div className="veil" style={{ WebkitMaskImage: mask, maskImage: mask }} aria-hidden="true" />
      </div>
    </section>
  );
}
