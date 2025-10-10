import { useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SimpleButton from "../components/common/SimpleButton"
import { sendMessage } from "../lib/sendMessage"

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const result = await sendMessage(formData.email, formData.message)

    if (result.success) {
      setSubmitStatus('success')
      setFormData({ email: '', message: '' })
    } else {
      setSubmitStatus('error')
      setErrorMessage(result.error)
    }
    setIsSubmitting(false)
  }

  useGSAP(() => {
    const tl = gsap.timeline({
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#contact-section",
        start: "top bottom",
        end: "center bottom",
        scrub: true,
      }
    })

    tl
      .from("#contact-img", {
        y: 500,
        alpha: 0,
        duration: 1
      })
      .from("#first-contact-title", {
        y: 500,
        alpha: 0,
        duration: 1
      }, "<")
      .from("#contact-form", {
        y: 500,
        alpha: 0,
        duration: 1
      }, "<")
  })


  return (
    <section id="contact-section" className="min-h-screen relative px-5 overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <h2 id="first-contact-title" className="font-family-oswald text-8xl md:text-[14rem] leading-none line-through">Contact us</h2>
      </div>
      <div className="hidden absolute inset-0 -bottom-10 md:flex items-center justify-center z-10">
        <img id="contact-img" src="../../images/reaching.jpg" className="scale-50" />
      </div>
      <div className="absolute inset-0 backdrop-blur-md z-20"></div>
      <div id="contact-form" className="relative z-30 min-h-screen grid place-content-center">
        <form onSubmit={handleSubmit} className="font-family-lato text-center bg-white/50 p-6 rounded-md flex flex-col gap-4 w-xs md:w-2xl justify-center px-8 md:px-15 py-10">
          <div className="flex justify-between items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
            <h3 className="text-end text-3xl md:text-7xl font-family-oswald">Get in touch</h3>
          </div>

          <div className="text-sm md:text-base font-family-lato flex flex-col gap-2 text-start">
            <label htmlFor="email">Email</label>
            <input
              className="py-3 focus:outline-none border-b-2"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="text-sm md:text-base font-family-lato flex flex-col gap-2 text-start">
            <label htmlFor="message">Message</label>
            <textarea
              className="py-3 min focus:outline-none border-b-2 resize-none min-h-25"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <SimpleButton
              text={isSubmitting ? "..." : "Send"}
              type="submit"
              disabled={isSubmitting}
            />
            {submitStatus === 'success' && (
              <div className="font-family-lato text-green-900/70 text-sm text-end flex items-end mt-3 md:mt-0">
                Message sent successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="font-family-lato text-red-700/70 text-sm text-end flex items-end mt-3 md:mt-0">
                {errorMessage}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
