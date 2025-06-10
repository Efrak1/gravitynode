import { TextAnimate } from '@/shared/ui/magicui/text-animate'
import React from 'react'

export const Hero = () => {
    return (
        <section className='flex flex-col justify-center items-center gap-10 mt-48'>
            <TextAnimate animation="blurIn" as="h1" className='text-center 2xl:text-[65px] xl:text-[52px] sm:text-[36px] text-3xl'>
                Строим инфраструктуру, которая работает на вас.
            </TextAnimate>
            <p></p>
            <span className="w-[300px] xl:w-[500px] 2xl:w-[900px] h-px bg-gray-300"></span>
        </section>
    )
}
