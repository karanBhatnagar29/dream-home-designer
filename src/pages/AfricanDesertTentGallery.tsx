import { motion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import desertTent1 from "@/assets/desert-tent-1.jpg";
import desertTent2 from "@/assets/desert-tent-2.jpg";
import desertTent3 from "@/assets/desert-tent-3.jpg";
import desertTent4 from "@/assets/desert-tent-4.jpg";
import desertTent5 from "@/assets/desert-tent-5.jpg";
import desertTent6 from "@/assets/desert-tent-6.jpg";
import desertTent7 from "@/assets/desert-tent-7.jpg";
import desertTent8 from "@/assets/desert-tent-8.jpg";
import desertTent9 from "@/assets/desert-tent-9.jpg";
import desertTent10 from "@/assets/desert-tent-10.jpg";

const galleryImages = [
  { src: desertTent1, alt: "African Desert Tent Exterior View" },
  { src: desertTent2, alt: "African Desert Tent Row" },
  { src: desertTent3, alt: "African Desert Tent Camp" },
  { src: desertTent4, alt: "African Desert Tent Interior - Bedroom" },
  { src: desertTent5, alt: "African Desert Tent Interior - Bed Detail" },
  { src: desertTent6, alt: "African Desert Tent Interior - Twin Beds" },
  { src: desertTent7, alt: "African Desert Tent Interior - Lounge" },
  { src: desertTent8, alt: "African Desert Tent - Washroom Vanity" },
  { src: desertTent9, alt: "African Desert Tent - Bathroom" },
  { src: desertTent10, alt: "African Desert Tent Construction Site" },
];

const AfricanDesertTentGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Header - Hidden or removed since Navbar replaces it, but keeping structure if needed for spacing, though Navbar handles it. 
          Actually, the plan says replace local header. 
          The local header provided a title and back link. Navbar provides navigation. 
          We should keep a sub-header for "Back to Products" if desired, or let Navbar handle it?
          The other galleries kept a "Header" section with "Back to Products". 
          Let's keep the sub-header pattern from other galleries for consistency.
      */}
      <header className="fixed top-20 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border hidden"> 
        {/* Hiding duplicate header logic from previous implementation to match new style or just removing it?
           The other galleries look like:
           <div className="min-h-screen bg-background pt-20">
             <Navbar />
             <header className="bg-tent-dark py-6"> ... Back link ... </header>
           
           African gallery had a fancy motion.header. I will replace it with the standard pattern for consistency if that's implied, 
           or just keep Navbar and add the content below. 
           Let's match the other galleries: 
           - Container pt-20
           - Navbar
           - Header with sub-nav
        */}
      </header> 
      
      {/* Recreating the sub-header pattern to match others or adapting existing one. 
          The existing one was fixed top.
          Let's verify what I'm replacing. lines 36-54.
      */}
      
      <header className="pt-24 pb-6 bg-background border-b border-border">
         <div className="container mx-auto px-6 flex items-center justify-between">
          <Link
            to="/#products"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Products</span>
          </Link>
          {/* Title was in header before, maybe keep it there? */}
         </div>
      </header>

      {/* Gallery Content */}
      <main className="pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-tent-tan uppercase tracking-[0.2em] text-sm mb-4">
              Gallery
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              African Desert Tent
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Designed for harsh desert environments with style. Our African Desert Tents 
              combine durability with luxury, perfect for desert camps and glamping resorts.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-card aspect-square"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 bg-card rounded-2xl p-8 md:p-12"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Features & Specifications
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-tent-tan font-semibold mb-3">Materials</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Premium waterproof canvas</li>
                  <li>• UV-resistant outer coating</li>
                  <li>• Heavy-duty steel frame</li>
                  <li>• Traditional block-print interior lining</li>
                </ul>
              </div>
              <div>
                <h4 className="text-tent-tan font-semibold mb-3">Amenities</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Attached bathroom with modern fixtures</li>
                  <li>• Air conditioning compatible</li>
                  <li>• Wooden furniture set included</li>
                  <li>• Traditional carpet flooring</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-medium tracking-wider uppercase text-sm hover:bg-tent-tan transition-all duration-300"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-0 right-0 text-center text-white/70">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AfricanDesertTentGallery;
