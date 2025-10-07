import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import AnchorMenu from "../common/AnchorMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  useGSAP(() => {
    const headerMenu = document.getElementById("header-menu")
    const menuButton = document.getElementById("menu-button")

    if (headerMenu && menuButton) {
      gsap.set(headerMenu, { y: -headerMenu.offsetHeight + menuButton.offsetHeight + 10 })
    }
  }, []) // Solo se ejecuta una vez al montar

  useGSAP(() => {
    const headerMenu = document.getElementById("header-menu")
    const menuButton = document.getElementById("menu-button")

    if (isMenuOpen) {
      gsap.to(headerMenu, {
        y: 0,
        duration: 1,
        ease: "power4.out"
      })
    } else {
      gsap.to(headerMenu, {
        y: -headerMenu.offsetHeight + menuButton.offsetHeight + 10,
        // y: -20, 
        duration: 1,
        ease: "power4.out"
      })
    }
  }, [isMenuOpen]);

  return (
    <header id="header-menu" className="fixed top-0 left-0 right-0 flex flex-col justify-center z-100">
      <div className="absolute inset-0 backdrop-blur-md backdrop-grayscale"></div>
      <nav>
        <ul className="list-none gap-3 p-10 text-4xl w-full">
          <li>
            <AnchorMenu href="#home-section" content="Inicio" />
          </li>
          <li>
            <AnchorMenu href="#about-section" content="Acerca" />
          </li>
          <li>
            <AnchorMenu href="#services-section" content="Servicios" />
          </li>
          <li>
            <AnchorMenu href="#contact-section" content="Contacto" />
          </li>
        </ul>
      </nav>
      <div className="inset-0 self-center z-20">
        <div id="menu-button" className="cursor-crosshair" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {
            isMenuOpen
              ? <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
              : <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
          }
        </div>
      </div>
    </header>
  )
}