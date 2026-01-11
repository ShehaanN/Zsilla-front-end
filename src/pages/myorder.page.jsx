import React, { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  Truck,
  Clock,
  XCircle,
  ArrowLeft,
  Eye,
  CreditCard,
  Banknote,
  Calendar,
  ImageIcon,
  CircleCheck,
  ArrowUpRight,
  SearchX,
} from "lucide-react";
import { useNavigate, Link } from "react-router";
const MyOrderPage = () => {
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState("ALL");

  const orders = [
    {
      _id: "ord_1a2b3c4d",
      orderStatus: "PENDING",
      paymentMethod: "COD",
      paymentStatus: "UNPAID",
      createdAt: "2025-11-15T10:24:00Z",
      items: [
        {
          productId: {
            _id: "p_101",
            name: "Classic White Tee",
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qcZ53QXi6umNPv89Fjy0qhl_nZtuAtOAJw&s",
              },
            ],
          },
          quantity: 2,
          price: 19.99,
        },
      ],
      totalAmount: 39.98,
    },
    {
      _id: "ord_5f6e7d8c",
      orderStatus: "CONFIRMED",
      paymentMethod: "CREDIT_CARD",
      paymentStatus: "PAID",
      createdAt: "2025-10-02T14:45:00Z",
      items: [
        {
          productId: {
            _id: "p_202",
            name: "Denim Jacket",
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qcZ53QXi6umNPv89Fjy0qhl_nZtuAtOAJw&s",
              },
            ],
          },
          quantity: 1,
          price: 79.99,
        },
        {
          productId: {
            _id: "p_203",
            name: "Leather Belt",
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qcZ53QXi6umNPv89Fjy0qhl_nZtuAtOAJw&s",
              },
            ],
          },
          quantity: 1,
          price: 19.99,
        },
      ],
      totalAmount: 99.98,
    },
    // {
    //   _id: "ord_9z8y7x6w",
    //   orderStatus: "SHIPPED",
    //   paymentMethod: "STRIPE",
    //   paymentStatus: "PAID",
    //   createdAt: "2025-09-21T08:12:00Z",
    //   items: [
    //     {
    //       productId: {
    //         _id: "p_303",
    //         name: "Running Sneakers",
    //         images: [{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qcZ53QXi6umNPv89Fjy0qhl_nZtuAtOAJw&s" }],
    //       },
    //       quantity: 1,
    //       price: 59.99,
    //     },
    //     {
    //       productId: {
    //         _id: "p_304",
    //         name: "Performance Socks",
    //         images: [{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qcZ53QXi6umNPv89Fjy0qhl_nZtuAtOAJw&s" }],
    //       },
    //       quantity: 3,
    //       price: 9.99,
    //     },
    //     {
    //       productName: "Sport Cap",
    //       productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qcZ53QXi6umNPv89Fjy0qhl_nZtuAtOAJw&s",
    //       quantity: 1,
    //       price: 14.99,
    //     },
    //   ],
    //   totalAmount: 104.95,
    // },
    {
      _id: "ord_a1b2c3d4",
      orderStatus: "FULFILLED",
      paymentMethod: "CREDIT_CARD",
      paymentStatus: "PAID",
      createdAt: "2025-08-11T17:30:00Z",
      items: [
        {
          productId: {
            _id: "p_401",
            name: "Notebook",
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qcZ53QXi6umNPv89Fjy0qhl_nZtuAtOAJw&s",
              },
            ],
          },
          quantity: 2,
          price: 4.5,
        },
        {
          productId: {
            _id: "p_402",
            name: "Pen Set",
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qcZ53QXi6umNPv89Fjy0qhl_nZtuAtOAJw&s",
              },
            ],
          },
          quantity: 1,
          price: 6.0,
        },
        {
          productId: {
            _id: "p_403",
            name: "Desk Lamp",
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qcZ53QXi6umNPv89Fjy0qhl_nZtuAtOAJw&s",
              },
            ],
          },
          quantity: 1,
          price: 24.99,
        },
        {
          productId: {
            _id: "p_404",
            name: "Mouse Pad",
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qcZ53QXi6umNPv89Fjy0qhl_nZtuAtOAJw&s",
              },
            ],
          },
          quantity: 1,
          price: 7.99,
        },
        {
          productId: {
            _id: "p_405",
            name: "USB Cable",
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qcZ53QXi6umNPv89Fjy0qhl_nZtuAtOAJw&s",
              },
            ],
          },
          quantity: 3,
          price: 3.49,
        },
        {
          productId: {
            _id: "p_406",
            name: "Water Bottle",
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qcZ53QXi6umNPv89Fjy0qhl_nZtuAtOAJw&s",
              },
            ],
          },
          quantity: 1,
          price: 12.0,
        },
        {
          productId: {
            _id: "p_407",
            name: "Sticker Pack",
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qcZ53QXi6umNPv89Fjy0qhl_nZtuAtOAJw&s",
              },
            ],
          },
          quantity: 5,
          price: 1.5,
        },
        {
          productId: {
            _id: "p_408",
            name: "Keychain",
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qcZ53QXi6umNPv89Fjy0qhl_nZtuAtOAJw&s",
              },
            ],
          },
          quantity: 1,
          price: 3.0,
        },
      ],
      totalAmount: 86.96,
    },
    {
      _id: "ord_z9y8x7w6",
      orderStatus: "CANCELLED",
      paymentMethod: "CREDIT_CARD",
      paymentStatus: "UNPAID",
      createdAt: "2025-07-05T11:05:00Z",
      items: [
        {
          productId: {
            _id: "p_455",
            name: "Vintage Sunglasses",
            images: [
              {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qcZ53QXi6umNPv89Fjy0qhl_nZtuAtOAJw&s",
              },
            ],
          },
          quantity: 1,
          price: 34.0,
        },
      ],
      totalAmount: 49.99,
    },
  ];

  const getStatusConfig = (status) => {
    const configs = {
      PENDING: {
        color: "bg-yellow-100 text-yellow-800 border-yellow-200",
        icon: Clock,
        label: "Pending",
        description: "Order is being processed",
      },
      CONFIRMED: {
        color: "bg-blue-100 text-blue-800 border-blue-200",
        icon: CircleCheck,
        label: "Confirmed",
        description: "Order confirmed and being prepared",
      },
      SHIPPED: {
        color: "bg-purple-100 text-purple-800 border-purple-200",
        icon: Truck,
        label: "Shipped",
        description: "Order is on its way",
      },
      FULFILLED: {
        color: "bg-green-100 text-green-800 border-green-200",
        icon: CircleCheck,
        label: "Delivered",
        description: "Order successfully delivered",
      },
      CANCELLED: {
        color: "bg-red-100 text-red-800 border-red-200",
        icon: XCircle,
        label: "Cancelled",
        description: "Order has been cancelled",
      },
    };
    return configs[status] || configs["PENDING"];
  };

  const getPaymentConfig = (method, status) => {
    const paymentMethods = {
      COD: {
        icon: Banknote,
        label: "Cash on Delivery",
        color: status === "PAID" ? "text-green-600" : "text-orange-600",
      },
      CREDIT_CARD: {
        icon: CreditCard,
        label: "Credit Card",
        color: status === "PAID" ? "text-green-600" : "text-blue-600",
      },
      STRIPE: {
        icon: CreditCard,
        label: "Online Payment",
        color: status === "PAID" ? "text-green-600" : "text-blue-600",
      },
    };

    return paymentMethods[method] || paymentMethods["CREDIT_CARD"];
  };

  const ProductImage = ({ src, alt, className = "" }) => {
    const [imageError, setImageError] = useState(false);

    return (
      <div className={`relative ${className}`}>
        {!imageError && src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover rounded"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
            <ImageIcon className="h-4 w-4 text-gray-400" />
          </div>
        )}
      </div>
    );
  };

  const filteredOrders =
    selectedStatus === "ALL"
      ? orders.filter((order) => order && order._id)
      : orders.filter(
          (order) => order && order._id && order.orderStatus === selectedStatus
        );

  // Date formatting
  const formatDate = (dateString) => {
    if (!dateString) return "Date unavailable";

    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Invalid date";

      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      console.error("Date formatting error:", error);
      return "Date error";
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
            <button
              onClick={() => navigate("/")}
              className="hover:text-blue-600 transition-colors"
              type="button"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-gray-900">My Orders</span>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-3">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
                <p className="text-gray-600">
                  {orders.length > 0 && `You have ${orders.length} orders`}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                Refresh
              </Button>
              <Button variant="outline" onClick={() => navigate("/shop")}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>

        {orders.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {[
                "ALL",
                "PENDING",
                "CONFIRMED",
                "SHIPPED",
                "FULFILLED",
                "CANCELLED",
              ].map((status) => {
                const statusCount =
                  status === "ALL"
                    ? orders.length
                    : orders.filter((order) => order?.orderStatus === status)
                        .length;

                return (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`relative px-4 py-2  text-sm font-medium transition-colors ${
                      selectedStatus === status
                        ? " text-blue-600 shadow-md border-b-3 border-blue-600"
                        : " text-gray-700 hover:bg-gray-50"
                    }`}
                    type="button"
                  >
                    {status === "ALL" ? "All" : status}
                    {statusCount > 0 && (
                      <span
                        className={`absolute -top-2 -right-2 ml-2 px-2 py-0.5 rounded-full text-xs ${
                          selectedStatus === status
                            ? "bg-blue-600 text-white bg-opacity-20"
                            : "bg-gray-100"
                        }`}
                      >
                        {statusCount}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {filteredOrders.length === 0 ? (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <SearchX className="h-12 w-12 text-gray-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Your order list is empty
            </h1>

            <p className="text-base text-gray-600">
              Start by exploring our products and great deals!
            </p>
            <div className="mt-6">
              <Link to="/shop">
                <Button size="lg" className="w-full sm:w-auto">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => {
              if (!order?._id) return null;

              const statusConfig = getStatusConfig(order.orderStatus);
              const paymentConfig = getPaymentConfig(
                order.paymentMethod,
                order.paymentStatus
              );
              const StatusIcon = statusConfig.icon;
              const PaymentIcon = paymentConfig.icon;

              return (
                <Card
                  key={order._id}
                  className="p-6 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    {/* Order Info */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="font-semibold text-lg text-gray-900">
                          Order #{order._id?.slice(-8)?.toUpperCase() || "N/A"}
                        </h3>
                        <Badge
                          className={`${statusConfig.color} px-3 py-1 text-sm`}
                        >
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {statusConfig.label}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(order.createdAt)}
                        </div>

                        <div className="flex items-center">
                          <Package className="h-4 w-4 mr-1" />
                          {order.items?.length || 0} item
                          {(order.items?.length || 0) !== 1 ? "s" : ""}
                        </div>

                        <div
                          className={`flex items-center ${paymentConfig.color}`}
                        >
                          <PaymentIcon className="h-4 w-4 mr-1" />
                          {paymentConfig.label}
                        </div>

                        {order.paymentStatus === "PAID" && (
                          <Badge
                            variant="outline"
                            className="text-green-600 border-green-600"
                          >
                            Paid
                          </Badge>
                        )}
                      </div>

                      {/* Order Total */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">
                            ${(order.totalAmount || 0).toFixed(2)}
                          </span>
                          <p className="text-xs text-gray-500 mt-1">
                            {statusConfig.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-3">
                      <Link to={`/orders/${order._id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-blue-50"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </Link>

                      {(order.orderStatus === "PENDING" ||
                        order.orderStatus === "CONFIRMED") &&
                        order.orderStatus !== "CANCELLED" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 border-red-200 hover:bg-red-50"
                            onClick={() => {
                              const confirmCancel = window.confirm(
                                `Are you sure you want to cancel order #${order._id?.toUpperCase()}?`
                              );
                              if (confirmCancel) {
                                console.log(`Order #${order._id} cancelled.`);
                              }
                            }}
                            type="button"
                          >
                            Cancel
                          </Button>
                        )}
                    </div>
                  </div>

                  {/* Order Items */}
                  {order.items && order.items.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">
                        Order Items
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {order.items.slice(0, 6).map((item) => {
                          const productName =
                            item.productId?.name ||
                            item.productName ||
                            "Unknown Product";
                          const quantity = item.quantity || 0;
                          const price = item.price || 0;
                          const imageUrl = item.productId?.images?.[0]?.url;

                          return (
                            <div
                              key={item.productId?._id}
                              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border hover:bg-gray-100 transition-colors"
                            >
                              <ProductImage
                                src={imageUrl}
                                alt={productName}
                                className="w-12 h-12 flex-shrink-0"
                              />

                              <div className="flex-1 min-w-0">
                                <h5 className="text-sm font-medium text-gray-900 truncate">
                                  {productName}
                                </h5>
                                <div className="flex items-center justify-between mt-1">
                                  <span className="text-xs text-gray-600">
                                    Qty: {quantity}
                                  </span>
                                  <span className="text-sm font-semibold text-gray-900">
                                    ${price.toFixed(2)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}

                        {order.items.length > 6 && (
                          <div className="flex items-center justify-center p-3 bg-gray-100 rounded-lg border border-dashed border-gray-300">
                            <div className="text-center">
                              <Package className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                              <span className="text-xs text-gray-500">
                                +{order.items.length - 6} more items
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrderPage;
