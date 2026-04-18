import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../assets/logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Trang chủ" },
    { to: "/about", label: "Về chúng tôi" },
    { to: "/services", label: "Dịch vụ" },
    { to: "/products", label: "Sản phẩm" },
    { to: "/process", label: "Quy trình" },
    { to: "/contact", label: "Liên hệ" },
  ];

  // When not scrolled: white text on transparent bg (over dark hero)
  // When scrolled: dark text on glass white bg
  const textColor = scrolled ? "text-foreground" : "text-white";
  const textMuted = scrolled ? "text-foreground/70" : "text-white/80";
  const activeColor = "text-gold";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-gradient-to-b from-black/30 to-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={logoImg}
              alt="NexusEdge Logo"
              className="w-10 h-10 rounded-lg object-cover shadow-md"
            />
            <div className="flex flex-col">
              <span className={`text-lg font-heading font-semibold tracking-wide transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"} group-hover:text-gold`}>
                NexusEdge
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] -mt-1 transition-colors duration-300 ${scrolled ? "text-muted-foreground" : "text-white/50"}`}>
                Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-sm uppercase tracking-[0.08em] transition-colors duration-300 group ${
                  location.pathname === link.to
                    ? activeColor
                    : `${textMuted} hover:${textColor}`
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gold-gradient transition-all duration-300 ${
                    location.pathname === link.to
                      ? "w-6"
                      : "w-0 group-hover:w-6"
                  }`}
                />
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 bg-gold-shimmer text-midnight px-6 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
            >
              Nhận tư vấn
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-white"} hover:text-gold`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className={`py-6 space-y-1 border-t ${scrolled ? "border-border/50 bg-white" : "border-white/10 bg-midnight-deep/95 backdrop-blur-xl rounded-b-2xl"}`}>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      className={`block py-3 px-4 text-sm uppercase tracking-[0.08em] rounded-lg transition-all ${
                        location.pathname === link.to
                          ? "text-gold bg-gold/5"
                          : scrolled
                            ? "text-foreground/80 hover:text-foreground hover:bg-secondary"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-4 px-4"
                >
                  <Link
                    to="/contact"
                    className="block bg-gold-shimmer text-midnight px-6 py-3 rounded-lg text-center text-sm font-semibold uppercase tracking-wider"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nhận tư vấn
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
