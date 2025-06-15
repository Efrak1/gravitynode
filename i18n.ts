import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Указываем поддерживаемые локали
const locales = ['en', 'ru'] as const;
type Locale = typeof locales[number];

export default getRequestConfig(async ({ locale }) => {
  // Явно приводим locale к типу Locale
  const currentLocale = locale as Locale;
  
  // Проверяем, что запрошенная локаль поддерживается
  if (!locales.includes(currentLocale)) notFound();

  // Динамически загружаем JSON-файлы с переводами
  return {
    locale: currentLocale, // Используем гарантированно строковое значение
    locales: (await import(`./public/locales/${locale}.json`)).default,
  };
});

// import { notFound } from 'next/navigation';
// import { getRequestConfig } from 'next-intl/server';

// // Указываем поддерживаемые локали
// const locales = ['en', 'ru'];

// export default getRequestConfig(async ({ locale }) => {
//   if (!locales.includes(locale as any)) notFound();

//   return {
//     locales: (await import(`./public/locales/${locale}.json`)).default,
//   };
// });