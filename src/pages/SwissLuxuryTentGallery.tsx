import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import swissTent1 from "@/assets/swiss-luxury-tent/swiss-luxury-tent-01.jpg";
import swissTent2 from "@/assets/swiss-luxury-tent/swiss-luxury-tent-02.jpg";
import swissTent3 from "@/assets/swiss-luxury-tent/swiss-luxury-tent-03.jpg";
import swissTent4 from "@/assets/swiss-luxury-tent/swiss-luxury-tent-04.jpg";
import swissTent5 from "@/assets/swiss-luxury-tent/swiss-luxury-tent-05.jpg";
import swissTent6 from "@/assets/swiss-luxury-tent/swiss-luxury-tent-06.jpg";
import swissTent7 from "@/assets/swiss-luxury-tent/swiss-luxury-tent-07.AVIF";
import swissTent8 from "@/assets/swiss-luxury-tent/swiss-luxury-tent-08.jpg";
import swissTent9 from "@/assets/swiss-luxury-tent/swiss-luxury-tent-09.jpg";
import swissTent10 from "@/assets/swiss-luxury-tent/swiss-luxury-tent-10.jpg";
import swissTent11 from "@/assets/swiss-luxury-tent/swiss-luxury-tent-11.jpg";

const images = [
  {
    src: swissTent1,
    alt: "Swiss luxury Tent - Side view with scalloped roof",
  },
  { src: swissTent2, alt: "Swiss luxury Tent - Back angle view" },
  { src: swissTent3, alt: "Swiss luxury Tent - Front entrance view" },
  { src: swissTent4, alt: "Swiss luxury Tent - With wooden porch" },
  { src: swissTent5, alt: "Swiss luxury Tent - Traditional style" },
  { src: swissTent6, alt: "Swiss luxury Tent - Row of tents" },
  { src: swissTent7, alt: "Swiss luxury Tent - Additional view 1" },
  { src: swissTent8, alt: "Swiss luxury Tent - Additional view 2" },
  { src: swissTent9, alt: "Swiss luxury Tent - Additional view 3" },
  { src: swissTent10, alt: "Swiss luxury Tent - Additional view 4" },
  { src: swissTent11, alt: "Swiss luxury Tent - Additional view 5" },
];

const ModifiedSafariTentGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? images.length - 1 : selectedImage - 1,
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === images.length - 1 ? 0 : selectedImage + 1,
      );
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      {/* Header */}
      <header className="bg-tent-dark py-6">
        <div className="container mx-auto px-6">
          <Link
            to="/#products"
            className="inline-flex items-center gap-2 text-tent-tan hover:text-secondary-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Products</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-tent-tan uppercase tracking-[0.2em] text-sm mb-4">
              Product Gallery
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Swiss luxury Tent
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A refined take on the classic safari tent design, featuring
              elegant scalloped rooflines, spacious interiors, and versatile
              configurations suitable for luxury resorts and glamping sites.
            </p>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-card">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 text-center">
              Technical Specifications
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-serif text-xl text-tent-tan mb-4">
                  Dimensions
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Standard Length</span>
                    <span className="text-foreground">12m - 20m</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Width</span>
                    <span className="text-foreground">4m - 6m</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Center Height</span>
                    <span className="text-foreground">3.5m - 4m</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Side Height</span>
                    <span className="text-foreground">2m - 2.5m</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-xl text-tent-tan mb-4">
                  Materials
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Roof Canvas</span>
                    <span className="text-foreground">550 GSM Cotton</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Wall Canvas</span>
                    <span className="text-foreground">380 GSM Cotton</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Frame</span>
                    <span className="text-foreground">MS Powder Coated</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Finish</span>
                    <span className="text-foreground">Scalloped Edge</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-medium tracking-wider uppercase text-sm hover:bg-tent-tan transition-all duration-300"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-tent-tan transition-colors z-10"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-tent-tan transition-colors z-10 p-2"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-tent-tan transition-colors z-10 p-2"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModifiedSafariTentGallery;
