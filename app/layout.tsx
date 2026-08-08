import type { Metadata, Viewport } from "next"
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
}

export const metadata: Metadata = {
  title: {
    default: "adhaghani",
    template: "%s · adhaghani",
  },
  description:
    "Personal portfolio — writing, projects, and the thinking behind them.",
  openGraph: {
    title: "adhaghani",
    description:
      "Personal portfolio — writing, projects, and the thinking behind them.",
    siteName: "adhaghani",
    type: "website",
    locale: "en_US",
  },
  metadataBase: new URL("https://adhaghani.com"),
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy":
      "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    "X-DNS-Prefetch-Control": "on",
  },
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-foreground focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-background focus:no-underline"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <SmoothScroll>
            <Navigation />
            <main id="main-content" className="min-h-svh">{children}</main>
            <Footer4 />
            <ScrollToTop />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
