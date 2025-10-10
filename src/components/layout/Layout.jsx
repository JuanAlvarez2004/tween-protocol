import Header from "./Header";
import BallCursor from "../common/BallCursor";
import SEOHead from "../common/SEOHead";
import { useRef } from "react";
import Home from "../../sections/Home";
import About from "../../sections/About";
import Services from "../../sections/Services";
import Contact from "../../sections/Contact";

export default function Layout() {
  const ballCursorRef = useRef(null)

  return (
    <>
      <SEOHead 
        title="Tween Protocol® | Portfolio & Services - Digital Studio"
        description="Explore our portfolio and comprehensive digital services. From front-end development to interactive animations, UX/UI design, and web performance optimization."
        keywords="portfolio, digital services, front-end development, UX/UI design, interactive animations, GSAP, web development, digital branding, web optimization"
        canonical="https://tweenprotocol.com/app"
        ogType="website"
      />
      <div className="font-family-lato min-h-dvh min-w-dvw flex flex-col overflow-x-hidden">
        <Header />

        <main className="flex-grow">
          <Home />
          <About />
          <Services />
          <Contact />
        </main>

        <BallCursor ref={ballCursorRef} />
      </div>
    </>
  );
}
