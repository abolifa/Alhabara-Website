import React, { useRef } from "react";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import { motion, useInView } from "framer-motion"; // Import Framer Motion and useInView

interface ProductsGridProps {
  category?: string; // optional category prop
}

// Animation variants for product cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Start hidden and slightly below
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Stagger animation based on index
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const ProductsGrid: React.FC<ProductsGridProps> = ({ category }) => {
  const ref = useRef(null); // Create a ref for the grid
  const isInView = useInView(ref, { once: true }); // Trigger animation once when in view

  // Filter products if a category is provided, otherwise display all products
  const filteredProducts = category
    ? products.filter((item) => item.category === category)
    : products;

  return (
    <motion.div
      ref={ref} // Attach the ref to the grid container
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
      initial="hidden" // Initial state for all children
      animate={isInView ? "visible" : "hidden"} // Animate only when in view
      variants={{
        visible: { transition: { staggerChildren: 0.1 } }, // Stagger children
      }}
    >
      {filteredProducts.map((item, index) => (
        <motion.div
          key={item.description}
          custom={index} // Pass index for stagger effect
          variants={cardVariants} // Use the animation variants
        >
          <ProductCard product={item} category={category} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductsGrid;
