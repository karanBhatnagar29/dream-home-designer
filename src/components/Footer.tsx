import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

const footerLinks = {
  products: [
    "African Safari Tent",
    "Swiss Luxury Tent",
    "Maharaja Tent",
    "Conical Tent",
    "Desert Tent",
  ],
  company: [
    "About Us",
    "Our Story",
    "Careers",
    "Blog",
    "Contact",
  ],
  support: [
    "FAQs",
    "Shipping",
    "Returns",
    "Custom Orders",
    "Maintenance",
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-tent-dark pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 border-b border-secondary-foreground/10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-tent-tan flex items-center justify-center">
                <span className="font-serif text-secondary text-lg font-bold">A&D</span>
              </div>
              <span className="font-serif text-secondary-foreground text-xl">
                Angles & Designs
              </span>
            </div>
            <p className="text-secondary-foreground/60 mb-6 max-w-sm leading-relaxed">
              Leading tent manufacturer in Jodhpur, crafting luxury tents for 
              glamping, events, and exclusive retreats since 2007.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/60 hover:bg-tent-tan hover:text-secondary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif text-secondary-foreground text-lg mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link}>
                  <a
                    href="#products"
                    className="text-secondary-foreground/60 hover:text-tent-tan transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-secondary-foreground text-lg mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#about"
                    className="text-secondary-foreground/60 hover:text-tent-tan transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-secondary-foreground text-lg mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a
                    href="#contact"
                    className="text-secondary-foreground/60 hover:text-tent-tan transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-secondary-foreground/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Angles & Designs Tent Exports. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-secondary-foreground/60 hover:text-tent-tan transition-colors duration-300 text-sm"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
