import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/layout/navigation"
import { SmoothScroll } from "@/components/layout/smooth-scroll"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import Footer4 from "@/components/bits-pro/footer"
import { cn } from "@/lib/utils"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "adhaghani",
    template: "%s · adhaghani",
  },
  description:
    "Personal portfolio — writing, projects, and the thinking behind them.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        geist.variable,
        geistMono.variable,
        "font-sans"
      )}
    >
      <body>
        <ThemeProvider>
          <SmoothScroll>
            <Navigation />
            <main className="min-h-svh">{children}</main>
            <Footer4 />
            <ScrollToTop />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
