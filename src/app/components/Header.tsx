import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-semibold">VK</span>
            </div>
            <span className="text-xl font-semibold text-primary">VietKorea OEM</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              Về chúng tôi
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">
              Dịch vụ
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">
              Sản phẩm
            </Link>
            <Link to="/process" className="text-foreground hover:text-primary transition-colors">
              Quy trình
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Liên hệ
            </Link>
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Nhận tư vấn
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <Link
              to="/"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              to="/about"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Về chúng tôi
            </Link>
            <Link
              to="/services"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Dịch vụ
            </Link>
            <Link
              to="/products"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sản phẩm
            </Link>
            <Link
              to="/process"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Quy trình
            </Link>
            <Link
              to="/contact"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Liên hệ
            </Link>
            <Link
              to="/contact"
              className="block bg-primary text-primary-foreground px-6 py-2 rounded-lg text-center hover:bg-primary/90 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nhận tư vấn
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
