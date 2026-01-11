import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className=" bg-gray-100 ">
      {/* Hero Section */}
      <div className=" px-12 py-8">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          {/* Main Featured Card - Left */}
          <Card className="lg:col-span-2 rounded-3xl overflow-hidden bg-gradient-to-br from-green-200 via-gray-300 to-blue-200 relative h-[625px] border-0 shadow-lg group">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop"
                alt="Summer Fashion"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="relative z-10 p-12 h-full flex flex-col justify-center">
              <div className="max-w-md">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight drop-shadow-lg">
                  Color of
                  <br />
                  Summer
                  <br />
                  Outfit
                </h2>
                <p className="text-gray-800/90 text-lg mb-6 drop-shadow">
                  100+ Collections for your
                  <br />
                  outfit inspirations
                  <br />
                  in this summer
                </p>
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-100 font-semibold px-8"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </Card>

          {/* Right Side Cards */}
          <div className="flex flex-col gap-6">
            {/* Outdoor Active Card */}
            <Card className="rounded-3xl overflow-hidden relative h-[300px] border-0 shadow-lg group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-200">
                <img
                  src="https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=600&h=400&fit=crop"
                  alt="Outdoor Active"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div></div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Outdoor
                    <br />
                    Active
                  </h3>
                </div>
              </div>
            </Card>

            {/* Casual Comfort Card */}
            <Card className="rounded-3xl overflow-hidden relative h-[300px] border-0 shadow-lg group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-blue-200">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop"
                  alt="Casual Comfort"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div></div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Casual
                    <br />
                    Comfort
                  </h3>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
