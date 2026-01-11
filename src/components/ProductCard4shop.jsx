import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../lib/features/cartSlice";

const ProductCard4shop = ({
  selectedCategory,
  navCategoryId,
  navCategoryname,
  products,
}) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedSize, setSelectedSize] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (navCategoryId) {
  //     const filteredProducts = products.filter(
  //       (product) => product.categoryId === navCategoryId
  //     );
  //     setFilteredProducts(filteredProducts);
  //   } else {
  //     setFilteredProducts(products);
  //   }
  // }, [navCategoryId, products]);

  // useEffect(() => {
  //   if (selectedCategory.length > 0) {
  //     const filteredProducts = products.filter((product) =>
  //       selectedCategory.includes(product.categoryId)
  //     );

  //     setFilteredProducts(filteredProducts);
  //   } else {
  //     setFilteredProducts(products);
  //   }
  // }, [selectedCategory, products]);

  useEffect(() => {
    let filtered = products;

    // Sidebar category selection
    if (selectedCategory.length > 0) {
      filtered = products.filter((product) =>
        selectedCategory.includes(product.categoryId)
      );
    }
    // Navigation category
    else if (navCategoryId) {
      filtered = products.filter(
        (product) => product.categoryId === navCategoryId
      );
    }
    // Show all products
    else {
      filtered = products;
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, navCategoryId]);

  const calculateFinalPrice = (price, discount) => {
    return (price * (1 - discount / 100)).toFixed(2);
  };

  const handleAddToCart = (product) => {
    if (product.stock > 0) {
      const productData = {
        ...product,
        size: selectedSize,
        quantity: 1,
      };
      dispatch(addToCart(productData));
      console.log(`Added ${product.name} to cart`);
    }
  };

  return (
    <section className="px-4 lg:px-16">
      {/* heading */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-6">
              {navCategoryname ? `${navCategoryname}` : "All Products"}
            </h2>
            <p className="text-sm text-gray-600">
              <Link to="/shop" className="mr-1 text-blue-400">
                Shop
              </Link>{" "}
              <span className="mr-1"> /</span>
              {navCategoryname?.toLowerCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Product Card */}
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
                  <Link to={`/shop/product/${product._id}`}>
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

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="w-full py-5 mt-3"
                    disabled={product.stock === 0}
                    onClick={() => setSelectedSize(product.sizes[0])}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Select Options</DialogTitle>
                  </DialogHeader>
                  <div>
                    <div className="mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-medium">{product.name}</h4>
                      <p className="text-lg font-bold text-gray-900">
                        $
                        {product.discount > 0
                          ? calculateFinalPrice(product.price, product.discount)
                          : product.price.toFixed(2)}
                      </p>
                    </div>

                    {product.sizes && product.sizes.length > 0 && (
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                          Size *
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {product.sizes.map((size) => (
                            <button
                              key={size}
                              onClick={() => setSelectedSize(size)}
                              className={`px-3 py-2 border rounded-md text-sm font-medium transition-colors ${
                                selectedSize === size
                                  ? "border-blue-500 bg-blue-50 text-blue-700"
                                  : "border-gray-300 hover:border-gray-400"
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <DialogFooter className="grid grid-cols-2 gap-4">
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      disabled={product.stock === 0}
                    >
                      Add to Cart
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProductCard4shop;
