import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } })

    tl.from('#first-title', {
      x: -50,
      alpha: 0,
      duration: 1,
    })
      .from('#second-title', {
        x: 50,
        alpha: 0,
        duration: 1,
      }, "<")
      .from('#body-text', {
        x: -50,
        alpha: 0,
        duration: 1,
      }, "<")
      .from('#top-bar', {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1,
      }, "<")
      .from('#bottom-bar', {
        scaleX: 0,
        transformOrigin: "right",
        duration: 1,
      }, "<")
  }, [])

  return (
    <section id="home-section" className="h-dvh grid place-content-center">
      <div className="px-5 grid grid-cols-1 lg:grid-cols-2 grid-rows-3 lg:grid-rows-2 lg:gap-x-20">
        <div className="font-family-oswald col-start-1 row-start-1 flex justify-center lg:justify-start items-end select-none">
          <span id="first-title" className="text-8xl lg:text-[13rem] whitespace-nowrap tracking-wide leading-none">blank_</span>
        </div>
        <div className="font-family-lato lg:col-start-2 lg:row-start-1 flex justify-center lg:justify-start items-start lg:items-end">
          <div className="flex flex-col justify-center w-md">
            <div id="top-bar" className=" bg-black h-4 mb-5"></div>
            <span id="body-text" className="font-family-lato text-center text-md">Estudio digital especializado en crear experiencias web excepcionales. Desde desarrollo frontend hasta animaciones interactivas, transformamos ideas en realidad digital con un enfoque minimalista y funcional.</span>
            <div id="bottom-bar" className=" bg-black h-4 mt-5"></div>
          </div>
        </div>
        <div className="mt-5 font-family-oswald lg:col-span-2 col-start-1 row-start-2 flex justify-center lg:justify-start items-start select-none text-center lg:text-left">
          <span id="second-title" className="text-7xl lg:text-[11rem] lg:whitespace-nowrap line-through tracking-wide leading-none pb-5 md:pb-0">filling the blanks</span>
        </div>
      </div>
    </section>
  )
}
