import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-tent.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury glamping tent at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tent-dark/60 via-tent-dark/30 to-tent-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-tent-tan uppercase tracking-[0.3em] text-sm md:text-base mb-6"
        >
          Welcome to Luxury & Cozy Tent Exports
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-secondary-foreground max-w-4xl leading-tight mb-8"
        >
          Crafting Luxury
          <span className="block italic text-tent-tan">Outdoor Experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-secondary-foreground/80 max-w-xl text-base md:text-lg mb-10"
        >
          Leading tent manufacturer in Jodhpur, crafting premium tents for glamping, 
          events, and exclusive retreats since 2007.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={scrollToProducts}
          className="group bg-tent-tan/20 border border-tent-tan text-secondary-foreground px-8 py-4 rounded-full font-medium tracking-wider uppercase text-sm hover:bg-tent-tan hover:text-secondary transition-all duration-300"
        >
          Explore Our Collection
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.2 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-secondary-foreground/60"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>

      {/* Torn Edge Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%201200%20120%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2C120%20L0%2C60%20Q60%2C30%20120%2C50%20T240%2C40%20T360%2C55%20T480%2C35%20T600%2C50%20T720%2C40%20T840%2C55%20T960%2C35%20T1080%2C50%20T1200%2C45%20L1200%2C120%20Z%22%20fill%3D%22%23f5f0ea%22%2F%3E%3C%2Fsvg%3E')] bg-cover bg-center" />
    </section>
  );
};

export default Hero;
