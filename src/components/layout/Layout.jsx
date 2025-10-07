import Header from "./Header";
import BallCursor from "../common/BallCursor";
import { useRef } from "react";
import Home from "../../sections/Home";
import About from "../../sections/About";
import Services from "../../sections/Services";
import Contact from "../../sections/Contact";

export default function Layout() {
  const ballCursorRef = useRef(null)

  return (
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
  );
}
