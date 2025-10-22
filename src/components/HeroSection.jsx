import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Stars } from "lucide-react";
import { Link } from "react-router-dom";
import img1 from "@/assets/images/img1.png";
import img2 from "@/assets/images/img2.png";
import img3 from "@/assets/images/img3.png";

const HeroSection = () => {
  return (
    <section className="relative px-4 lg:px-16 pt-8 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* left side */}
        <div className="space-y-6">
          <div className="space-y-4">
            <Badge className="bg-indigo-50 text-indigo-600 hover:bg-indigo-200 px-4 py-2">
              <Stars className="w-4 h-4 mr-2" />
              New Arrival
            </Badge>

            {/* headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Elevate Your
              <br />
              <span className="text-indigo-600">Everyday Look</span>
            </h1>

            {/* subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-lg">
              Discover the latest trends in fashion and upgrade your wardrobe
              with our new collection. Style meets comfort for every occasion.
            </p>
          </div>
          {/* action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="#">
              <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-lg">
                Shop Now
              </Button>
            </Link>
            <Link to="#">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-8 py-4 text-lg"
              >
                View Collection
              </Button>
            </Link>
          </div>
        </div>
        {/* right side */}
        <div className="grid grid-cols-2 gap-4 h-[500px] lg:h-[600px]">
          {/* main image */}
          <div className="col-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-100 to-blue-200">
            <img
              src={img1}
              alt="Main Image"
              className="w-full h-2/3 object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                <h3 className="font-semibold text-gray-900">New Collection</h3>
                <p className="text-sm text-gray-600">50+ New Arrivals</p>
              </div>
            </div>
          </div>
          {/* sub images */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-100 to-sky-100">
            <img
              src={img2}
              className="w-full h-full object-cover"
              alt="Sub Image 2"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-3 left-3">
              <span className="text-white font-medium text-sm">
                Outdoor Active
              </span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-sky-100">
            <img
              src={img3}
              className="w-full h-full object-cover"
              alt="Sub Image 3"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-3 left-3">
              <span className="text-white font-medium text-sm">
                Outdoor Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
