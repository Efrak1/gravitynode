import { LineAnimate } from '@/shared/ui/Line-animate'
import { TextAnimate } from '@/shared/ui/magicui/text-animate'
import { useTranslations } from 'next-intl';

export const Hero = () => {
  const t = useTranslations('widgets.content.hero');
  
  return (
    <section id='hero' className='flex flex-col justify-center items-center gap-10 mt-48'>
      <TextAnimate
        animation="blurIn"
        as="h1"
        className='text-center 2xl:text-[65px] xl:text-[52px] sm:text-[36px] text-3xl'
      >
        {t('heading')}
      </TextAnimate>
      <LineAnimate />
    </section>
  )
}