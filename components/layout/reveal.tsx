"use client"

import { motion } from "motion/react"
import * as React from "react"

const EASE = [0.22, 1, 0.36, 1] as const

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  index = 0,
}: RevealProps & { index?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        ease: EASE,
        delay: Math.min(index * 0.06, 0.4),
      }}
    >
      {children}
    </motion.div>
  )
}
