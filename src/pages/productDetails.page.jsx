import { Edit3, Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      _id: "1",
      name: "Premium Cotton T-Shirt",
      categoryId: "1",
      description:
        "Experience ultimate comfort with our Premium Cotton T-Shirt, crafted from 100% organic cotton. Perfect for everyday wear, this t-shirt offers a soft touch against your skin and a breathable fit to keep you cool all day long.",
      reviews: [
        {
          _id: "r1",
          comment: "Great quality and very comfortable!",
          rating: 5,
          createdAt: "2025-11-03T08:02:46.115+00:00",
        },
        {
          _id: "r2",
          comment: "Fits well but the color fades after washing.",
          rating: 4,
          createdAt: "2025-11-03T08:02:46.115+00:00",
        },
      ],
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
      description:
        "Elevate your performance with our Athletic Running Shoes, designed for comfort and speed. Featuring a lightweight mesh upper and responsive cushioning, these shoes provide the support you need for your daily runs.",
      reviews: [
        {
          _id: "r1",
          comment: "Great grip and comfort!",
          rating: 5,
          createdAt: "2025-11-03T08:02:46.115+00:00",
        },
        {
          _id: "r2",
          comment: "Good value for the price.",
          rating: 4,
          createdAt: "2025-11-03T08:02:46.115+00:00",
        },
        {
          _id: "r3",
          comment: "Runs a bit small.",
          rating: 3,
          createdAt: "2025-11-03T08:02:46.115+00:00",
        },
      ],
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
      description:
        "Upgrade your wardrobe with our Slim Fit Chino Pants, designed for both comfort and style. These versatile pants are perfect for any occasion, featuring a tailored fit and soft, breathable fabric.",
      reviews: [
        {
          _id: "r1",
          comment: "Great fit and quality material.",
          rating: 5,
          createdAt: "2025-11-03T08:02:46.115+00:00",
        },
        {
          _id: "r2",
          comment: "Comfortable but a bit pricey.",
          rating: 4,
          createdAt: "2025-11-03T08:02:46.115+00:00",
        },
        {
          _id: "r3",
          comment: "Not the best for tall people.",
          rating: 3,
          createdAt: "2025-11-03T08:02:46.115+00:00",
        },
      ],
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
      description:
        "Stay comfortable and stylish with our Athletic Crew Socks, designed for optimal performance. These socks feature moisture-wicking fabric and cushioned soles, making them perfect for any workout.",
      reviews: [
        {
          _id: "r1",
          comment: "Very comfortable and durable.",
          rating: 5,
          createdAt: "2025-11-03T08:02:46.115+00:00",
        },
        {
          _id: "r2",
          comment: "Good value for the price.",
          rating: 4,
          createdAt: "2025-11-03T08:02:46.115+00:00",
        },
      ],
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
      description:
        "Stay cool and comfortable with our Casual Sport Shorts, perfect for workouts or lounging at home. Made from lightweight, breathable fabric, these shorts offer a relaxed fit and easy movement.",
      reviews: [],
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
      description:
        "Make a bold statement with our Graphic Print T-Shirt, featuring unique designs and vibrant colors. Made from soft, breathable fabric, this t-shirt is perfect for expressing your individuality.",
      reviews: [
        {
          _id: "r1",
          comment: "Awesome design and very comfortable!",
          rating: 5,
          createdAt: "2025-11-03T08:02:46.115+00:00",
        },
        {
          _id: "r2",
          comment: "Colors fade a bit after washing.",
          rating: 4,
          createdAt: "2025-11-03T08:02:46.115+00:00",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop",
      price: 24.99,
      stock: 18,
      sizes: ["S", "M", "L", "XL", "XXL"],
      brand: "TeeStyle",
      discount: 20,
    },
  ];

  const product = products.find((prod) => prod._id === id);

  const calculateFinalPrice = (price, discount) => {
    if (!discount || discount === 0) return price;
    return (price * (1 - discount / 100)).toFixed(2);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= (product?.stock || 1)) {
      setQuantity(newQuantity);
    }
  };

  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const averageRating = calculateAverageRating(product.reviews || []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-gray-900">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gray-900">
            Shop
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product image */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl overflow-hidden border border-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              {product.brand && (
                <Badge variant="outline">{product.brand}</Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

            <div className="flex items-center gap-3">
              {product.discount > 0 ? (
                <>
                  <span className="text-3xl font-bold text-gray-900">
                    ${calculateFinalPrice(product.price, product.discount)}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                  <Badge className="bg-red-500">-{product.discount}%</Badge>
                </>
              ) : (
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>

            {product.description && (
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            )}

            {/* Size Select */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold">Size</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        px-4 py-2 border-2 rounded-md font-medium transition-colors
                        ${
                          selectedSize === size
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-200 hover:border-gray-300"
                        }
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Select */}
            <div className="space-y-3">
              <h3 className="font-semibold">Quantity</h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-2 hover:bg-gray-50 disabled:opacity-50"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stock}
                    className="p-2 hover:bg-gray-50 disabled:opacity-50"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  {product.stock} available
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                // onClick={handleAddToCart}
                // disabled={product.stock === 0 || isAddingToCart}
                className="flex-1"
                size="lg"
              >
                {/* {isAddingToCart ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                    Adding...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </>
                )} */}
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>

              <Button
                variant="outline"
                size="lg"
                // onClick={handleWishlistToggle}
                // disabled={
                //   isAddingToWishlist ||
                //   isRemovingFromWishlist ||
                //   wishlistLoading
                // }
                className={`px-4 hover:bg-gray-50 `}
              >
                <Heart className={`h-5 w-5 `} />
              </Button>
            </div>
          </div>
        </div>

        {/* product reviews */}

        <div className="space-y-6">
          {/* Review summary */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Customer Reviews</CardTitle>
                <Button variant="outline" size="sm">
                  <Edit3 className="mr-2 h-4 w-4" />
                  Write a Review
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">{averageRating}</div>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(averageRating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    {product.reviews.length} reviews
                  </div>
                </div>

                {/* Rating Distribution */}
                <div className="flex-1">
                  {[5, 4, 3, 2, 1].map((stars) => {
                    const count = product.reviews.filter(
                      (review) => review.rating === stars
                    ).length;
                    const percentage =
                      product.reviews.length > 0
                        ? (count / product.reviews.length) * 100
                        : 0;

                    return (
                      <div key={stars} className="flex items-center gap-3 mb-1">
                        <span className="text-sm w-8">{stars}★</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-400 h-2 rounded-full"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 w-8">
                          {count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* All Reviews */}
          <div className="space-y-4">
            {/* Review Card */}
            {product.reviews.length > 0 ? (
              product.reviews.map((review) => (
                <div
                  key={review._id}
                  className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">Anonymous</h4>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">
                          {review.rating}/5
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {formatDate(review.createdAt)}
                    </span>
                  </div>

                  <div>
                    <p className="text-gray-600 text-sm">{review.comment}</p>
                  </div>
                </div>
              ))
            ) : (
              <Card>
                <CardContent className="text-center py-8">
                  <p className="text-gray-600 mb-4">No reviews yet.</p>
                  <Button>
                    <Edit3 className="mr-2 h-4 w-4" />
                    Write the first review
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
