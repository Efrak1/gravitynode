'use client'
import React, { useState } from 'react'
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
import { Service, Decisions } from './nav-const'

export const Nav = () => {
    const [activeServices, setActiveServices] = useState(0);
    const [activeSolutions, setActiveSolutions] = useState(0);

    return (
        <nav className='flex xl:flex-row flex-col gap-6'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <RippleButton rippleColor="#ADD8E6" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-4 2xl:px-8 font-semibold">Сервисы</RippleButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2 w-[900px] h-[600px] p-0 rounded-2xl overflow-hidden shadow-2xl border bg-[#23243a] text-white z-50 flex" align="start">
                    <div className="flex flex-col w-1/3 min-w-[200px] bg-[#23243a] border-r border-[#35365a] py-4">
                        {Service.map((cat, i) => (
                            <button
                                key={cat.label}
                                className={`text-left px-6 py-3 font-semibold rounded-xl mb-1 transition ${activeServices === i ? 'bg-[#292a4a] text-white' : 'text-gray-300 hover:bg-[#2d2e4a]'}`}
                                onMouseEnter={() => setActiveServices(i)}
                                onFocus={() => setActiveServices(i)}
                                type="button"
                            >
                                {cat.label}
                            </button>
                        ))}
                        <div className="mt-2 px-6">
                            <Link href="#" className="flex items-center gap-2 text-blue-400 hover:underline font-semibold py-2">
                                Все сервисы <span>↗</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-6 p-6 min-w-[420px] w-[420px]">
                        {Service[activeServices]?.items?.length === 0 ? (
                            <div className="col-span-2 text-gray-400">Нет данных</div>
                        ) : (
                            Service[activeServices]?.items?.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#28294a] transition"
                                >
                                    <span className="text-2xl">{item.icon}</span>
                                    <div>
                                        <div className="font-bold text-lg mb-1">{item.title}</div>
                                        <div className="text-gray-400 text-base">{item.desc}</div>
                                    </div>
                                </Link>
                            )) ?? <div className="col-span-2 text-gray-400">Ошибка загрузки</div>
                        )}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <RippleButton rippleColor="#5b5cf0" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-4 2xl:px-8 font-semibold">Решения</RippleButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2 w-[900px] h-[600px] p-0 rounded-2xl overflow-hidden shadow-2xl border bg-[#23243a] text-white z-50 flex" align="start">
                    <div className="flex flex-col w-1/3 min-w-[200px] bg-[#23243a] border-r border-[#35365a] py-4">
                        {Decisions.map((cat, i) => (
                            <button
                                key={cat.label}
                                className={`text-left px-6 py-3 font-semibold rounded-xl mb-1 transition ${activeSolutions === i ? 'bg-[#292a4a] text-white' : 'text-gray-300 hover:bg-[#2d2e4a]'}`}
                                onMouseEnter={() => setActiveSolutions(i)}
                                onFocus={() => setActiveSolutions(i)}
                                type="button"
                            >
                                {cat.label}
                            </button>
                        ))}
                        <div className="mt-2 px-6">
                            <Link href="#" className="flex items-center gap-2 text-blue-400 hover:underline font-semibold py-2">
                                Все сервисы <span>↗</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-6 p-6 min-w-[420px] w-[420px]">
                        {Decisions[activeSolutions]?.items?.length === 0 ? (
                            <div className="col-span-2 text-gray-400">Нет данных</div>
                        ) : (
                            Decisions[activeSolutions]?.items?.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#28294a] transition"
                                >
                                    <span className="text-2xl">{item.icon}</span>
                                    <div>
                                        <div className="font-bold text-lg mb-1">{item.title}</div>
                                        <div className="text-gray-400 text-base">{item.desc}</div>
                                    </div>
                                </Link>
                            )) ?? <div className="col-span-2 text-gray-400">Ошибка загрузки</div>
                        )}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <RippleButton rippleColor="#ADD8E6" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-4 2xl:px-8">Документация</RippleButton>
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