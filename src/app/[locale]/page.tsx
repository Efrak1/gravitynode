import { Blog } from "@/widgets/content/Blog/ui/Blog";
import { Hero } from "@/widgets/content/Hero/ui/Hero";
import { PanelMain } from "@/widgets/content/Panel/ui/Panel-main";

export default function Home() {
  return (
    <>
      <Hero />
      <Blog />
      <PanelMain />
    </>
  );
}
