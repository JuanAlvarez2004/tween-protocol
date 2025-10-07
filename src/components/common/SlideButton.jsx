import { Link } from "react-router";
import gsap from "gsap";
import { useRef } from "react";

export default function SlideButton({ content = "Click", style = {} }) {
  const buttonRef = useRef(null)
  const containerRef = useRef(null)
  const twinRef = useRef(null)

  const handleMouseEnter = () => {
    if (twinRef.current) return; // Evitar crear múltiples clones

    // Crear el clon del botón
    const twin = buttonRef.current.cloneNode(true)
    twin.style.position = 'absolute'
    twin.style.top = '0'
    twin.style.left = '0'
    twin.style.width = '100%'

    containerRef.current.appendChild(twin)
    twinRef.current = twin

    // Posicionar el twin inicialmente debajo (fuera de vista)
    gsap.set(twin, { y: buttonRef.current.offsetHeight })

    // Animar el botón original hacia arriba
    gsap.to(buttonRef.current, {
      y: -buttonRef.current.offsetHeight,
      duration: 0.3,
      ease: "power2.out",
    })

    // Animar el clon desde abajo hacia su posición
    gsap.to(twin, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  const handleMouseLeave = () => {
    if (!twinRef.current) return

    // Animar el botón original de vuelta a su posición
    gsap.to(buttonRef.current, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    })

    // Animar el clon hacia abajo y luego eliminarlo
    gsap.to(twinRef.current, {
      y: buttonRef.current.offsetHeight,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        if (twinRef.current) {
          containerRef.current.removeChild(twinRef.current)
          twinRef.current = null
        }
      }
    })
  }

  return (
    <div ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={style} id="btn-container" className="gap-3 relative overflow-hidden border-b-2">
      <button ref={buttonRef} id="back-btn" className="py-1 flex gap-3 relative cursor-crosshair">
        <span className="font-family-lato text-md whitespace-nowrap">
          {content}
        </span>
      </button>
    </div>
  )
}