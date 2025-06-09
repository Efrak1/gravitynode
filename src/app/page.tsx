import { Blog } from "@/widgets/Blog/Blog";
import { Hero } from "@/widgets/Hero/Hero";
import Carousel from "@/widgets/Swiper/CircularSlider";


export default function Home() {
  return (
    <>
      <Hero />
      <Blog />
      <Carousel />
    </>
  );
}
