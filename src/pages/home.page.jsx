import CasualInspirations from "../components/CasualInspirations";
import CategoriesShow from "../components/CategoriesShow";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";
import TrendingSection from "../components/TrendingSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CategoriesShow />
      <TrendingSection />
      <CasualInspirations />
    </div>
  );
};

export default HomePage;
