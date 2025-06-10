import { Blog } from "@/widgets/Blog/Blog";
import { Hero } from "@/widgets/Hero/Hero";
import { PanelMain } from "@/widgets/Panel/ui/Panel-main";
// import Carousel from "@/widgets/Swiper/CircularSlider";

export default function Home() {
  return (
    <>
      <Hero />
      <Blog />
      {/* <Carousel /> */}
      <PanelMain />
    </>
  );
}
