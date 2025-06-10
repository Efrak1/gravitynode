import { cn } from "@/shared/lib/utils";
import { Marquee } from "@/shared/ui/magicui/marquee";
import Image from "next/image";
 
export const reviews: Reviews[] = [
  {
    name: "10+ продуктов",
    username: '---8',
    body: "Плюс огромный маркетплейс ПО на странице создания сервера.",
    // img: 'https://yandex.ru/images/search?pos=0&from=tabbar&img_url=https%3A%2F%2Fcdn4.telegram-cdn.org%2Ffile%2FSqsnkCTDqqjIUdw8PNuYBScu7Pe_3jjEdHyMHYvuPSYRxp8Eo-t1sYelO9yz1ohc81IK-Vb0ToSJVzGYuFTbYfrjqOxwbS3pxZDEGbGCPruResXxqQzW34shP7-5eCplCd6CiNIN4GdXBrcjEO7UAr0BdfLONvuNv563WNkUmBEleH00EFr-LXrz31ECb4JIZxWmg31On0VItJF70gIoSn4JMCzOhoLfl6ciW4m7gxGdAi99Pr-sKs5hVWWfat1MVJUlMZIbeZ3kITug77ZnAhUl9-djSCn7f9UZqasW7EA3Z203b7MSB3lhd16VrteuE1R2Ezvonp5l-y1gdXENnA.jpg&text=ReviewCard+shadcn&rpt=simage&lr=117119'

  },
  {
    name: "Всё летает",
    username: '--5-',
    body: "Всё работает так быстро, будто вы установили панель на компьютер.",
    // img: 'https://yandex.ru/images/search?pos=0&from=tabbar&img_url=https%3A%2F%2Fcdn4.telegram-cdn.org%2Ffile%2FSqsnkCTDqqjIUdw8PNuYBScu7Pe_3jjEdHyMHYvuPSYRxp8Eo-t1sYelO9yz1ohc81IK-Vb0ToSJVzGYuFTbYfrjqOxwbS3pxZDEGbGCPruResXxqQzW34shP7-5eCplCd6CiNIN4GdXBrcjEO7UAr0BdfLONvuNv563WNkUmBEleH00EFr-LXrz31ECb4JIZxWmg31On0VItJF70gIoSn4JMCzOhoLfl6ciW4m7gxGdAi99Pr-sKs5hVWWfat1MVJUlMZIbeZ3kITug77ZnAhUl9-djSCn7f9UZqasW7EA3Z203b7MSB3lhd16VrteuE1R2Ezvonp5l-y1gdXENnA.jpg&text=ReviewCard+shadcn&rpt=simage&lr=117119'

  },
  {
    name: "Сортировка по проектам",
    username: '---1',
    body: "Распределяйте сервисы по проектам, командам или городам — как вам удобно.",
    // img: 'https://yandex.ru/images/search?pos=0&from=tabbar&img_url=https%3A%2F%2Fcdn4.telegram-cdn.org%2Ffile%2FSqsnkCTDqqjIUdw8PNuYBScu7Pe_3jjEdHyMHYvuPSYRxp8Eo-t1sYelO9yz1ohc81IK-Vb0ToSJVzGYuFTbYfrjqOxwbS3pxZDEGbGCPruResXxqQzW34shP7-5eCplCd6CiNIN4GdXBrcjEO7UAr0BdfLONvuNv563WNkUmBEleH00EFr-LXrz31ECb4JIZxWmg31On0VItJF70gIoSn4JMCzOhoLfl6ciW4m7gxGdAi99Pr-sKs5hVWWfat1MVJUlMZIbeZ3kITug77ZnAhUl9-djSCn7f9UZqasW7EA3Z203b7MSB3lhd16VrteuE1R2Ezvonp5l-y1gdXENnA.jpg&text=ReviewCard+shadcn&rpt=simage&lr=117119'

  },
  {
    name: "Раздел с вашими идеями",
    username: '---3',
    body: "Просите то, чего вам не хватает в наших продуктах. Мы рассматриваем все предложения.",
    // img: 'https://yandex.ru/images/search?pos=0&from=tabbar&img_url=https%3A%2F%2Fcdn4.telegram-cdn.org%2Ffile%2FSqsnkCTDqqjIUdw8PNuYBScu7Pe_3jjEdHyMHYvuPSYRxp8Eo-t1sYelO9yz1ohc81IK-Vb0ToSJVzGYuFTbYfrjqOxwbS3pxZDEGbGCPruResXxqQzW34shP7-5eCplCd6CiNIN4GdXBrcjEO7UAr0BdfLONvuNv563WNkUmBEleH00EFr-LXrz31ECb4JIZxWmg31On0VItJF70gIoSn4JMCzOhoLfl6ciW4m7gxGdAi99Pr-sKs5hVWWfat1MVJUlMZIbeZ3kITug77ZnAhUl9-djSCn7f9UZqasW7EA3Z203b7MSB3lhd16VrteuE1R2Ezvonp5l-y1gdXENnA.jpg&text=ReviewCard+shadcn&rpt=simage&lr=117119'
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
//   img,
  name,
  username,
  body,
}: {
//   img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* <Image className="rounded-full" width="32" height="32" alt="" src={img} /> */}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function PanelDesctop() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}