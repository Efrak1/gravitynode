'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/shared/ui/shadcn/dropdown-menu"
import { RippleButton } from '@/shared/ui/magicui/ripple-button'
import { Service, Decisions } from './nav-const'
import { useTranslations } from 'next-intl'

// Определение типов
interface NavItem {
  icon: string;
  title: string;
  desc: string;
  href: string;
}

interface NavCategory {
  label: string;
  items: NavItem[];
}

interface TranslatedNavCategory extends Omit<NavCategory, 'items'> {
  items: (Omit<NavItem, 'title' | 'desc'> & {
    title: string;
    desc: string;
  })[];
}

export const Nav = () => {
    const t = useTranslations('widgets.ui.layout.const');
    const th = useTranslations('widgets.ui.layout.header');
    const [activeServices, setActiveServices] = useState(0);
    const [activeSolutions, setActiveSolutions] = useState(0);

    const translateNavItems = (items: NavCategory[]): TranslatedNavCategory[] => {
        return items.map(item => ({
            ...item,
            label: t(item.label),
            items: item.items.map(subItem => ({
                ...subItem,
                title: t(subItem.title),
                desc: t(subItem.desc)
            }))
        }));
    };

    const translatedService = translateNavItems(Service);
    const translatedDecisions = translateNavItems(Decisions);

    return (
        <nav className='flex xl:flex-row flex-col gap-6'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <RippleButton rippleColor="#ADD8E6" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-3 2xl:px-6 font-semibold">
                        {t('Сервисы')}
                    </RippleButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2 w-[900px] h-[600px] p-0 rounded-2xl overflow-hidden shadow-2xl border bg-[#23243a] text-white z-50 flex" align="start">
                    <div className="flex flex-col w-1/3 min-w-[200px] bg-[#23243a] border-r border-[#35365a] py-4">
                        {translatedService.map((cat, i) => (
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
                            <Link href="#" className="flex items-center gap-2 text-blue-400 font-semibold py-2">
                                {t('Все сервисы')} <span>↗</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-6 p-6 min-w-[420px] w-[420px]">
                        {translatedService[activeServices]?.items?.length === 0 ? (
                            <div className="col-span-2 text-gray-400">{t('Нет данных')}</div>
                        ) : (
                            translatedService[activeServices]?.items?.map((item) => (
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
                            )) ?? <div className="col-span-2 text-gray-400">{t('Ошибка загрузки')}</div>
                        )}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Dropdown для Решений */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <RippleButton rippleColor="#5b5cf0" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-3 2xl:px-5 font-semibold">
                        {t('Решения')}
                    </RippleButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2 w-[900px] h-[600px] p-0 rounded-2xl overflow-hidden shadow-2xl border bg-[#23243a] text-white z-50 flex" align="start">
                    <div className="flex flex-col w-1/3 min-w-[200px] bg-[#23243a] border-r border-[#35365a] py-4">
                        {translatedDecisions.map((cat, i) => (
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
                            <Link href="#" className="flex items-center gap-2 text-blue-400 font-semibold py-2">
                                {t('Все решения')} <span>↗</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-6 p-6 min-w-[420px] w-[420px]">
                        {translatedDecisions[activeSolutions]?.items?.length === 0 ? (
                            <div className="col-span-2 text-gray-400">{t('Нет данных')}</div>
                        ) : (
                            translatedDecisions[activeSolutions]?.items?.map((item) => (
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
                            )) ?? <div className="col-span-2 text-gray-400">{t('Ошибка загрузки')}</div>
                        )}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Остальные кнопки */}
            <Link href={'/documentation'}>
                <RippleButton rippleColor="#5b5cf0" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-3 2xl:px-6">
                    {th('Документация')}
                </RippleButton>
            </Link>
            <Link href={'/blogs'}>
                <RippleButton rippleColor="#5b5cf0" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-3 2xl:px-6">
                    {th('Блоги')}
                </RippleButton>
            </Link>
            <Link href={'/roadmap'}>
                <RippleButton rippleColor="#5b5cf0" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-3 2xl:px-6">
                    {th('Roadmap')}
                </RippleButton>
            </Link>
            <Link href={'/contact'}>
                <RippleButton rippleColor="#5b5cf0" className="text-base py-2 px-4 h-auto 2xl:text-xl 2xl:py-3 2xl:px-6">
                    {th('Контакты')}
                </RippleButton>
            </Link>
        </nav>
    )
}