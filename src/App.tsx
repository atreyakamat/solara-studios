import { MotionConfig } from "framer-motion";
import { PlateDefs } from "./art/parts";
import { Enquiry } from "./Enquiry";
import { About, Ticker } from "./sections/About";
import { Bookmarks } from "./sections/Bookmarks";
import { ContactBand, Footer } from "./sections/Footer";
import { Goa } from "./sections/Goa";
import { Hero } from "./sections/Hero";
import { Nav } from "./sections/Nav";
import { Pricing } from "./sections/Pricing";
import { Faq } from "./sections/Faq";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <PlateDefs />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Ticker />
        <About />
        <Bookmarks />
        <Pricing />
        <Faq />
        <Goa />
        <ContactBand />
        <Enquiry />
      </main>
      <Footer />
    </MotionConfig>
  );
}
