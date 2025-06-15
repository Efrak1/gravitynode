import React from 'react'
import Link from 'next/link'
import { Service, Decisions } from '../../Header/ui/Navigation/nav-const'
import { ScrollLink } from '@/features/ScrollLink';
import { useTranslations } from 'next-intl';
import LocaleToggle from '@/shared/ui/Locale/LocaleToggle';

export const Footer = () => {
  const t = useTranslations('footer');
  const allServiceItems = Service.flatMap(section => section.items);

  const allDecisionItems = Decisions.flatMap(section => section.items);

  return (
    <footer className='my-10 p-5 flex flex-col justify-center items-center'>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 xl:grid-cols-4 text-lg xl:gap-32'>
        <div className='flex flex-col justify-start items-start gap-2'>
          <h3 className='font-bold'>Навигация</h3>
          <Link href={'/'}>Главная</Link>
          <ScrollLink href={'/#hero'}>О нас</ScrollLink>
          <ScrollLink href={'/#blog'}>Наши решения</ScrollLink>
          <ScrollLink href={'/#panel'}>Управление</ScrollLink>
        </div>
        <div className='flex flex-col justify-start items-start gap-2'>
          <h3 className='font-bold'>Сервисы</h3>
          {allServiceItems.slice(0, 5).map((item, index) => (
            <Link key={index} href={item.href}>
              {item.title}
            </Link>
          ))}
          <Link href="#" className="flex items-center gap-2 text-blue-400 font-semibold py-2">
            Все сервисы <span>↗</span>
          </Link>
        </div>
        <div className='flex flex-col justify-start items-start gap-2'>
          <h3 className='font-bold'>Решения</h3>
          {allDecisionItems.slice(0, 5).map((item, index) => (
            <Link key={index} href={item.href}>
              {item.title}
            </Link>
          ))}
          <Link href="#" className="flex items-center gap-2 text-blue-400 font-semibold py-2">
            Все сервисы <span>↗</span>
          </Link>
        </div>
        <div className='flex flex-col justify-start items-start gap-2'>
          <h3 className='font-bold'>Контакты</h3>
          <Link href={'/'}>Telegram</Link>
          <Link href={'/'}>Vk</Link>
          <Link href={'/'}>Instagramm</Link>
          <Link href={'/'}>Tenchat</Link>
          <Link href={'/'}>YouTube</Link>
        </div>
      </div>
      <span className='flex flex-row justify-between items-center p-5'>
        <p className='opacity-60 text-[#E5E6E8]'>{t('copyright')}</p>
        <LocaleToggle />
      </span>
    </footer>
  )
}