import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/tent_logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isPastHero, setIsPastHero] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSection = document.querySelector("#home");
      const heroHeight = heroSection?.clientHeight || window.innerHeight;
      
      // Determine if scrolled past initial area
      setIsScrolled(currentScrollY > 50);
      
      // Check if past hero section
      const pastHero = currentScrollY > heroHeight - 100;
      setIsPastHero(pastHero);
      
      // Show/hide logic
      if (currentScrollY < 100) {
        // Always show near top
        setIsVisible(true);
      } else if (pastHero) {
        // Past hero - always show
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down within hero - hide
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -120, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-4 left-0 right-0 z-50 mx-auto w-[92%] max-w-5xl transition-all duration-500 ${
          isScrolled
            ? "bg-tent-dark/95 backdrop-blur-xl shadow-elegant"
            : "bg-tent-dark/70 backdrop-blur-md"
        } rounded-full border border-tent-tan/10`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:shadow-tent-tan/30 transition-shadow duration-300 overflow-hidden">
               <img src={logo} alt="L&C Logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-secondary-foreground text-base tracking-wide block leading-tight">
                Luxury & Cozy
              </span>
              <span className="text-tent-tan/70 text-[10px] uppercase tracking-[0.15em]">
                Tent Exports
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 bg-tent-dark/50 rounded-full px-2 py-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="relative px-4 py-2 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors duration-300 text-sm tracking-wide group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 bg-tent-tan/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919783271001"
              className="group flex items-center gap-2 bg-gradient-to-r from-tent-tan to-tent-gold text-secondary px-5 py-2.5 rounded-full font-medium text-sm shadow-lg hover:shadow-tent-tan/40 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Book Now</span>
              <Sparkles className="w-3.5 h-3.5 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-secondary-foreground p-2 hover:bg-tent-tan/20 rounded-full transition-colors duration-300"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-tent-dark/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-secondary-foreground text-3xl font-serif hover:text-tent-tan transition-colors duration-300"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                href="tel:+919783271001"
                className="flex items-center gap-3 bg-gradient-to-r from-tent-tan to-tent-gold text-secondary px-8 py-4 rounded-full font-medium mt-4 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Book Now</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
