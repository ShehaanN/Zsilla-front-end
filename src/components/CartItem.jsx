import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Minus, Plus, Trash2 } from "lucide-react";

const CartItem = ({ item }) => {
  const discountedPrice = item.price * (1 - item.discount / 100);

  return (
    <div>
      <Card
        className={`p-6 bg-white border border-gray-200 hover:shadow-md transition-all duration-200 `}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Item image */}
          <div className="relative flex-shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
            />
            {item.discount > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">
                -{item.discount}%
              </Badge>
            )}

            {/* Stock count */}
            {item.stock < 10 && (
              <Badge
                variant="outline"
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-orange-100 text-orange-800 border-orange-300 text-xs"
              >
                Only {item.stock} left
              </Badge>
            )}
          </div>

          {/* Product Info */}
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 leading-tight">
                {item.name}
              </h3>
              {item.brand && (
                <p className="text-sm text-gray-600 mt-1">by {item.brand}</p>
              )}

              {/* Size & Color  */}
              {item?.size && (
                <div className="flex gap-2 text-sm text-gray-600 mt-1">
                  {item.size && (
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                      Size: {item.size}
                    </span>
                  )}
                </div>
              )}

              {/* Price */}
              <div className="flex items-center space-x-3 mt-2">
                <span className="text-xl font-bold text-gray-900">
                  ${discountedPrice.toFixed(2)}
                </span>
                {item.discount > 0 && (
                  <span className="text-lg text-gray-500 line-through">
                    ${item.price.toFixed(2)}
                  </span>
                )}
                {item.discount > 0 && (
                  <Badge variant="secondary" className="text-xs">
                    Save ${(item.price - discountedPrice).toFixed(2)}
                  </Badge>
                )}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-700">
                  Quantity:
                </span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-gray-100 disabled:opacity-50"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>

                  <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                    {item.quantity}
                  </span>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-gray-100 disabled:opacity-50"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                {item.stock < 10 && item.stock > 0 && (
                  <span className="text-xs text-orange-600 ml-2">
                    {item.stock} available
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-red-600 hover:bg-red-50 disabled:opacity-50"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Remove
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-pink-600 hover:bg-pink-50"
                >
                  <Heart className="h-4 w-4 mr-1" />
                  Save
                </Button>
              </div>
            </div>

            {/* Total Price */}
            <div className="pt-3 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Subtotal:</span>
                <span className="text-lg font-bold text-gray-900">
                  {(discountedPrice * item.quantity).toFixed(2)}
                </span>
              </div>
              {item.discount > 0 && item.quantity > 1 && (
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Total savings:</span>
                  <span className="text-green-600 font-medium">
                    -$
                    {((item.price - discountedPrice) * item.quantity).toFixed(
                      2
                    )}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CartItem;
