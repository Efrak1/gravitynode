import React from 'react'
import { InteractiveGridPattern } from "@/shared/ui/magicui/interactive-grid-pattern";
import { cn } from "@/shared/lib/utils";
import { TextAnimate } from '@/shared/ui/magicui/text-animate';
import { useTranslations } from 'next-intl';
import { blockKeys } from './Blog-const';

export const Blog = () => {
  const t = useTranslations('widgets.content.blog');
  
  return (
    <section id='blog' className='flex justify-center items-center my-20'>
      <div className="absolute inset-0 overflow-hidden">
        <InteractiveGridPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 ",
          )}
        />
      </div>
      <ul className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 pointer-events-none z-10'>
        {blockKeys.map((p, index) => (
          <li 
            key={index} 
            className='flex flex-col justify-center items-center gap-3 p-5 max-w-[330px] h-[130px] 2xl:min-w-[500px] 2xl:h-[250px] border-[1px] rounded-xl bg-[#252a42] opacity-70'
          >
            <TextAnimate 
              animation="blurIn" 
              as="h1" 
              className='text-2xl 2xl:text-[50px] font-semibold leading-10 text-blue-100'
            >
              {t(p.titleKey)}
            </TextAnimate>
            <TextAnimate 
              animation="blurInUp" 
              by="character" 
              once 
              className='text-xl 2xl:text-3xl text-blue-200'
            >
              {t(p.textKey)}
            </TextAnimate>
          </li>
        ))}
      </ul>
    </section>
  )
}