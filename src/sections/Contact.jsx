import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SimpleButton from "../components/common/SimpleButton"

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {

  useGSAP(() => {
    const tl = gsap.timeline({
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#contact-section",
        start: "center bottom",
        end: "bottom bottom",
        scrub: true
      }
    })

    tl
      .from("#first-contact-title", {
        x: -200,
        alpha: 0,
        duration: 1
      })
      .from("#contact-img", {
        y: 200,
        alpha: 0,
        duration: 1
      }, "<")
  })


  return (
    <section id="contact-section" className="min-h-screen relative px-5 overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <h2 id="first-contact-title" className="font-family-oswald text-8xl md:text-[16rem] leading-none line-through">Contáctame</h2>
      </div>
      <div className="hidden absolute inset-0 -bottom-10 md:flex items-center justify-center z-10">
        <img id="contact-img" src="../../images/reaching.jpg" className="scale-50" />
      </div>
      <div className="absolute inset-0 backdrop-blur-md z-20"></div>
      <div className="absolute z-30 p-10 inset-0 flex items-center justify-center">
        <div id="contact-box" className="font-family-lato text-center bg-white/50 p-6 rounded-md flex flex-col gap-4">
          <div className="text-lg">
            <p className="mb-2">¿Listo para llenar los espacios en blanco?</p>
            <p className="text-sm opacity-80">Conectemos y creemos algo extraordinario juntos</p>
          </div>
          <div className="text-sm">
            <div className="flex flex-row md:flex-row gap-4 justify-center items-center ">
              <SimpleButton text="TikTok" link="https://www.tiktok.com/@blank_studio_co" />
              <SimpleButton text="Instagram" link="https://www.instagram.com/blank_studio_co/" />
              <SimpleButton text="Facebook" link="https://www.facebook.com/people/Blankstudioco/61580125604933/" />
            </div>
          </div>
          <div>
            <p>@blank_studio_co</p>
          </div>
        </div>
      </div>
    </section>
  )
}
