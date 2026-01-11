import { ArrowLeft, LogIn, ShoppingBag } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "../lib/features/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity } = useSelector((state) => state.cart);
  const isSignedIn = true;

  const handleQuantityChange = (productId, size, newQuantity) => {
    dispatch(updateQuantity({ id: productId, size, quantity: newQuantity }));
  };

  const handleRemoveItem = (productId, size) => {
    dispatch(removeFromCart({ id: productId, size }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartSummary = {
    subtotal: items.reduce((total, item) => {
      try {
        const price = parseFloat(item.price);
        const discount = parseFloat(item.discount);
        const quantity = parseInt(item.quantity);

        const lastprice = discount > 0 ? price * (1 - discount / 100) : price;

        return total + lastprice * quantity;
      } catch (error) {
        console.error(error);
      }
    }, 0),

    itemCount: items.reduce((total, item) => {
      try {
        return total + (parseInt(item.quantity) || 1);
      } catch (error) {
        console.error(error);
      }
    }, 0),

    savings: items.reduce((total, item) => {
      try {
        return total + item.price * (item.discount / 100) * item.quantity;
      } catch (error) {
        console.error(error);
      }
    }, 0),
  };

  if (!items || items.length === 0) {
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

            {items.length > 0 && (
              <Button
                variant="outline"
                onClick={handleClearCart}
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
                {items.map((item) => (
                  <div key={item._id}>
                    <CartItem
                      item={item}
                      handleQuantityChange={handleQuantityChange}
                      handleRemoveItem={handleRemoveItem}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalQuantity} items)</span>
                  <span>${cartSummary.subtotal.toFixed(2)}</span>
                </div>

                {cartSummary.savings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>You saved</span>
                    <span>(-${cartSummary.savings.toFixed(2)})</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>

                <hr className="border-gray-200" />

                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>${cartSummary.subtotal.toFixed(2)}</span>
                </div>
              </div>

              {/* checkout button*/}
              {isSignedIn ? (
                <Button
                  asChild
                  size="lg"
                  className="w-full mt-6"
                  disabled={items.length === 0}
                >
                  <Link to="/checkout">Proceed to Checkout</Link>
                </Button>
              ) : (
                <div className="mt-6 space-y-3">
                  <Button
                    size="lg"
                    className="w-full"
                    disabled={items.length === 0}
                  >
                    <LogIn className="h-5 w-5 mr-2" />
                    Sign In to Checkout
                  </Button>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
