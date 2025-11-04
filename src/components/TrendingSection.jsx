import { ArrowRight, ShoppingCart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const TrendingSection = () => {
  const trendingProducts = [
    {
      _id: "1",
      name: "Premium Cotton T-Shirt",
      categoryId: "1",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      price: 29.99,
      stock: 25,
      brand: "FashionCo",
      discount: 10,
    },
    {
      _id: "2",
      name: "Athletic Running Shoes",
      categoryId: "4",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      price: 79.99,
      stock: 25,
      brand: "ShoeBrand",
      discount: 5,
    },
    {
      _id: "3",
      name: "Slim Fit Chino Pants",
      categoryId: "2",
      image:
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=600&fit=crop",
      price: 59.99,
      stock: 15,
      brand: "PantsCo",
      discount: 15,
    },
    {
      _id: "4",
      name: "Athletic Crew Socks",
      categoryId: "3",
      image:
        "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=600&fit=crop",
      price: 12.99,
      stock: 30,
      brand: "SockMakers",
      discount: 5,
    },
    {
      _id: "5",
      name: "Casual Sport Shorts",
      categoryId: "5",
      image:
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=600&fit=crop",
      price: 34.99,
      stock: 20,
      brand: "SportWear",
      discount: 0,
    },
    {
      _id: "6",
      name: "Graphic Print T-Shirt",
      categoryId: "1",
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop",
      price: 24.99,
      stock: 18,
      brand: "TeeStyle",
      discount: 20,
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(trendingProducts);

  const categories = [
    {
      _id: "all",
      name: "All",
    },
    {
      _id: "1",
      name: "T-Shirts",
    },
    {
      _id: "2",
      name: "Pants",
    },
    {
      _id: "3",
      name: "Socks",
    },
    {
      _id: "4",
      name: "Shoes",
    },
    {
      _id: "5",
      name: "Shorts",
    },
  ];

  const calculateFinalPrice = (price, discount) => {
    return (price * (1 - discount / 100)).toFixed(2);
  };

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterHandleCategory = (categoryId) => {
    if (categoryId === "all") {
      setFilteredProducts(trendingProducts);
      setSelectedCategory("all");
    } else {
      const filteredProducts = trendingProducts.filter(
        (product) => product.categoryId === categoryId
      );
      setSelectedCategory(categoryId);
      setFilteredProducts(filteredProducts);
    }
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
        <div className="flex items-center gap-4">
          {categories.map((cate) => (
            <Button
              key={cate._id}
              onClick={() => filterHandleCategory(cate._id)}
              variant="outline"
              className={`rounded-full text-lg ${
                selectedCategory === cate._id
                  ? "bg-gray-800 text-white hover:bg-gray-800 hover:text-white"
                  : "text-gray-800 "
              } `}
            >
              {cate.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Trending Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Product Card 1 */}
        {filteredProducts?.map((product) => (
          <Card
            key={product._id}
            className="rounded-2xl overflow-hidden border-0 shadow-md cursor-pointer hover:shadow-lg transition-all   duration-300 group bg-white"
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
                        ${product.price?.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price?.toFixed(2)}
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
