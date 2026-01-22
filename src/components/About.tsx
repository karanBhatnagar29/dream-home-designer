import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Globe, Sparkles } from "lucide-react";
import aboutImage from "@/assets/about-tents.jpg";

const stats = [
  { icon: Award, value: "17+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Globe, value: "30+", label: "Countries Served" },
  { icon: Sparkles, value: "10+", label: "Tent Styles" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-elegant">
              <img
                src={aboutImage}
                alt="Luxury tent resort aerial view"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tent-dark/30 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 md:right-8 bg-tent-tan text-secondary px-6 py-4 rounded-lg shadow-card"
            >
              <p className="text-3xl font-serif font-bold">17+</p>
              <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-tent-tan uppercase tracking-[0.2em] text-sm mb-4">
              About Our Company
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Leading Tent Manufacturer
              <span className="block text-tent-tan italic">in Jodhpur</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Luxury & Cozy Tent Exports has been catering to the varied requirements 
              of different industries for the past 17 years. We provide a variety of over
              10 unique types of luxury tents, made using the finest materials and designed 
              with meticulous attention to detail.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Each tent is carefully crafted to redefine the concept of outdoor events, 
              glamorous camping experiences, and exclusive retreats. We use the latest 
              designs and patterns that are more demandable in the market.
            </p>

            <a
              href="#contact"
              className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-medium tracking-wider uppercase text-sm hover:bg-tent-tan hover:text-secondary transition-all duration-300"
            >
              Learn More About Us
            </a>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-card p-6 rounded-lg text-center shadow-card hover:shadow-elegant transition-shadow duration-300"
            >
              <stat.icon className="w-8 h-8 text-tent-tan mx-auto mb-4" />
              <p className="text-3xl font-serif font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
