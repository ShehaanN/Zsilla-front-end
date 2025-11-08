import { Heart, Search, ShoppingBag } from "lucide-react";
import { Link, NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductSearchForm from "./ProductSearchForm";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navigation = () => {
  const navigationItems = [
    { path: "/shop/shoes", label: "Shoes" },
    { path: "/shop/t-shirts", label: "T-Shirts" },
    { path: "/shop/shorts", label: "Shorts" },
    { path: "/shop/pants", label: "Pants" },
    { path: "/shop/socks", label: "Socks" },
  ];

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  //get the cart data from store
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-16 ">
      <div>
        <div className="flex items-center justify-between h-16">
          {/* logo */}
          <NavLink to="/" className="text-2xl font-bold">
            Zsilla
          </NavLink>
          {/* desktop navigation */}

          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="font-medium hover:text-gray-600 transition-colors duration-200"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* icons */}
          <div className="flex items-center space-x-4">
            {/* search icon */}
            <Button
              variant="ghost"
              className=" rounded-full cursor-pointer "
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={20} />
            </Button>
            {/* wishlist icon */}
            <Heart size={20} />

            {/* cart icon */}
            <Link to="/shop/cart" className=" relative cursor-pointer">
              <ShoppingBag size={20} />
              {totalQuantity > 0 && (
                <Badge className="absolute -top-2 -right-2 text-xs rounded-full text-white  w-5">
                  {totalQuantity}
                </Badge>
              )}
            </Link>

            {/* auth section */}
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
        {isSearchOpen && (
          <div className="border-t border-gray-200 py-4 animate-in slide-in-from-top-1 duration-200">
            <ProductSearchForm />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
