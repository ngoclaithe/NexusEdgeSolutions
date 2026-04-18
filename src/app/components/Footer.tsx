import { Link } from "react-router";
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from "lucide-react";
import logoImg from "../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-midnight-deep text-white relative overflow-hidden">
      {/* Gold decorative line */}
      <div className="gold-line-thick w-full" />

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={logoImg}
                alt="NexusEdge Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <span className="text-lg font-heading font-semibold tracking-wide">
                  NexusEdge
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 -mt-1">
                  Solutions
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Giải pháp OEM/ODM mỹ phẩm & TPCN chuẩn quốc tế. Đồng hành cùng thương hiệu của bạn từ ý tưởng đến sản phẩm hoàn thiện.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-[0.15em] text-gold mb-6">
              Dịch vụ
            </h4>
            <ul className="space-y-3 text-sm">
              {["Gia công OEM", "Phát triển ODM", "R&D và công thức", "Thiết kế bao bì"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/services"
                      className="text-white/50 hover:text-white hover:pl-2 transition-all duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-[0.15em] text-gold mb-6">
              Công ty
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Về chúng tôi", to: "/about" },
                { label: "Sản phẩm", to: "/products" },
                { label: "Quy trình sản xuất", to: "/process" },
                { label: "Liên hệ", to: "/contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/50 hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-[0.15em] text-gold mb-6">
              Liên hệ
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold/70" />
                <span className="text-white/50">
                  Khu công nghiệp Tân Bình, TP.HCM
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="flex-shrink-0 text-gold/70" />
                <span className="text-white/50">+84 28 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="flex-shrink-0 text-gold/70" />
                <span className="text-white/50">info@nexusedge.vn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-line mt-12 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-white/30">
          <p>&copy; 2026 NexusEdge Solutions. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Thiết kế với ❤️ tại Việt Nam</p>
        </div>
      </div>
    </footer>
  );
}
