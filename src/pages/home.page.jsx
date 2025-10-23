import CategoriesShow from "../components/CategoriesShow";
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <CategoriesShow />
    </div>
  );
};

export default HomePage;
