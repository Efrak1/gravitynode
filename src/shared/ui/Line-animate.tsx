'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export const LineAnimate = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
      <motion.span
        ref={ref}
        className="h-px bg-gray-300 w-full flex justify-center"
        initial={{
          width: 0,
          opacity: 0
        }}
        variants={{
          visible: {
            width: ["0%", "80%"],
            opacity: 1
          }
        }}
        animate={controls}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          times: [0, 1]
        }}
        custom={{
          baseWidth: 300,
          smWidth: 300,
          xlWidth: 500,
          xxlWidth: 900
        }}
        style={{
          width: 0,
        }}
      />
  )
}
