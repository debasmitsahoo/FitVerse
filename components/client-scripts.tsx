"use client"

import { useEffect } from "react"
import Script from "next/script"
import Typed from "typed.js"

export default function ClientScripts() {
  useEffect(() => {
    // Initialize AOS only after component has mounted and AOS is loaded
    const initAOS = () => {
      if (typeof window !== "undefined" && window.AOS) {
        window.AOS.init({
          offset: 300,
          duration: 1400,
        })
      }
    }

    // Initialize menu functionality
    const initMenu = () => {
      const menu = document.querySelector("#menu-icon")
      const navbar = document.querySelector(".navbar")

      if (menu) {
        menu.addEventListener("click", () => {
          menu.classList.toggle("bx-x")
          navbar?.classList.toggle("active")
        })
      }

      window.addEventListener("scroll", () => {
        if (menu) {
          menu.classList.remove("bx-x")
          navbar?.classList.remove("active")
        }
      })
    }

    // Initialize Typed.js using local import
    const typed = new Typed(".multiple-text", {
      strings: [
        "Physical Fitness",
        "Weight Gain",
        "Fat Loss",
        "Strength Training",
        "Weight Lifting",
        "Running",
      ],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    })

    // Initialize AOS if available
    if (typeof window !== "undefined" && window.AOS) {
      initAOS()
    }
    initMenu()

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <Script
        src="https://unpkg.com/aos@next/dist/aos.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && window.AOS) {
            window.AOS.init({
              offset: 300,
              duration: 1400,
            })
          }
        }}
      />
    </>
  )
}
