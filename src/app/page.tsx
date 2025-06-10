import { Blog } from "@/widgets/Blog/Blog";
import { Hero } from "@/widgets/Hero/Hero";
import { PanelMain } from "@/widgets/Panel/ui/Panel-main";

export default function Home() {
  return (
    <>
      <Hero />
      <Blog />
      <PanelMain />
    </>
  );
}
