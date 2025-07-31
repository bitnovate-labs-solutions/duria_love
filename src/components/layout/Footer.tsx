import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-primary"></div>
                              <span className="text-xl font-bold">Duria</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Premium durian export company bringing the finest quality durians
              to the world.
            </p>
            <div className="space-y-2 text-sm">
                              <p>Duria Exports Sdn Bhd</p>
              <p>Registration No: 202401234567</p>
              <p>GST No: 001234567890</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary-glow transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-primary-glow transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/where-to-buy"
                  className="hover:text-primary-glow transition-colors"
                >
                  Where to Buy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary-glow transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/shop/whole-fruits"
                  className="hover:text-primary-glow transition-colors"
                >
                  Whole Fruits
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/pulps"
                  className="hover:text-primary-glow transition-colors"
                >
                  Pulps
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/consumables"
                  className="hover:text-primary-glow transition-colors"
                >
                  Consumables
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/festive"
                  className="hover:text-primary-glow transition-colors"
                >
                  Festive Gifts
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background/10 border-secondary-foreground/20"
                />
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary-glow"
                >
                  Subscribe
                </Button>
              </div>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="p-2">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="text-sm space-y-1">
                              <p>📧 info@duria.com</p>
              <p>📞 +60 3-1234 5678</p>
              <p>📍 Kuala Lumpur, Malaysia</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm">
                          <p>&copy; 2024 Duria Exports Sdn Bhd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
