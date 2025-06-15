"use client"
import { ShimmerButton } from '@/shared/ui/magicui/shimmer-button'
import { ModeToggle } from '@/shared/ui/ModeToggle'
import Link from 'next/link'
import React from 'react'

export const Auth = () => {
    return (
        <div className='flex flex-row items-center justify-center gap-5'>
            <Link href='/signIn'>
                <ShimmerButton className="shadow-2xl w-full">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        Авторизация
                    </span>
                </ShimmerButton>
            </Link>
            <div className='hidden xl:flex'><ModeToggle /></div>
        </div>
    )
}