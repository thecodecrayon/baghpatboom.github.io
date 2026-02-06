import { Hero } from "../components";
import CategoryBelt from "../components/CategoryBelt";
import FloatingSocials from "../components/FloatingSocials";
import ShowItemsSection from "../components/ShowItemsSection";
import TextSection from "../components/TextSection";
import { categoryData, homeData } from "../data";

const Home = () => {
  return (
    <div className="relative">
      {/* SOCIAL MEDIA ICONS */}
      <FloatingSocials />

      <Hero />

      {/* CATEGORY BELT; */}
      <CategoryBelt items={categoryData} />

      {homeData.map((item) => (
        <ShowItemsSection
          id={item.id}
          title={item.title}
          items={item.data}
          bgColor={item.background}
        />
      ))}

      <TextSection />
    </div>
  );
};

export default Home;
