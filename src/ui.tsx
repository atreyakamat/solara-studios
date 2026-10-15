import { Fragment } from "react";

/** Solara mark: a rising sun under an arch. */
export function Mark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M5 28V14a11 11 0 0 1 22 0v14" />
      <path d="M9.5 28a6.5 6.5 0 0 1 13 0" />
      <path d="M16 15.5v3M10.2 18.2l2 2M21.8 18.2l-2 2" />
      <path d="M3 28h26" />
    </svg>
  );
}

export function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function Icon({ name, size = 18 }: { name: "menu" | "close" | "mail" | "phone" | "pin" | "linkedin" | "whatsapp" | "plus"; size?: number }) {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "menu":
      return <svg {...p}><path d="M4 7h16M4 12h16M4 17h10" /></svg>;
    case "close":
      return <svg {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>;
    case "plus":
      return <svg {...p}><path d="M12 5v14M5 12h14" /></svg>;
    case "mail":
      return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="m4 7 8 6 8-6" /></svg>;
    case "phone":
      return <svg {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1" /></svg>;
    case "pin":
      return <svg {...p}><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>;
    case "whatsapp":
      return <svg {...p}><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1a4 4 0 0 1-2-2l1-1-1-2z" /></svg>;
    case "linkedin":
      return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></svg>;
  }
}

/** Renders "plain *emphasis* plain" with the starred part in italic cobalt. */
export function Em({ text }: { text: string }) {
  const parts = text.split(/\*([^*]+)\*/g);
  return (
    <>
      {parts.map((s, i) => (i % 2 ? <em key={i}>{s}</em> : <Fragment key={i}>{s}</Fragment>))}
    </>
  );
}

/** Sparkle used as a separator in the ticker. */
export function Spark({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" aria-hidden="true">
      <path d="M6 0Q6 6 12 6Q6 6 6 12Q6 6 0 6Q6 6 6 0Z" fill="currentColor" />
    </svg>
  );
}
