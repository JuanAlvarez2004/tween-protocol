import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap"
import { useMediaQuery } from "react-responsive"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  
  useGSAP(() => {
    if (!isMobile) {
      const tlDesktop = gsap.timeline({
        scrollTrigger: {
          trigger: "#about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      // Animación de entrada (0% - 50% del scroll)
      tlDesktop.from("#about-part-1", {
        y: -400,
        alpha: 0,
        duration: 1.5,
      })
        .from("#about-part-2", {
          y: 400,
          alpha: 0,
          duration: 1.5,
        }, "<")
        .from("#about-part-3", {
          y: -400,
          alpha: 0,
          duration: 1.5,
        }, "<")
        .from("#about-title", {
          alpha: 0,
          duration: 1.5,
        }, "<")

      // Pausa en el estado visible (50% - 60% del scroll)
      tlDesktop.to("#about-part-1", {
        y: 0,
        alpha: 1,
        duration: 0.5,
      })
        .to("#about-part-3", {
          y: 0,
          alpha: 1,
          duration: 0.5,
        })

      // Animación de salida (60% - 100% del scroll)
      tlDesktop.to("#about-part-1", {
        y: 400,
        alpha: 0,
        duration: 1.5,
      })
        .to("#about-part-2", {
          y: -400,
          alpha: 0,
          duration: 1.5,
        }, "<")
        .to("#about-part-3", {
          y: 400,
          alpha: 0,
          duration: 1.5,
        }, "<")
        .to("#about-title", {
          alpha: 0,
          duration: 1.5,
        }, "<")
    } else {
      const tlMobile = gsap.timeline({
        scrollTrigger: {
          trigger: "#about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      // Animación de entrada (0% - 50% del scroll)
      tlMobile.from("#about-part-1-text", {
        y: 300,
        alpha: 0,
        duration: 1.5,
      })
        .from("#about-part-2", {
          y: 300,
          alpha: 0,
          duration: 1.5,
        }, "<")
        .from("#about-part-3-text", {
          y: 300,
          alpha: 0,
          duration: 1.5,
        }, "<")
        .from("#about-title", {
          y: 300,
          alpha: 0,
          duration: 1.5,
        }, "<")

      // Pausa en el estado visible (50% - 60% del scroll)
      tlMobile.to("#about-part-1-text", {
        y: 0,
        alpha: 1,
        duration: 0.5,
      })
        .to("#about-part-3-text", {
          y: 0,
          alpha: 1,
          duration: 0.5,
        })
        .to("#about-part-2", {
          y: 0,
          alpha: 1,
          duration: 0.5,
        })
        .to("#about-title", {
          y: 0,
          alpha: 1,
          duration: 0.5,
        })
    }
  }, [])


  return (
    <section id="about-section" className="relative h-300px md:h-dvh flex flex-col gap-8 md:gap-0 md:flex-row mt-10 sm:my-2 lg:px-14 overflow-hidden select-none">
      <div className="flex-1 px-4 lg:px-8">
        <div id="about-part-1" className="relative h-full flex flex-col justify-center md:justify-start">
          <div id="about-part-1-text" className="p-0 md:p-3 text-center md:text-balance">
            <p className="font-family-lato mt-2">Soy Juan David Alvarez Zapata, desarrollador y diseñador digital con pasión por crear experiencias web excepcionales. Mi enfoque se centra en el minimalismo urbano, donde cada elemento tiene un propósito y la funcionalidad se encuentra con la estética.</p>
          </div>
          <div className="hidden md:block w-full h-full contrast-150">
            <img src="../../images/part-1-about.jpg" className="object-cover w-full h-full grayscale" />
          </div>
        </div>
      </div>
      <div className="flex-1 px-4 lg:px-8 z-20">
        <div id="about-part-2" className="h-80 md:h-full relative">
          <div className="absolute inset-0 w-full h-full grid place-content-center">
            <div id="about-title" className="font-family-oswald text-8xl md:text-[14rem] text-black line-through z-30">Acerca</div>
          </div>
          <div className="w-full h-full opacity-95 md:opacity-100 md:contrast-150">
            <img src="../../images/part-2-about.jpg" className="object-cover w-full h-full grayscale" />
          </div>
        </div>
      </div>
      <div className="flex-1 px-4 lg:px-8">
        <div id="about-part-3" className="relative h-full flex flex-col justify-center md:justify-start">
          <div id="about-part-3-text" className="p-0 md:p-3 text-center md:text-balance">
            <p className="font-family-lato mt-2">En blank_, creemos que los espacios vacíos no son limitaciones, sino oportunidades. Cada proyecto es una oportunidad de llenar esos espacios con innovación, creatividad y soluciones digitales que trascienden lo ordinario.</p>
          </div>
          <div className="hidden md:block w-full h-full contrast-150 -z-10">
            <img src="../../images/part-3-about.jpg" className="object-cover w-full h-full grayscale" />
          </div>
        </div>
      </div>
    </section>
  )
}