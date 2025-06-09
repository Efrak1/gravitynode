"use client"
import { Button } from '@/shared/ui/button'
import { RippleButton } from '@/shared/ui/magicui/ripple-button'
import { ShimmerButton } from '@/shared/ui/magicui/shimmer-button'
import { ModeToggle } from '@/shared/ui/ModeToggle'
import Link from 'next/link'
import React from 'react'

export const Auth = () => {
    return (
        <div className='flex flex-col xl:flex-row items-center justify-center gap-5'>
            <div className='flex flex-row justify-center items-center gap-5 w-full'>
                {/* <Button variant='outline' className='w-full xl:w-auto 2xl:text-xl 2xl:py-[30px] 2xl:px-8'></Button> */}
                <Link href='/Auth'>
                    <ShimmerButton className="shadow-2xl">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            Авторизация
                        </span>
                    </ShimmerButton>
                </Link>
                <ModeToggle />
            </div>
            <Link href='/'><RippleButton rippleColor="#ADD8E6" className='w-full xl:w-auto 2xl:text-xl 2xl:py-[30px] 2xl:px-8'>Связаться</RippleButton></Link>
            {/* <Button variant='outline' className='w-full xl:w-auto 2xl:text-xl 2xl:py-[30px] 2xl:px-8'><Link href='/'>Связаться</Link></Button> */}
        </div>
    )
}