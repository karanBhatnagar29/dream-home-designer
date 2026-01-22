import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import swissTentHero from "@/assets/Swiss Luxury Tent/IMG_4382.jpg";
import safariTent3 from "@/assets/safari-tent-3.jpg";
import maharajaTentHero from "@/assets/Maha raja/IMG_8708.jpg";
import conicalTentHero from "@/assets/Three - Conical Tent/1.png";
import desertTentHero from "@/assets/desert-tent-5.jpg";
import heroTent from "@/assets/hero-tent.jpg";

const products = [
  {
    id: 1,
    name: "Modified Safari Tent",
    description: "Classic safari-style luxury tent with elegant scalloped rooflines",
    image: safariTent3,
    link: "/products/modified-safari-tent",
  },
  {
    id: 2,
    name: "Swiss Luxury Tent",
    description: "Premium interiors with Swiss-inspired elegance",
    image: swissTentHero,
    link: "/products/swiss-luxury-tent",
  },
  {
    id: 3,
    name: "Maharaja Tent",
    description: "Royal Indian design with ornate traditional details",
    image: maharajaTentHero,
    link: "/products/maharaja-tent",
  },
  {
    id: 4,
    name: "Three-Conical Tent",
    description: "Distinctive triple-peaked architectural design",
    image: conicalTentHero,
    link: "/products/three-conical-tent",
  },
  {
    id: 5,
    name: "African Desert Tent",
    description: "Designed for harsh desert environments with style",
    image: desertTentHero,
    link: "/products/african-desert-tent",
  },
  {
    id: 6,
    name: "African Luxury Tent",
    description: "Premium canvas construction with modern amenities",
    image: heroTent,
    link: null,
  },
];

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-tent-tan uppercase tracking-[0.2em] text-sm mb-4">
            Our Collection
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Premium Luxury Tents
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our range of meticulously crafted luxury tents, each designed 
            to provide an unforgettable outdoor experience with uncompromising quality.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {product.link ? (
                <Link to={product.link}>
                  <div className="relative overflow-hidden rounded-lg shadow-card">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-tent-dark/90 via-tent-dark/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-xl md:text-2xl text-secondary-foreground mb-2 group-hover:text-tent-tan transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-secondary-foreground/70 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2 text-tent-tan text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                        <span>View Gallery</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="relative overflow-hidden rounded-lg shadow-card">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-tent-dark/90 via-tent-dark/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-xl md:text-2xl text-secondary-foreground mb-2 group-hover:text-tent-tan transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-secondary-foreground/70 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2 text-tent-tan text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-medium tracking-wider uppercase text-sm hover:bg-tent-tan transition-all duration-300 group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
