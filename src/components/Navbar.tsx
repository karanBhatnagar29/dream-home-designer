import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 ${
          isScrolled
            ? "bg-tent-dark/95 backdrop-blur-md shadow-elegant"
            : "bg-tent-dark/80 backdrop-blur-sm"
        } rounded-full px-6 py-3`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-tent-tan flex items-center justify-center">
              <span className="font-serif text-secondary-foreground text-lg font-bold">A&D</span>
            </div>
            <span className="hidden sm:block font-serif text-secondary-foreground text-lg tracking-wide">
              Angles & Designs
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-secondary-foreground/80 hover:text-tent-tan transition-colors duration-300 text-sm tracking-wider uppercase font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919783271001"
              className="flex items-center gap-2 bg-tent-tan text-secondary px-5 py-2.5 rounded-full font-medium text-sm hover:bg-tent-gold transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-secondary-foreground p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-tent-dark pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-secondary-foreground text-2xl font-serif text-left hover:text-tent-tan transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              <a
                href="tel:+919783271001"
                className="flex items-center justify-center gap-2 bg-tent-tan text-secondary px-6 py-4 rounded-full font-medium mt-6"
              >
                <Phone className="w-5 h-5" />
                <span>Book Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
