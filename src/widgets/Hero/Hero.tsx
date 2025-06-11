'use client'
import { TextAnimate } from '@/shared/ui/magicui/text-animate'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className='flex flex-col justify-center items-center gap-10 mt-48'>
      <TextAnimate 
        animation="blurIn" 
        as="h1" 
        className='text-center 2xl:text-[65px] xl:text-[52px] sm:text-[36px] text-3xl'
      >
        Строим инфраструктуру, которая работает на вас.
      </TextAnimate>
      
      <div ref={ref} className="w-full flex justify-center">
        <motion.span
          className="h-px bg-gray-300"
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
            width: 0, // Начальное значение
          }}
        />
      </div>
    </section>
  )
}