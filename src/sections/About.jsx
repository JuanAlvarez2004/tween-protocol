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
          end: "center bottom",
          scrub: true,
        },
      })

      tlDesktop
        .from("#about-part-1", {
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
    } else {
      const tlMobile = gsap.timeline({
        scrollTrigger: {
          trigger: "#about-section",
          start: "top bottom",
          end: "center bottom",
          scrub: true,
        },
      })

      tlMobile
        .from("#about-part-1-text", {
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
    }
  }, [])


  return (
    <section id="about-section" className="relative h-300px md:h-dvh flex flex-col gap-8 md:gap-0 md:flex-row mt-10 sm:my-2 lg:px-14 overflow-hidden select-none">
      <div className="flex-1 px-4 lg:px-8">
        <div id="about-part-1" className="h-full flex flex-col justify-center md:justify-start">
          <div id="about-part-1-text" className="p-0 md:p-3 text-center md:text-balance flex-none h-auto md:h-37 flex justify-center items-center">
            <p className="font-family-lato mt-2 text-sm md:text-base">We are a studio passionate about creating exceptional web experiences. Our approach centers on urban minimalism, where every element serves a purpose and functionality meets aesthetics.</p>
          </div>
          <div className="hidden md:block w-full shrink contrast-150">
            <img src="../../images/part-1-about.jpg" className="object-cover w-full h-full grayscale" />
          </div>
        </div>
      </div>
      <div className="flex-1 px-4 lg:px-8 z-20">
        <div id="about-part-2" className="h-80 md:h-full relative">
          <div className="absolute inset-0 w-full h-full grid place-content-center">
            <div id="about-title" className="font-family-oswald text-8xl md:text-[14rem] text-black line-through z-30">About</div>
          </div>
          <div className="w-full h-full opacity-95 md:opacity-100 md:contrast-150">
            <img src="../../images/part-2-about.jpg" className="object-cover w-full h-full grayscale" />
          </div>
        </div>
      </div>
      <div className="flex-1 px-4 lg:px-8">
        <div id="about-part-3" className="relative h-full flex flex-col justify-center md:justify-start">
          <div id="about-part-3-text" className="p-0 md:p-3 text-center md:text-balance flex-none h-auto md:h-37 flex justify-center items-center">
            <p className="font-family-lato mt-2 text-sm md:text-base">At Tween Protocol, we believe that empty spaces aren't limitations, but opportunities. Every project is an opportunity to fill those spaces with innovation, creativity, and digital solutions that transcend the ordinary.</p>
          </div>
          <div className="hidden md:block w-full shrink contrast-150 -z-10">
            <img src="../../images/part-3-about.jpg" className="object-cover w-full h-full grayscale" />
          </div>
        </div>
      </div>
    </section>
  )
}