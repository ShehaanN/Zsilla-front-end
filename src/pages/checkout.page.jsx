import { Navigate, useNavigate } from "react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  ArrowLeft,
  CreditCard,
  Truck,
  MapPin,
  Package,
  Banknote,
} from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ShippingAddressForm from "@/components/ShippingAddressForm";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("CREDIT_CARD");
  const [shippingAddress, setShippingAddress] = useState(true);
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);
  const { items: cart, totalQuantity } = useSelector((state) => state.cart);

  // Calculate order summary
  const orderSummary = {
    subtotal: cart.reduce((total, item) => {
      try {
        const price = parseFloat(item.price);
        const discount = item.discount ? parseFloat(item.discount) : 0;
        const quantity = parseInt(item.quantity);

        const lastprice = discount > 0 ? price * (1 - discount / 100) : price;

        return total + lastprice * quantity;
      } catch (error) {
        console.error(error);
      }
    }, 0),

    itemCount: cart.reduce((total, item) => {
      try {
        return total + (parseInt(item.quantity) || 1);
      } catch (error) {
        console.error(error);
      }
    }, 0),

    savings: cart.reduce((total, item) => {
      try {
        return total + item.price * (item.discount / 100) * item.quantity;
      } catch (error) {
        console.error(error);
      }
    }, 0),
  };

  const total = orderSummary.subtotal;

  // Redirect if cart is empty
  if (cart.length === 0) {
    return <Navigate to="/shop" replace />;
  }

  // Handle shipping address form submission
  const handleShippingAddressSubmit = (addressData) => {
    console.log("Shipping address:", addressData);
    setShippingAddress(addressData);
  };

  // console.log("cart", cart);

  const handlePlaceOrder = async () => {
    setIsProcessingOrder(true);

    try {
      const orderData = {
        items: cart.map((item) => ({
          productId: item._id,
          quantity: item.quantity,
          price:
            item.discount > 0
              ? item.price * (1 - item.discount / 100)
              : item.price,
          size: item.size || null,
        })),
        shippingAddress,
        paymentMethod,
        totalAmount: total,
        orderStatus: paymentMethod === "COD" ? "CONFIRMED" : "PENDING",
        paymentStatus: paymentMethod === "COD" ? "COD_PENDING" : "PENDING",
      };

      console.log("Placing order with data:", orderData);
    } catch (error) {
      console.error("Error placing order:", error);
    } finally {
      setIsProcessingOrder(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header & Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
            <button
              onClick={() => navigate("/")}
              className="hover:text-blue-600"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => navigate("/shop/cart")}
              className="hover:text-blue-600"
            >
              Cart
            </button>
            <span>/</span>
            <span className="text-gray-900">Checkout</span>
          </div>

          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
            <Button variant="outline" onClick={() => navigate("/shop/cart")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Billing details */}
          <div className="lg:col-span-2 space-y-6">
            {/* shipping address */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Shipping Address
                  </h2>
                  <p className="text-sm text-gray-600">
                    Enter your delivery details below so we know where to send
                    your order.
                  </p>
                </div>
              </div>

              <ShippingAddressForm onSubmit={handleShippingAddressSubmit} />
            </Card>

            {/* Payment methods*/}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Payment Method
                  </h2>
                  <p className="text-sm text-gray-600">
                    Choose your preferred way to pay securely.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Online Payment Option */}
                <div
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    paymentMethod === "CREDIT_CARD"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onClick={() => setPaymentMethod("CREDIT_CARD")}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="payment"
                      value="CREDIT_CARD"
                      checked={paymentMethod === "CREDIT_CARD"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-blue-600"
                    />
                    <CreditCard className="h-5 w-5 text-gray-600" />
                    <div className="flex-1">
                      <label className="font-medium text-gray-900 cursor-pointer">
                        Card Payment (Credit/Debit)
                      </label>
                      <p className="text-sm text-gray-600">
                        Secure payment via Stripe
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-5 ">
                        <img src="/assets/images/visa.png" alt="Visa" />
                      </div>
                      <div className="w-8 h-5">
                        <img
                          src="/assets/images/mastercard.png"
                          alt="MasterCard"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* COD Payment Option */}
                <div
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    paymentMethod === "COD"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onClick={() => setPaymentMethod("COD")}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="payment"
                      value="COD"
                      checked={paymentMethod === "COD"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-blue-600"
                    />
                    <Banknote className="h-5 w-5 text-gray-600" />
                    <div className="flex-1">
                      <label className="font-medium text-gray-900 cursor-pointer">
                        Cash on Delivery (COD)
                      </label>
                      <p className="text-sm text-gray-600">
                        Pay in cash when your order is delivered to your
                        doorstep.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-4">
              <div className="flex items-center space-x-3 mb-6">
                <div
                  className="w-10 h-10 bg-gray-200
                 rounded-full flex items-center justify-center"
                >
                  <Package className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Order Summary
                  </h2>
                  <p className="text-sm text-gray-600">
                    {orderSummary.itemCount} items
                  </p>
                </div>
              </div>

              {/* Cart items */}
              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {cart.map((item) => {
                  const discountedPrice =
                    item.price * (1 - item.discount / 100);
                  return (
                    <Card
                      key={item._id}
                      className="p-3 bg-white border border-gray-200 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-md"
                          />
                          {item.discount > 0 && (
                            <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 py-0">
                              -{item.discount}%
                            </Badge>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm text-gray-900 truncate">
                            {item.name}
                          </h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm font-semibold text-gray-900">
                              ${discountedPrice.toFixed(2)}
                            </span>
                            {item.discount > 0 && (
                              <span className="text-xs text-gray-500 line-through">
                                ${item.price.toFixed(2)}
                              </span>
                            )}
                            <span className="text-xs text-gray-500">
                              ×{item.quantity}
                            </span>
                          </div>

                          {/* Size for compact view */}
                          {item?.size && (
                            <div className="flex gap-1 mt-1">
                              {item.size && (
                                <span className="text-xs bg-gray-100 px-1 py-0.5 rounded">
                                  Size: {item.size}
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        <div className="text-right">
                          <p className="font-semibold text-gray-900">
                            $ {(discountedPrice * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Price */}
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${orderSummary.subtotal.toFixed(2)}</span>
                </div>

                {orderSummary.savings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>You saved</span>
                    <span>-${orderSummary.savings.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>

                <hr className="border-gray-200" />

                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full mt-6"
                onClick={handlePlaceOrder}
                disabled={isProcessingOrder || !shippingAddress}
              >
                {isProcessingOrder ? "Processing..." : `Place an Order`}
              </Button>

              {!shippingAddress && (
                <p className="text-sm text-red-600 mt-2 text-center">
                  Please fill in your shipping address to continue
                </p>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
