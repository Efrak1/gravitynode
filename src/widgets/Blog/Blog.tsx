import React from 'react'
import { InteractiveGridPattern } from "@/shared/ui/magicui/interactive-grid-pattern";
import { cn } from "@/shared/lib/utils";

export const Blog = () => {
    return (
        <section className='flex justify-center items-center mt-10'>
            <div className="absolute inset-0 overflow-hidden">
                <InteractiveGridPattern
                    className={cn(
                        "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 ",
                    )}
                />
            </div>
            <ul className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pointer-events-none z-10'>
                <li className='flex flex-col justify-center items-center gap-3 p-5 w-[330px] h-[130px] 2xl:w-[500px] 2xl:h-[250px] border-[1px] rounded-xl'>
                    <h2 className='text-2xl 2xl:text-[50px] font-semibold'>Серверы</h2>
                    <p className='text-xl 2xl:text-3xl'>VPS, выделенные, self-host</p>
                </li>
                <li className='flex flex-col justify-center items-center gap-3 p-5 w-[330px] h-[130px] 2xl:w-[500px] 2xl:h-[250px] border-[1px] rounded-xl'>
                    <h2 className='text-2xl 2xl:text-[50px] font-semibold leading-none'>Автоматизация бизнеса</h2>
                    <p className='text-xl 2xl:text-3xl'>CRM, ERP, Telegram-боты, AI</p>
                </li>
                <li className='flex flex-col justify-center items-center gap-3 p-5 w-[330px] h-[130px] 2xl:w-[500px] 2xl:h-[250px] border-[1px] rounded-xl'>
                    <h2 className='text-2xl 2xl:text-[50px] font-semibold'>Игровые решения</h2>
                    <p className='text-xl 2xl:text-3xl'>Minecraft, KMS, лицензии</p>
                </li>
                <li className='flex flex-col justify-center items-center gap-3 p-5 w-[330px] h-[130px] 2xl:w-[500px] 2xl:h-[250px] border-[1px] rounded-xl'>
                    <h2 className='text-2xl 2xl:text-[50px] font-semibold'>Хранение данных</h2>
                    <p className='text-xl 2xl:text-3xl'>storage, drive</p>
                </li>
                <li className='flex flex-col justify-center items-center gap-3 p-5 w-[330px] h-[130px] 2xl:w-[500px] 2xl:h-[250px] border-[1px] rounded-xl'>
                    <h2 className='text-2xl 2xl:text-[50px] font-semibold'>СУБД</h2>
                    <p className='text-xl 2xl:text-3xl'>Postgre, MySQL, Mondo DB</p>
                </li>
                <li className='flex flex-col justify-center items-center gap-3 p-5 w-[330px] h-[130px] 2xl:w-[500px] 2xl:h-[250px] border-[1px] rounded-xl'>
                    <h2 className='text-2xl 2xl:text-[50px] font-semibold'>Чат фордж</h2>
                    <p className='text-xl 2xl:text-3xl'>storage, drive</p>
                </li>
            </ul>
        </section>
    )
}
