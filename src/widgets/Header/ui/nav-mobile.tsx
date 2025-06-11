'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion"
import Link from "next/link"
import { Service, Decisions } from './nav-const'

export function NavMobile() {
  const allSections = [
    { title: 'Сервисы', sections: Service },
    { title: 'Решения', sections: Decisions },
    { 
      title: 'Документация', 
      sections: [
        { 
          label: 'Техническая документация', 
          items: [
            { icon: '📄', title: 'Руководства', href: '/' },
            { icon: '📚', title: 'API', href: '/' },
          ] 
        }
      ] 
    },
    { 
      title: 'Блоги', 
      sections: [
        { 
          label: 'Статьи', 
          items: [
            { icon: '✍️', title: 'Технический блог', href: '/' },
            { icon: '📰', title: 'Новости', href: '/' },
          ] 
        }
      ] 
    },
    { 
      title: 'Roadmap', 
      sections: [
        { 
          label: 'Планы развития', 
          items: [
            { icon: '🗺️', title: 'График релизов', href: '/' },
          ] 
        }
      ] 
    },
    { 
      title: 'Контакты', 
      sections: [
        { 
          label: 'Связь с нами', 
          items: [
            { icon: '📞', title: 'Телефоны', href: '/' },
            { icon: '🏢', title: 'Офисы', href: '/' },
          ] 
        }
      ] 
    }
  ]

  return (
    <Accordion type="multiple" className="w-full">
      {allSections.map((group, groupIndex) => (
        <AccordionItem 
          key={groupIndex} 
          value={`group-${groupIndex}`}
          className="border-b border-gray-200 dark:border-gray-800"
        >
          <AccordionTrigger className="py-3 hover:no-underline">
            <span className="font-medium">{group.title}</span>
          </AccordionTrigger>
          
          <AccordionContent className="pb-2">
            <Accordion type="multiple" className="w-full">
              {group.sections.map((section, sectionIndex) => (
                <AccordionItem 
                  key={sectionIndex} 
                  value={`section-${groupIndex}-${sectionIndex}`}
                  className="border-b border-gray-100 dark:border-gray-700"
                >
                  <AccordionTrigger className="py-2 pl-4 hover:no-underline">
                    <span className="font-medium">{section.label}</span>
                  </AccordionTrigger>
                  
                  <AccordionContent className="pb-2 pl-6">
                    <div className="flex flex-col gap-1">
                      {section.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.href}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          {item.icon && <span className="text-xl">{item.icon}</span>}
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}