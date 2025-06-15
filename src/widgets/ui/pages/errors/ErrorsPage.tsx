import React from 'react'
import styles from './ErrorsPage.module.css'
import { useTranslations } from 'next-intl';

export interface ErrorsPageProps {
    type: string,
    children: React.ReactNode,
}
export default function ErrorsPage({ type, children }: ErrorsPageProps) {
    const t = useTranslations(`widgets.page.errors.${type}`);

    return (
        <section className={`section_base ${type == 'not_found' ? styles.section_notFount : type == 'maintenance' ? styles.section_maintenance : styles.section_hero} h-[1080px] w-full mb-24 flex flex-col items-start sm:items-center`}>
            <div className="flex backdrop-blur-xl justify-center mt-[194px] items-center gap-2.5 p-2 w-max rounded-md border border-[#e5e6e8]/[.04] bg-[#c5dcf8]/[.08] text-[#e5e6e8]  text-sm font-medium leading-[100%]">
                {t('tag')}
            </div>
            <h1 dangerouslySetInnerHTML={{ __html: t.raw('title') }} className="text-[#E5E6E8] text-lefy sm:text-center mt-8 mb-3 text-[1.75rem] sm:text-[2rem] xl:text-[2.25rem] w-full leading-[100%]" />
            <p dangerouslySetInnerHTML={{ __html: t.raw('description') }} className="text-[#E5E6E8]/[.7] mt-4 mb-16 text-lefy sm:text-center w-full leading-[150%]" />
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-2.5 w-full'>
                {children}
            </div>
        </section >
    )
}
