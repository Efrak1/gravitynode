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

const categories = [
    {
        label: 'Инфраструктура',
        items: [
            { icon: '🖥️', title: 'Выделенные серверы', desc: 'Физические серверы: готовые и под запрос', href: '/dedicated' },
            { icon: '☁️', title: 'Облачные серверы', desc: 'Виртуальные машины с почасовым биллингом', href: '/cloud' },
            { icon: '🗄️', title: 'Публичное облако VMware', desc: 'Виртуальный ЦОД с управлением через vCloud Director', href: '/vmware' },
            { icon: '🎮', title: 'Серверы с GPU', desc: 'Сервера с графическими ускорителями', href: '/gpu' },
            { icon: '📦', title: 'VDS и VPS на Linux', desc: 'Виртуальные серверы с готовыми дистрибутивами', href: '/vds-linux' },
            { icon: '🐧', title: 'VDS и VPS с Ubuntu', desc: 'Виртуальные серверы с Ubuntu', href: '/vds-ubuntu' },
        ],
    },
    {
        label: 'Сети',
        items: [
            { icon: '🔒', title: 'VPN', desc: 'Безопасное соединение для бизнеса', href: '/vpn' },
            { icon: '⚖️', title: 'Балансировщики', desc: 'Распределение нагрузки', href: '/balancer' },
        ],
    },
    {
        label: 'Хранение и бэкапы',
        items: [
            { icon: '💾', title: 'Облачное хранилище', desc: 'Надёжное хранение данных', href: '/storage' },
            { icon: '🛡️', title: 'Бэкапы', desc: 'Автоматическое резервное копирование', href: '/backup' },
        ],
    },
    { label: 'Базы данных', items: [] },
    { label: 'Контейнеры', items: [] },
]

const categories1 = [
    {
        label: 'По типу задач',
        items: [
            { icon: '🖥️', title: 'Серверы 152-ФЗ', desc: 'Соответствие требованиям закона', href: '/' },
            { icon: '☁️', title: 'Облако 1С', desc: 'Облачные серверы для приложений 1С', href: '/' },
            { icon: '🗄️', title: 'Корпоративная почта', desc: 'Почта для бизнеса на вашем домене', href: '/' },
            { icon: '🎮', title: 'DevOps as a Service', desc: 'Полноценное делегирование DevOps-процессов нам', href: '/' },
            { icon: '📦', title: 'Выделенные серверы 1С', desc: 'Частичный или полный перенос сервисов в облако', href: '/' },
            { icon: '🐧', title: 'Миграция в облако', desc: 'Надежная инфраструктура для компаний любого масштаба', href: '/' },
        ],
    },
    {
        label: 'По отраслям',
        items: [
            { icon: '🔒', title: 'Ритейл', desc: 'Инфраструктура для офлайн-магазинов любого масштаба', href: '/' },
            { icon: '⚖️', title: 'Финансы и страхование', desc: 'Инфраструктура для банковских, финансовых и страховых компаний', href: '/' },
        ],
    },
    {
        label: 'Хранение и бэкапы',
        items: [
            { icon: '💾', title: 'Облачное хранилище', desc: 'Надёжное хранение данных', href: '/' },
            { icon: '🛡️', title: 'Бэкапы', desc: 'Автоматическое резервное копирование', href: '/' },
            { icon: '💾', title: 'Интеграторы ', desc: 'Инфраструктура для системных интеграторов и поставщиков ИТ-услуг', href: '/' },
            { icon: '💾', title: 'E-Commerce', desc: 'Инфраструктура для маркетплейсов и интернет-магазинов', href: '/' },
        ],
    },
    { label: 'Администрирование', items: [
        { icon: '🛡️', title: 'Базовое администрирование', desc: 'Базовые задачи администрирования и круглосуточный мониторинг', href: '/' },
        { icon: '🛡️', title: 'Лицензии Microsoft', desc: 'Серверные лицензии ПО', href: '/' },
    ] },
]

export const Nav = () => {
    const [active, setActive] = useState(0)
    return (
        <nav className='flex xl:flex-row flex-col gap-6'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <RippleButton rippleColor="#ADD8E6" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-4 2xl:px-8 font-semibold">Сервисы</RippleButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2 w-[900px] h-[600px] p-0 rounded-2xl overflow-hidden shadow-2xl border bg-[#23243a] text-white z-50 flex" align="start">
                    <div className="flex flex-col w-1/3 min-w-[200px] bg-[#23243a] border-r border-[#35365a] py-4">
                        {categories.map((cat, i) => (
                            <button
                                key={cat.label}
                                className={`text-left px-6 py-3 font-semibold rounded-xl mb-1 transition ${active === i ? 'bg-[#292a4a] text-white' : 'text-gray-300 hover:bg-[#2d2e4a]'}`}
                                onMouseEnter={() => setActive(i)}
                                onFocus={() => setActive(i)}
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
                        {categories[active].items.length === 0 ? (
                            <div className="col-span-2 text-gray-400">Нет данных</div>
                        ) : (
                            categories[active].items.map((item) => (
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
                            ))
                        )}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <RippleButton rippleColor="#5b5cf0" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-4 2xl:px-8 font-semibold">Решения</RippleButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2 w-[900px] h-[600px] p-0 rounded-2xl overflow-hidden shadow-2xl border bg-[#23243a] text-white z-50 flex" align="start">
                    {/* Левая колонка — категории */}
                    <div className="flex flex-col w-1/3 min-w-[200px] bg-[#23243a] border-r border-[#35365a] py-4">
                        {categories1.map((cat, i) => (
                            <button
                                key={cat.label}
                                className={`text-left px-6 py-3 font-semibold rounded-xl mb-1 transition ${active === i ? 'bg-[#292a4a] text-white' : 'text-gray-300 hover:bg-[#2d2e4a]'}`}
                                onMouseEnter={() => setActive(i)}
                                onFocus={() => setActive(i)}
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
                    {/* Правая колонка — содержимое категории */}
                    <div className="flex-1 grid grid-cols-2 gap-6 p-6 min-w-[420px] w-[420px]">
                        {categories1[active].items.length === 0 ? (
                            <div className="col-span-2 text-gray-400">Нет данных</div>
                        ) : (
                            categories1[active].items.map((item) => (
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
                            ))
                        )}
                    </div>
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