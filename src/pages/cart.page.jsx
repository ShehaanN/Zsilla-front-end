import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const isSignedIn = false;
  const cart = [
    {
      _id: "1",
      name: "Premium Cotton T-Shirt",
      categoryId: "1",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      price: 29.99,
      size: "S",
      stock: 25,
      brand: "FashionCo",
      quantity: 2,

      discount: 10,
    },
    {
      _id: "2",
      name: "Athletic Running Shoes",
      categoryId: "4",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      price: 79.99,
      size: "12",
      stock: 25,
      brand: "ShoeBrand",
      quantity: 1,
      discount: 5,
    },
  ];

  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">Cart</span>
          </div>

          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-12 w-12 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added anything to your cart yet. Browse
                our collection and discover amazing products!
              </p>
              <Button asChild size="lg" className="px-8">
                <Link to="/shop">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Cart Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-900">Cart</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Shopping Cart
              <Badge variant="secondary" className="ml-3">
                3 items
              </Badge>
            </h1>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline" asChild>
              <Link to="/shop">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Link>
            </Button>

            {cart.length > 0 && (
              <Button
                variant="outline"
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                Clear Cart
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Cart Items
              </h2>

              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id}>
                    <CartItem item={item} />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
