'use client'
import { Button } from '@/shared/ui/shadcn/button'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import ErrorsPage from '@/widgets/ui/pages/errors/ErrorsPage'
import Template from '@/widgets/ui/layouts/Template/Template'

export default function NotFoundPage() {
    const router = useRouter()
    const t = useTranslations('widgets.page.errors.not_found');
    return (
        <Template className="max-w-[95vw] lg:max-w-full w-full flex flex-col items-center">
            <ErrorsPage
                type='not_found'
            >
                <Button size={'sm'} onClick={() => router.push('/')}>
                    {t('button1')}
                </Button>
                <Button size={'sm'} variant={'secondary'} className='backdrop-blur-xl' onClick={() => router.back()}>
                    {t('button2')}
                </Button>
            </ErrorsPage >
        </Template>
    )
}
