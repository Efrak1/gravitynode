'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/shadcn/accordion"
import Link from "next/link"
import { AllSections } from './nav-const'
import { ModeToggle } from "@/shared/ui/ModeToggle"

export function NavMobile() {
  return (
    <div className="flex flex-col max-w-[31vh]">
      <Accordion type="multiple" className="w-[31vh]">
        {AllSections.map((group, groupIndex) => (
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
                <Link key={groupIndex} href={group.allButton.href} className="flex items-center gap-2 mt-2 text-blue-400 hover:underline font-semibold py-2">
                  {group.allButton.label} <span>{group.allButton.icon}</span>
                </Link>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        ))}
        <div className="flex flex-col items-start gap-3">
          <Link href={'/documentation'}>Документация</Link>
          <Link href={'/blog'}>Блоги</Link>
          <Link href={'/roadmap'}>Roadmap</Link>
          <Link href={'/contact'}>Контакты</Link>
          <span className="flex flex-row justify-between items-center gap-20">Тема:<ModeToggle /></span>
        </div>
        {/* TODO: починить адаптив телефонов и планшетов */}
      </Accordion>
    </div>
  )
}