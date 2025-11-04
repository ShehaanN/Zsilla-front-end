import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";

const ProductCard4shop = ({ selectedCategory }) => {
  const products = [
    {
      _id: "1",
      name: "Premium Cotton T-Shirt",
      categoryId: "1",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      price: 29.99,
      sizes: ["S", "M", "L", "XL", "XXL", "XS"],
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
      sizes: ["8", "9", "10", "11", "12"],
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
      sizes: ["30", "32", "34", "36", "38"],
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
      sizes: ["M", "L", "XL"],
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
      sizes: ["S", "M", "L", "XL"],
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
      sizes: ["S", "M", "L", "XL", "XXL"],
      brand: "TeeStyle",
      discount: 20,
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory.length > 0) {
      const filteredProducts = products.filter((product) =>
        selectedCategory.includes(product.categoryId)
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory]);

  const calculateFinalPrice = (price, discount) => {
    return (price * (1 - discount / 100)).toFixed(2);
  };

  return (
    <section className="px-4 lg:px-16">
      {/* heading */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-6">
              All Products
            </h2>
          </div>
        </div>
      </div>

      {/* Trending Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Product Card 1 */}
        {filteredProducts?.map((product) => (
          <Card
            key={product._id}
            className="rounded-lg overflow-hidden border-0 shadow-md cursor-pointer hover:shadow-lg transition-all   duration-300 group bg-white"
          >
            {/* image */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
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

              {/* Hover Actions */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                <div className="absolute top-5 right-5 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* wishlist button */}

                  <Button
                    size="sm"
                    variant="secondary"
                    className={`w-9 h-9 rounded-full p-0 bg-white/90 hover:bg-white`}
                  >
                    <Heart
                      className={`h-4 w-4 transition-colors duration-200 text-gray-600 hover:text-red-500`}
                    />
                  </Button>

                  {/* product view button */}
                  <Link to={`/shop/product-details/${product._id}`}>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="w-9 h-9 rounded-full p-0 bg-white/90 hover:bg-white"
                    >
                      <Eye className="h-4 w-4 text-gray-600" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* details */}
            <div className="px-4">
              <div className="flex items-center justify-between mb-2">
                {product.brand && (
                  <Badge variant="outline" className="text-xs">
                    {product.brand}
                  </Badge>
                )}
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-gray-600">4.5</span>
                </div>
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

              {/* sizes */}
              <div className="mt-1 pt-2 mb-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Available sizes:</p>
                <div className="flex gap-1">
                  {product.sizes.slice(0, 5).map((size, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs px-2 py-0"
                    >
                      {size}
                    </Badge>
                  ))}
                  {product.sizes.length > 5 && (
                    <span className="text-xs text-gray-500">
                      +{product.sizes.length - 5}
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

export default ProductCard4shop;
