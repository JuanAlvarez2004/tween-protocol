import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useMediaQuery } from "react-responsive"

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  useGSAP(() => {
    const tl = gsap.timeline({
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#services-section",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      }
    })

    tl
      .from("#services-section h2", {
        y: 200,
        alpha: 0,
        duration: 1.5,
      })
      .from("#services-section p", {
        y: 200,
        alpha: 0,
        duration: 1.5,
      }, "<")

    if (!isMobile) {
      tl.from("#container-bars span", {
        x: 250,
        alpha: 0,
        stagger: 0.2,
        duration: 1.5,
      }, "<")
        .from("#container-bars img", {
          alpha: 0,
          duration: 1.5,
        }, "<")
    } else {
      tl.from("#container-bars img", {
        y: 200,
        alpha: 0,
        duration: 1.5,
      }, "<")
    }
  }, [])

  return (
    <section id="services-section" className="min-h-96 md:pl-5 px-6 overflow-hidden mb-0 mt-10 flex flex-col">
      <div className="relative flex-2 flex flex-col lg:flex-row gap-4">
        <div className="md:ml-10 flex-1 font-family-lato flex justify-center flex-col">
          <h2 className="text-8xl md:text-9xl font-family-oswald line-through text-center md:text-left">Services</h2>
          <p className="text-sm md:text-base mt-3 text-center md:text-start">
            We offer comprehensive digital solutions that transform ideas into exceptional web experiences. Our specialized approach includes front-end web development using modern technologies, user-centered UX/UI design, interactive web animations with GSAP, consistent digital branding, web performance optimization, and digital experience consulting to maximize the impact of your online presence.
          </p>
        </div>
        <div id="container-bars" className="relative flex justify-center -z-10 flex-1 pointer-events-none overflow-hidden">
          <span className="hidden lg:block absolute bottom-0 right-0 top-0 h-10 bg-black w-lg"></span>
          <span className="hidden lg:block absolute transform top-4/11 right-0 h-27 bg-black w-md"></span>
          <span className="hidden lg:block absolute bottom-0 right-0 h-6 bg-black w-lg"></span>
          <div className="relative lg:absolute bottom-0 right-0 object-cover">
            <img src="../../images/face-services.png" className="grayscale mask-b-from-60%" />
          </div>
        </div>
      </div>
    </section >
  )
}
