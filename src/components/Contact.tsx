import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 72979 79244",
    href: "tel:+917297979244",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "luxuryandcozytentexport@gmail.com",
    href: "mailto:luxuryandcozytentexport@gmail.com",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Guda road JODHPUR-342001",
    href: "https://www.google.com/maps?q=26.217145919799805,73.05487823486328&z=17&hl=en",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9:00am - 5:00pm",
    href: null,
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-tent-tan uppercase tracking-[0.2em] text-sm mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-secondary-foreground mb-6">
              How to Find Us?
            </h2>
            <p className="text-secondary-foreground/70 mb-10 leading-relaxed">
              Ready to create your dream outdoor experience? Contact us today 
              to discuss your requirements and let us craft the perfect luxury 
              tent solution for you.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-tent-dark/50 p-5 rounded-lg group"
                >
                  <item.icon className="w-6 h-6 text-tent-tan mb-3" />
                  <p className="text-secondary-foreground/60 text-xs uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-foreground font-medium hover:text-tent-tan transition-colors duration-300 text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-secondary-foreground font-medium text-sm">
                      {item.value}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-elegant h-full min-h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=26.217145919799805,73.05487823486328&z=17&hl=en&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Luxury & Cozy Tent Exports Location"
                className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
