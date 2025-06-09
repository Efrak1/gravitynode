'use client';
import React, { useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import type { Swiper as SwiperType } from 'swiper';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = React.useRef<SwiperRef>(null);
  
  const slides = [
    { id: 1, color: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-center pt-10', text: '10+ продуктов', text1: 'Плюс огромный маркетплейс ПО на странице создания сервера.' },
    { id: 2, color: 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center pt-10', text: 'Всё летает', text1: 'Всё работает так быстро, будто вы установили панель на компьютер.' },
    { id: 3, color: 'bg-gradient-to-r from-amber-500 to-orange-500 text-center pt-10', text: 'Сортировка по проектам', text1: 'Распределяйте сервисы по проектам, командам или городам — как вам удобно.' },
    { id: 4, color: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-center pt-10', text: 'Раздел с вашими идеями', text1: 'Просите то, чего вам не хватает в наших продуктах. Мы рассматриваем все предложения.' },
  ];

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  // Решение проблемы с типами
  const coverflowSettings = {
    effect: 'coverflow' as const,
    coverflowEffect: {
      rotate: 20,
      stretch: -100,
      depth: 400,
      modifier: 1.5,
      slideShadows: false,
      scale: 0.85,
      opacity: 0.6, // Прозрачность боковых слайдов
    },
    breakpoints: {
      320: {
        coverflowEffect: {
          rotate: 10,
          stretch: -50,
          depth: 200,
          modifier: 1,
          scale: 0.7,
        }
      },
      768: {
        coverflowEffect: {
          rotate: 20,
          stretch: -100,
          depth: 400,
          modifier: 1.5,
          scale: 0.85,
        }
      }
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-4 overflow-hidden relative">
      <Swiper
        ref={swiperRef}
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        onSlideChange={handleSlideChange}
        coverflowEffect={coverflowSettings.coverflowEffect}
        modules={[EffectCoverflow]}
        className="w-full h-[400px] md:h-[500px]"
        breakpoints={{
          320: {
            spaceBetween: 30,
            coverflowEffect: coverflowSettings.breakpoints[320].coverflowEffect
          },
          768: {
            spaceBetween: 40,
            coverflowEffect: coverflowSettings.breakpoints[768].coverflowEffect
          }
        }}
        speed={800}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className={`
              ${slide.color} 
              rounded-2xl flex flex-col items-center justify-center text-white 
              shadow-2xl
              transform-gpu
              transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              w-[85%] max-w-[600px] mx-auto
            `}
            style={{
              transformOrigin: 'center',
            }}
          >
            <div className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 px-5 pt-5">
              {slide.text}
            </div>
            <div className="text-base md:text-xl opacity-80 text-center px-4 md:px-8 mt-10">
              {slide.text1} 
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Кастомная пагинация */}
      <div className="flex justify-center mt-10 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full cursor-none transition-all duration-300 ${
              activeIndex === index 
                ? 'bg-blue-500 scale-125 shadow-[0_0_8px_0_rgba(59,130,246,0.5)]' 
                : 'bg-gray-300 scale-100'
            }`}
            onClick={() => {
              if (swiperRef.current?.swiper) {
                swiperRef.current.swiper.slideToLoop(index);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;