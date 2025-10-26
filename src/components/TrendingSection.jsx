import { ArrowRight, ShoppingCart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const TrendingSection = () => {
  const trendingProducts = [
    {
      _id: "1",
      name: "Stylish Summer Dress",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=600&fit=crop",
      price: 49.99,
      stock: 25,
      brand: "FashionCo",
      discount: 10,
    },
    {
      _id: "2",
      name: "Casual Sneakers",
      image:
        "https://images.unsplash.com/photo-1759542890353-35f5568c1c90?w=600&h=600&fit=crop",
      price: 79.99,
      stock: 25,
      brand: "ShoeBrand",
      discount: 0,
    },
    {
      _id: "3",
      name: "Denim Jacket",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&h=600&fit=crop",
      price: 89.99,
      stock: 0,
      brand: "DenimCo",
      discount: 15,
    },
    {
      _id: "4",
      name: "Classic Wristwatch",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=600&fit=crop",
      price: 199.99,
      stock: 10,
      brand: "WatchMakers",
      discount: 5,
    },
  ];

  const calculateFinalPrice = (price, discount) => {
    return (price * (1 - discount / 100)).toFixed(2);
  };

  return (
    <section className="px-4 lg:px-16">
      {/* heading */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Trending Now
            </h2>
            <TrendingUp className="w-6 h-6 text-red-500" />
          </div>
          <p className="text-gray-600 mt-2">
            Check out the latest trends and styles that are taking the fashion
            world by storm.
          </p>
        </div>
        {/* all products link */}
        <Link to="/shop">
          <Button variant="outline">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Trending Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Product Card 1 */}
        {trendingProducts.map((product) => (
          <Card
            key={product._id}
            className="rounded-2xl overflow-hidden border-0 shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 group bg-white"
          >
            {/* image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {product.discount > 0 && (
                <Badge className="absolute top-3 py-1 left-5 bg-red-500 text-white">
                  -{product.discount}%
                </Badge>
              )}

              <Badge className="absolute top-3 right-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs">
                Featured
              </Badge>
            </div>
            {/* details */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                {product.brand && (
                  <Badge variant="outline" className="text-xs">
                    {product.brand}
                  </Badge>
                )}
              </div>

              <h3 className="font-semibold text-gray-900 mb-2 hover:text-gray-900/70 transition-colors line-clamp-2">
                {product.name}
              </h3>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {product.discount > 0 ? (
                    <>
                      <span className="text-lg font-bold text-gray-900">
                        ${calculateFinalPrice(product.price, product.discount)}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ${product.price.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              {/* action */}
              <Button className="w-full py-5 ">
                <ShoppingCart className="mr-2 h-4 w-4" />
                {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
