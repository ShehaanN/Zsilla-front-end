import React from "react";
import { useNavigate, Link, useSearchParams } from "react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Banknote, CircleCheck, ArrowUpRight } from "lucide-react";

const OrderSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const orderId = "153fgsdfg4564sdfg";
  const paymentMethod = "COD";
  const orderStatus = "Success";
  const orderType = "COD";

  const COD_Order = orderType === "COD";
  return (
    <div className="min-h-screen  bg-gray-50  flex flex-col items-center justify-center ">
      <div className="max-w-2xl sm:min-w-2xl mx-auto px-4 ">
        {/* Order Info*/}
        <Card className="p-8 mb-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CircleCheck className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Order Confirmed
            </h1>

            <p className="text-lg text-gray-600">
              Your order has been successfully placed and confirmed!
            </p>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Order Tracking Number
              </h2>
              <div className="bg-gray-100 px-4 py-2 rounded-lg inline-block">
                <span className="font-mono text-lg">
                  #{orderId.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              {COD_Order ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-orange-600">
                    <Banknote className="h-5 w-5" />
                    <span className="font-semibold">Cash on Delivery</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">Payment Successful</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/orders">
            <Button size="lg" className="w-full sm:w-auto">
              View My Orders
            </Button>
          </Link>

          <Link to="/shop">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-gray-500"
            >
              Continue Shopping
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
