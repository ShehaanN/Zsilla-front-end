import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const RootLayout = () => {
  return (
    <div className="mx-auto">
      <Navigation />
      <main className="min-h-screen bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
