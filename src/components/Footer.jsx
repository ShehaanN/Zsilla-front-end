import { Link } from "react-router";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="px-4 lg:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* company info */}
            <div className="space-y-6">
              <div>
                <Link
                  to="/"
                  className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                >
                  Zsilla
                </Link>
                <p className="text-gray-300 mt-3 leading-relaxed">
                  Discover the latest trends in fashion and upgrade your
                  wardrobe with our new collection. Style meets comfort for
                  every occasion.
                </p>
              </div>
              {/* social media links */}
              <div>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* shop links */}
            <div>
              <h4 className="font-semibold mb-6 text-white">Shop</h4>
              <nav className="space-y-3">
                <Link
                  to="#"
                  className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  All Products
                </Link>
                <Link
                  to="#"
                  className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Shoes
                </Link>
                <Link
                  to="#"
                  className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  T-Shirts
                </Link>
                <Link
                  to="#"
                  className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Shorts
                </Link>
                <Link
                  to="#"
                  className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Pants
                </Link>
                <Link
                  to="#"
                  className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Socks
                </Link>
                <Link
                  to="#"
                  className="block text-red-400 hover:text-red-300 hover:translate-x-1 transition-all duration-200 font-medium"
                >
                  Sale Items
                </Link>
              </nav>
            </div>

            {/* contact info */}
            <div>
              <h4 className="font-semibold mb-6 text-white">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Email us</p>
                    support@zsilla.com
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Call us</p>
                    +94 112 345 678
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Visit us</p>
                    <address className="text-white not-italic">
                      123
                      <br />
                      Colombo
                      <br />
                      Sri Lanka
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bottom license */}
        <div className="border-t border-gray-800">
          <div className="px-4 lg:px-16 py-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Zsilla. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
