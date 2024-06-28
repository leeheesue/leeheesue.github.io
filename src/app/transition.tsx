'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Transition({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [route, setRoute] = useState('')

  useEffect(() => {
    setRoute(pathname)
  }, [pathname])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={route}
        style={{ width: '100%', height: '100%' }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
