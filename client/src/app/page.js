import Banners from "@/components/Banners";
import { CatSlider } from "@/components/CatSlider";
import HomeSlider from "@/components/HomeSlider";
import { PopularProducts } from "@/components/PopularProducts";
import ProductsRow from "@/components/ProductRow";

export default function Home() {
  return (
    <>
      <div className="sliderWrapper bg-[#f1f1f1] py-5 pb-0">
        <HomeSlider />
        <CatSlider />
        <PopularProducts />
        <Banners />
        <ProductsRow title="Latest Products"/>
        <ProductsRow title="Featured Products"/>
        <ProductsRow title="Breakfast & Dairy"/>
      </div>
    </>
  );
}
