import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import "aos/dist/aos.css"

export const metadata: Metadata = {
  title: "FitVerse - Build Your Dream Physique",
  description:
    "Join FitVerse gym to build your dream physique with our expert trainers and state-of-the-art facilities.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
