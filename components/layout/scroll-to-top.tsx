"use client"

import * as React from "react"
import { ArrowUpIcon } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

export function ScrollToTop() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed right-6 bottom-6 z-50 flex size-10 items-center justify-center border border-border/50 bg-background/90 text-foreground/40 backdrop-blur-md transition-colors hover:border-foreground/20 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/30"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="size-4" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
