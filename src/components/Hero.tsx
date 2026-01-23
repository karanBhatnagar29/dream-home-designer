import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import heroImage from "@/assets/hero-tent.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[800px] overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury glamping tent at sunset"
          className="w-full h-full object-cover scale-105"
        />
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-tent-dark/80 via-tent-dark/40 to-tent-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-tent-dark/60 via-transparent to-tent-dark/60" />
        {/* Gold accent glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(38_80%_52%_/_0.08)_0%,_transparent_70%)]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-tent-dark/50 to-transparent z-10" />
      
      {/* Floating accent lines */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute top-1/3 left-0 w-24 md:w-40 h-[1px] bg-gradient-to-r from-transparent via-tent-gold to-transparent"
      />
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute top-1/3 right-0 w-24 md:w-40 h-[1px] bg-gradient-to-l from-transparent via-tent-gold to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 mb-8"
        >
          <Star className="w-4 h-4 text-tent-gold fill-tent-gold" />
          <span className="text-tent-gold uppercase tracking-[0.4em] text-xs font-medium border border-tent-gold/30 px-4 py-2 rounded-full backdrop-blur-sm bg-tent-dark/30">
            Est. 2007 • Jodhpur, India
          </span>
          <Star className="w-4 h-4 text-tent-gold fill-tent-gold" />
        </motion.div>

        {/* Welcome Text - Now More Visible */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/90 uppercase tracking-[0.35em] text-sm md:text-base mb-4 font-medium"
        >
          Welcome to
        </motion.p>

        {/* Brand Name - Prominent Display */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white max-w-5xl leading-[1.1] mb-4"
        >
          <span className="block text-tent-gold font-bold drop-shadow-[0_4px_30px_rgba(212,165,67,0.4)]">
            Luxury & Cozy
          </span>
          <span className="block mt-2 text-white italic font-light">
            Tent Exports
          </span>
        </motion.h1>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-32 h-[2px] bg-gradient-to-r from-transparent via-tent-gold to-transparent my-6"
        />

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-serif text-xl md:text-2xl lg:text-3xl text-tent-tan mb-6"
        >
          Crafting Luxury Outdoor Experiences
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-white/70 max-w-2xl text-base md:text-lg mb-12 leading-relaxed"
        >
          India's premier tent manufacturer, creating bespoke luxury tents for 
          glamping resorts, destination weddings, and exclusive retreats worldwide.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={scrollToProducts}
            className="group relative overflow-hidden bg-gradient-to-r from-tent-gold to-tent-copper text-white px-10 py-4 rounded-full font-semibold tracking-wider uppercase text-sm shadow-[0_10px_40px_-10px_hsl(38_80%_52%_/_0.5)] hover:shadow-[0_15px_50px_-10px_hsl(38_80%_52%_/_0.7)] transition-all duration-500 hover:scale-105"
          >
            <span className="relative z-10">Explore Collection</span>
            <div className="absolute inset-0 bg-gradient-to-r from-tent-copper to-tent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold tracking-wider uppercase text-sm hover:border-tent-gold hover:text-tent-gold backdrop-blur-sm bg-white/5 transition-all duration-300"
          >
            Get Quote
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-12 md:gap-20"
        >
          {[
            { value: "17+", label: "Years Experience" },
            { value: "50+", label: "Countries Served" },
            { value: "1000+", label: "Tents Delivered" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-tent-gold font-serif text-2xl md:text-3xl font-bold">{stat.value}</div>
              <div className="text-white/50 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-tent-gold/80"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>

      {/* Premium Torn Edge Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%201200%20120%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2C120%20L0%2C60%20Q60%2C30%20120%2C50%20T240%2C40%20T360%2C55%20T480%2C35%20T600%2C50%20T720%2C40%20T840%2C55%20T960%2C35%20T1080%2C50%20T1200%2C45%20L1200%2C120%20Z%22%20fill%3D%22%23f7f4f0%22%2F%3E%3C%2Fsvg%3E')] bg-cover bg-center" />
    </section>
  );
};

export default Hero;
