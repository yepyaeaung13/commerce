import AppDownloadSection from "@/components/home/AppDownloadSection";
import Banner from "@/components/home/Banner";
import BestSellingSection from "@/components/home/BestSellingSection";
import Category from "@/components/home/Category";
import ProductSection from "@/components/home/ProductSection";
import PromotionSection from "@/components/home/PromotionSection";

export default function Home() {
  return (
    <>
      {/* carousel section  */}
      <Banner />
      {/* categories section  */}
      <Category />
      {/* You might need  */}
      <ProductSection title="You might need" seeMoreLink={"/products"} />
      {/* {big sale promotion} */}
      <PromotionSection />
      {/* weekly best selling section  */}
      <BestSellingSection />
      {/* App download section  */}
      <AppDownloadSection />
      {/* just for you section  */}
      <ProductSection title="Just for you" seeMoreLink={"/products"} />
    </>
  );
}
