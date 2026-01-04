import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight } from "lucide-react";

import tentSwiss from "@/assets/tent-swiss.jpg";
import tentDesert from "@/assets/tent-desert.jpg";
import aboutTents from "@/assets/about-tents.jpg";

const blogPosts = [
  {
    id: 1,
    title: "The Best Glamping Tents of 2025: Our Top Picks",
    excerpt: "Discover the most luxurious and innovative glamping tents that are redefining outdoor hospitality.",
    image: aboutTents,
    date: "January 2, 2025",
    category: "Trends",
  },
  {
    id: 2,
    title: "Why Invest in a Swiss Tent: Durability, Functionality, and Style",
    excerpt: "Learn about the unique features that make Swiss tents a premium choice for luxury camping.",
    image: tentSwiss,
    date: "December 28, 2024",
    category: "Guides",
  },
  {
    id: 3,
    title: "Desert Glamping: Creating Unforgettable Experiences",
    excerpt: "Tips and insights for setting up luxury tent accommodations in desert environments.",
    image: tentDesert,
    date: "December 20, 2024",
    category: "Insights",
  },
];

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-24 md:py-32 bg-background">
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
            Latest News
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            What's New in Our Blog?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends in luxury camping, tent design innovations, 
            and tips for creating unforgettable outdoor experiences.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-tent-tan text-secondary px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-tent-tan transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-tent-tan text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
