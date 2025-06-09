'use client'
import React from 'react'
import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"
import { RippleButton } from '@/shared/ui/magicui/ripple-button'

export const Nav = () => {
    return (
        <nav className='flex xl:flex-row flex-col gap-6'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <RippleButton rippleColor="#ADD8E6" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-4 2xl:px-8">Сервисы</RippleButton>
                    {/* <Button variant="outline" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-4 2xl:px-8">
                        Сервисы
                    </Button> */}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 2xl:w-[42rem] 2xl:text-xl 2xl:p-6" align="start">
                    <DropdownMenuLabel className="2xl:text-3xl 2xl:p-3">
                        Сервисы
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="2xl:my-3" />
                    <DropdownMenuRadioGroup className="2xl:space-y-3">
                        <DropdownMenuRadioItem value="center" className="2xl:text-2xl 2xl:py-4 2xl:px-3">
                            <Link href='/' className="block w-full">Top</Link>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="center" className="2xl:text-2xl 2xl:py-4 2xl:px-3">
                            <Link href='/' className="block w-full">Top</Link>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="center" className="2xl:text-2xl 2xl:py-4 2xl:px-3">
                            <Link href='/' className="block w-full">Top</Link>
                        </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <RippleButton rippleColor="#ADD8E6" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-4 2xl:px-8">Решения</RippleButton>
                    {/* <Button variant="outline" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-4 2xl:px-8">
                        Решения
                    </Button> */}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 2xl:w-[42rem] 2xl:text-xl 2xl:p-6" align="start">
                    <DropdownMenuLabel className="2xl:text-3xl 2xl:p-3">
                        Решения
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="2xl:my-3" />
                    <DropdownMenuRadioGroup className="2xl:space-y-3">
                        <DropdownMenuRadioItem value="center" className="2xl:text-2xl 2xl:py-4 2xl:px-3">
                            <Link href='/' className="block w-full">Top</Link>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="center" className="2xl:text-2xl 2xl:py-4 2xl:px-3">
                            <Link href='/' className="block w-full">Top</Link>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="center" className="2xl:text-2xl 2xl:py-4 2xl:px-3">
                            <Link href='/' className="block w-full">Top</Link>
                        </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <RippleButton rippleColor="#ADD8E6" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-4 2xl:px-8">Документация</RippleButton>
                    {/* <Button variant="outline" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-4 2xl:px-8">
                        Документация
                    </Button> */}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 2xl:w-[42rem] 2xl:text-xl 2xl:p-6" align="start">
                    <DropdownMenuLabel className="2xl:text-3xl 2xl:p-3">
                        Документация
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="2xl:my-3" />
                    <DropdownMenuRadioGroup className="2xl:space-y-3">
                        <DropdownMenuRadioItem value="center" className="2xl:text-2xl 2xl:py-4 2xl:px-3">
                            <Link href='/' className="block w-full">Top</Link>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="center" className="2xl:text-2xl 2xl:py-4 2xl:px-3">
                            <Link href='/' className="block w-full">Top</Link>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="center" className="2xl:text-2xl 2xl:py-4 2xl:px-3">
                            <Link href='/' className="block w-full">Top</Link>
                        </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <RippleButton rippleColor="#ADD8E6" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-4 2xl:px-8">Блоги</RippleButton>
                    {/* <Button variant="outline" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-4 2xl:px-8">
                        Блоги
                    </Button> */}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 2xl:w-[42rem] 2xl:text-xl 2xl:p-6" align="start">
                    <DropdownMenuLabel className="2xl:text-3xl 2xl:p-3">
                        Блоги
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="2xl:my-3" />
                    <DropdownMenuRadioGroup className="2xl:space-y-3">
                        <DropdownMenuRadioItem value="center" className="2xl:text-2xl 2xl:py-4 2xl:px-3">
                            <Link href='/' className="block w-full">Top</Link>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="center" className="2xl:text-2xl 2xl:py-4 2xl:px-3">
                            <Link href='/' className="block w-full">Top</Link>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="center" className="2xl:text-2xl 2xl:py-4 2xl:px-3">
                            <Link href='/' className="block w-full">Top</Link>
                        </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <RippleButton rippleColor="#ADD8E6" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-4 2xl:px-8">Roadmap</RippleButton>
                    {/* <Button variant="outline" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-4 2xl:px-8">
                        Roadmap
                    </Button> */}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 2xl:w-[42rem] 2xl:text-xl 2xl:p-6" align="start">
                    <DropdownMenuLabel className="2xl:text-3xl 2xl:p-3">
                        Roadmap
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="2xl:my-3" />
                    <DropdownMenuRadioGroup className="2xl:space-y-3">
                        <DropdownMenuRadioItem value="center" className="2xl:text-2xl 2xl:py-4 2xl:px-3">
                            <Link href='/' className="block w-full">Top</Link>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="center" className="2xl:text-2xl 2xl:py-4 2xl:px-3">
                            <Link href='/' className="block w-full">Top</Link>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="center" className="2xl:text-2xl 2xl:py-4 2xl:px-3">
                            <Link href='/' className="block w-full">Top</Link>
                        </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <RippleButton rippleColor="#ADD8E6" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-4 2xl:px-8">Контакты</RippleButton>
                    {/* <Button variant="outline" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-4 2xl:px-8">
                        Контакты
                    </Button> */}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 2xl:w-[42rem] 2xl:text-xl 2xl:p-6" align="start">
                    <DropdownMenuLabel className="2xl:text-3xl 2xl:p-3">
                        Контакты
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="2xl:my-3" />
                    <DropdownMenuRadioGroup className="2xl:space-y-3">
                        <DropdownMenuRadioItem value="center" className="2xl:text-2xl 2xl:py-4 2xl:px-3">
                            <Link href='/' className="block w-full">Top</Link>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="center" className="2xl:text-2xl 2xl:py-4 2xl:px-3">
                            <Link href='/' className="block w-full">Top</Link>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="center" className="2xl:text-2xl 2xl:py-4 2xl:px-3">
                            <Link href='/' className="block w-full">Top</Link>
                        </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    )
}