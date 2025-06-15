import { Marquee } from "@/shared/ui/magicui/marquee";
import { useTranslations } from 'next-intl';
import { reviews } from "./Reviews";
import { ReviewCard } from "./ReviewCard";

export function Panel2xl() {
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
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s] transform: translateX(calc(-100% - var(--gap)));">
        {firstRow.map((review, index) => (
          <ReviewCard 
            key={`first-${index}`} 
            name={review.name}
            username={review.username}
            body={review.body}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <ReviewCard 
            key={`second-${index}`} 
            name={review.name}
            username={review.username}
            body={review.body}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}