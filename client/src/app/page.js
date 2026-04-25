import { CatSlider } from "@/components/CatSlider";
import HomeSlider from "@/components/HomeSlider";

export default function Home() {
  return (
      <>
      <div className="sliderWrapper">
        <HomeSlider/>
        <CatSlider/>
      </div>
    </>
  );
}
