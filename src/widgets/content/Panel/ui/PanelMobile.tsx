import { Marquee } from "@/shared/ui/magicui/marquee";
import { useTranslations } from 'next-intl';
import { reviews } from "./Reviews";
import { ReviewCard } from "./ReviewCard";

export function PanelMobile() {
  const t = useTranslations('reviews');
  
  const translatedReviews = reviews.map(review => ({
    ...review,
    name: t(`${review.key}.name`),
    username: t(`${review.key}.username`),
    body: t(`${review.key}.body`)
  }));

  const firstRow = translatedReviews.slice(0, translatedReviews.length / 2);
  const secondRow = translatedReviews.slice(translatedReviews.length / 2);

  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard 
            key={`mobile-first-${index}`} 
            name={review.name}
            username={review.username}
            body={review.body}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <ReviewCard 
            key={`mobile-second-${index}`} 
            name={review.name}
            username={review.username}
            body={review.body}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}