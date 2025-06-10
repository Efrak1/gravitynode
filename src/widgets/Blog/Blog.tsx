import React from 'react'
import { InteractiveGridPattern } from "@/shared/ui/magicui/interactive-grid-pattern";
import { cn } from "@/shared/lib/utils";
import { TextAnimate } from '@/shared/ui/magicui/text-animate';
import { Block } from './Blog.types';


const block: Block[] = [{
    title: 'Серверы',
    text: 'VPS, выделенные, self-host'
}, {
    title: 'Автоматизация бизнеса',
    text: 'CRM, ERP, Telegram-боты, AI'
}, {
    title: 'Игровые решения',
    text: ' Minecraft, KMS, лицензии'
}, {
    title: 'Хранение данных',
    text: 'storage, drive'
}, {
    title: 'СУБД',
    text: 'Postgre, MySQL, Mondo DB'
}, {
    title: 'Чат фордж',
    text: 'storage, drive'
}]

export const Blog = () => {
    return (
        <section className='flex justify-center items-center my-20'>
            <div className="absolute inset-0 overflow-hidden">
                <InteractiveGridPattern
                    className={cn(
                        "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 ",
                    )}
                />
            </div>
            <ul className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pointer-events-none z-10'>
                {block.map((p) => (
                    <li key={`${p.title}-${p.text}`} className='flex flex-col justify-center items-center gap-3 p-5 w-[330px] h-[130px] 2xl:w-[500px] 2xl:h-[250px] border-[1px] rounded-xl bg-[#252a42] opacity-70'>
                        <TextAnimate animation="blurIn" as="h1" className='text-2xl 2xl:text-[50px] font-semibold text-blue-100'>{p.title}</TextAnimate>
                        <TextAnimate animation="blurInUp" by="character" once className='text-xl 2xl:text-3xl text-blue-200'>{p.text}</TextAnimate>
                    </li>
                ))}
            </ul>
        </section>
    )
}
