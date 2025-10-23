import { Heart, Search, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navigationItems = [
    { path: "/shop/shoes", label: "Shoes" },
    { path: "/shop/tshirts", label: "T-Shirts" },
    { path: "/shop/shorts", label: "Shorts" },
    { path: "/shop/pants", label: "Pants" },
    { path: "/shop/socks", label: "Socks" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-32 ">
      <div>
        <div className="flex items-center justify-between h-16">
          {/* logo */}
          <Link to="/" className="text-2xl font-bold">
            Zsilla
          </Link>
          {/* desktop navigation */}

          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-medium hover:text-gray-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* icons */}
          <div className="flex items-center space-x-4">
            {/* search icon */}
            <Search size={20} />

            {/* wishlist icon */}
            <Heart size={20} />

            {/* cart icon */}
            <ShoppingBag size={20} />

            {/* auth section */}
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
