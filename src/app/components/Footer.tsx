import { Link } from "react-router";
import { MapPin, Phone, Mail, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary text-lg font-semibold">VK</span>
              </div>
              <span className="text-xl font-semibold">VietKorea OEM</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Giải pháp OEM/ODM mỹ phẩm & TPCN chuẩn quốc tế
            </p>
          </div>

          <div>
            <h4 className="mb-4">Dịch vụ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Gia công OEM
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Phát triển ODM
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-white transition-colors">
                  R&D và công thức
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Thiết kế bao bì
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Công ty</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Quy trình sản xuất
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Liên hệ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Khu công nghiệp Tân Bình, TP.HCM
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-primary-foreground/80">+84 28 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-primary-foreground/80">info@vietkorea.vn</span>
              </li>
            </ul>
            <div className="flex items-center space-x-4 mt-4">
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2026 VietKorea OEM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
