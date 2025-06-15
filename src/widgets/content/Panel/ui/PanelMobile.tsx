import { Marquee } from "@/shared/ui/magicui/marquee";
import { useTranslations } from 'next-intl';
import { reviews } from "./Reviews";
import { ReviewCard } from "./ReviewCard";

export function PanelMobile() {
  const t = useTranslations('widgets.content.panel');
  
  const translatedReviews = reviews.map(panel => ({
    ...panel,
    name: t(`${panel.key}.name`),
    username: t(`${panel.key}.username`),
    body: t(`${panel.key}.body`)
  }));

  const firstRow = translatedReviews.slice(0, translatedReviews.length / 2);
  const secondRow = translatedReviews.slice(translatedReviews.length / 2);

  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((panel, index) => (
          <ReviewCard 
            key={`mobile-first-${index}`} 
            name={panel.name}
            username={panel.username}
            body={panel.body}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((panel, index) => (
          <ReviewCard 
            key={`mobile-second-${index}`} 
            name={panel.name}
            username={panel.username}
            body={panel.body}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}