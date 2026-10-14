import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EMAIL, whatsappLink } from "./content";

type Status = "idle" | "sending" | "sent" | "error";

const encode = (data: FormData) =>
  new URLSearchParams(Array.from(data.entries()) as [string, string][]).toString();

const initialPlan = () => {
  if (typeof window === "undefined") return "Business Starter";
  return new URLSearchParams(window.location.search).get("plan") ?? "Business Starter";
};

// Enquiry form posted to Netlify Forms (the hidden twin in index.html registers it).
export function Enquiry() {
  const [status, setStatus] = useState<Status>("idle");
  const reduced = useReducedMotion();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="enq" aria-labelledby="enq-title">
      <div className="wrap enq-grid">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <span className="kicker">Enquiry</span>
          <h2 id="enq-title" className="h2 enq-h">
            Tell us about <em>your business</em>
          </h2>
          <p className="lede enq-lede">
            Send a few lines and Atreya will reply with a written scope. Prefer to talk? Message on{" "}
            <a href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp</a> or write to{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.2, 0.7, 0.2, 1] }}
        >
          {status === "sent" ? (
            <p className="enq-done" role="status">
              Thank you. Your enquiry is with Atreya, and you will hear back personally.
            </p>
          ) : (
            <form name="enquiry" method="POST" data-netlify="true" netlify-honeypot="company" onSubmit={onSubmit} className="enq-form">
              <input type="hidden" name="form-name" value="enquiry" />
              <p hidden>
                <label>Leave this empty <input name="company" tabIndex={-1} autoComplete="off" /></label>
              </p>
              <label>
                <span>Your name</span>
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                <span>Business name</span>
                <input name="business" required autoComplete="organization" />
              </label>
              <label>
                <span>Phone or WhatsApp</span>
                <input name="phone" required inputMode="tel" autoComplete="tel" />
              </label>
              <label>
                <span>Plan</span>
                <select name="plan" defaultValue={initialPlan()}>
                  <option>Business Starter</option>
                  <option>Care Plan</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="enq-wide">
                <span>What does your business do?</span>
                <textarea name="message" rows={4} />
              </label>
              <div className="enq-wide enq-foot">
                <button type="submit" className="btn" disabled={status === "sending"}>
                  <span>{status === "sending" ? "Sending…" : "Send enquiry"}</span>
                </button>
                <small>Your details are only used to reply to this enquiry.</small>
              </div>
              {status === "error" && (
                <p className="enq-err enq-wide" role="alert">
                  That did not send. Please message on WhatsApp instead.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
