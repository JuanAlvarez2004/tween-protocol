import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useMediaQuery } from "react-responsive"

gsap.registerPlugin(SplitText)

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  useGSAP(() => {  
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } })
    const splitTitle = SplitText.create("#first-title", { type: "chars" })
    const firstPartTitle = splitTitle.chars.slice(0, -1)
    const lastCharTitle = splitTitle.chars[splitTitle.chars.length - 1]
    const lastCharFirstTitle = firstPartTitle[firstPartTitle.length - 1]
    const recLastCharFirstTitle = lastCharFirstTitle.getBoundingClientRect()

    gsap.set(lastCharTitle, { alpha: 1 })
    if (!isMobile) {
      gsap.set("#bottom-bar", { x: - document.getElementById('bottom-bar').getBoundingClientRect().left + lastCharTitle.getBoundingClientRect().left })
    } 

    tl
      .from(firstPartTitle, {
        y: -20,
        duration: 1,
        stagger: 0.05,
        ease: "elastic.out",
      })
      .from(lastCharTitle, {
        y: -10,
        x: recLastCharFirstTitle.right - lastCharTitle.getBoundingClientRect().right + 29,
        alpha: 0,
        rotation: -90,
        transformOrigin: "bottom left",
        duration: 0.7,
        ease: "power4.out",
      }, "-=0.5")
      .from('#second-title', {
        alpha: 0,
        y: -50,
        duration: .5,
      }, "-=0.5")
      .to('#second-title-bar', {
        width: "100%",
        duration: .5,
      })
      .to('#bottom-bar', {
        width: "200%",
        duration: 1,
      } , "<")
      .from('#body-text', {
        x: -50,
        alpha: 0,
        duration: 1,
      }, "<")
  }, [isMobile])

  return (
    <section id="home-section" className="h-dvh grid place-content-center">
      <div className="px-5 grid grid-cols-1 lg:grid-cols-2 grid-rows-3 lg:grid-rows-2 lg:gap-x-20 w-sm lg:w-7xl overflow-x-clip">
        <div className="font-family-oswald col-start-1 row-start-1 flex justify-center lg:justify-start items-end select-none">
          <span id="first-title" className="text-7xl lg:text-[11rem] whitespace-nowrap leading-none">tween_</span>
        </div>
        <div className="font-family-lato lg:col-start-2 lg:row-start-1 flex justify-center lg:justify-start items-start lg:items-end">
          <div className="relative">
            <div id="body-text" className="font-family-lato text-sm lg:text-xs pb-2 text-center lg:text-end">Digital studio specializing in creating exceptional web experiences. From front-end development to interactive animations, we transform ideas into digital reality with a minimalist and functional approach.</div>
            <div id="bottom-bar" className="hidden lg:block absolute bg-black h-4 top-100%"></div>
          </div>
        </div>
        <div className="relative mt-5 font-family-oswald lg:col-span-2 col-start-1 row-start-2 flex justify-center lg:justify-start items-start select-none text-center lg:text-left w-max m-auto">
          <span id="second-title" className="text-4xl lg:text-[11rem] leading-none pb-5 lg:pb-0">the motion protocol</span>
          <div id="second-title-bar" className="absolute bg-black h-1 lg:h-4 top-1/3 lg:top-1/2 left-0"></div>
        </div>
      </div>
    </section>
  )
}
