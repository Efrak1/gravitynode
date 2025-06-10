import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion"
import Link from "next/link"
import { RippleButton } from '@/shared/ui/magicui/ripple-button'

// Определение типов
interface NavItem {
  icon?: string;
  title: string;
  href: string;
  desc?: string;
}

interface AllLink {
  href: string;
  text: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
  allLink?: AllLink;
}

const navItems: NavSection[] = [
  {
    title: "Сервисы",
    items: [
      { icon: '🖥️', title: 'Выделенные серверы', href: '/dedicated' },
      { icon: '☁️', title: 'Облачные серверы', href: '/cloud' },
      { icon: '🗄️', title: 'Публичное облако VMware', href: '/vmware' },
      { icon: '🎮', title: 'Серверы с GPU', href: '/gpu' },
      { icon: '📦', title: 'VDS и VPS на Linux', href: '/vds-linux' },
      { icon: '🐧', title: 'VDS и VPS с Ubuntu', href: '/vds-ubuntu' },
    ],
    allLink: { href: "/solutions", text: "Все решения" }
  },
  {
    title: "Решения",
    items: [
      { icon: '🖥️', title: 'Серверы 152-ФЗ', href: '/' },
      { icon: '☁️', title: 'Облако 1С', href: '/' },
      { icon: '🗄️', title: 'Корпоративная почта', href: '/' },
      { icon: '🎮', title: 'DevOps as a Service', href: '/' },
      { icon: '📦', title: 'Выделенные серверы 1С', href: '/' },
      { icon: '🐧', title: 'Миграция в облако', href: '/' },
    ],
    allLink: { href: "/services", text: "Все сервисы" }
  },
  {
    title: "Документация",
    items: [
      { title: 'API документация', href: '/docs/api' },
      { title: 'Руководства', href: '/docs/guides' },
      { title: 'Частые вопросы', href: '/docs/faq' },
    ]
  },
  {
    title: "Блоги",
    items: [
      { title: 'Технические статьи', href: '/blog/tech' },
      { title: 'Кейсы', href: '/blog/cases' },
      { title: 'Новости', href: '/blog/news' },
    ]
  },
  {
    title: "Roadmap",
    items: [
      { title: 'Планы развития', href: '/roadmap' },
      { title: 'Обновления', href: '/roadmap/updates' },
      { title: 'Голосования', href: '/roadmap/votes' },
    ]
  },
  {
    title: "Контакты",
    items: [
      { title: 'Поддержка', href: '/support' },
      { title: 'Офисы', href: '/offices' },
      { title: 'Партнерство', href: '/partners' },
    ]
  }
]

export function NavMobile() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-[28vh] space-y-2 overflow-x-hidden"
    >
      {navItems.map((section, index) => (
        <AccordionItem 
          key={index} 
          value={`item-${index}`}
          className="border-b border-gray-200 dark:border-gray-800"
        >
          <AccordionTrigger className="py-3 text-left hover:no-underline w-full">
            <button className="w-full text-left justify-start px-0 font-medium truncate">
              {section.title}
            </button>
          </AccordionTrigger>
          
          <AccordionContent className="pb-3 pt-1 w-full">
            <div className="flex flex-col gap-2 w-full">
              {section.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={item.href}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors w-full max-w-full overflow-hidden"
                >
                  {item.icon && <span className="text-xl flex-shrink-0">{item.icon}</span>}
                  <span className="font-medium break-words truncate">{item.title}</span>
                </Link>
              ))}
              
              {section.allLink && (
                <Link
                  href={section.allLink.href}
                  className="flex items-center gap-1 text-blue-500 hover:underline font-medium p-2 mt-1 break-words"
                >
                  {section.allLink.text} <span>↗</span>
                </Link>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}