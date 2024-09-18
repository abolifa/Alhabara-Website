import React, { useRef } from "react";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";

export type Product = {
  name: string;
  description: string;
  category: string;
  age: string;
  image: string;
  action?: string;
};

interface ProductCardProps {
  product: Product;
  category: string | undefined;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const ref = useRef(null); // Create a reference for the ProductCard
  const isInView = useInView(ref, { once: true }); // Trigger animation once when in view

  return (
    <motion.div
      ref={ref} // Attach the ref to the component
      className={cn(
        "cursor-pointer bg-stone-50 relative overflow-hidden",
        product.action ? "text-muted-foreground cursor-not-allowed" : null
      )}
      initial={{ opacity: 0, y: 50 }} // Start hidden and below
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Only animate when in view
      transition={{ duration: 0.4, ease: "easeOut" }} // Smooth transition
      whileHover={!product.action ? { scale: 1.05 } : undefined} // Scale up on hover (if not disabled)
      whileTap={!product.action ? { scale: 0.95 } : undefined} // Scale down on click (if not disabled)
    >
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>

      <CardContent
        className={cn(!product.action ? "transition-all ease-in-out" : null)}
      >
        {/* Animate image with Framer Motion */}
        <motion.img
          src={product.image}
          className="w-full h-full object-contain"
          whileHover={!product.action ? { scale: 1.1 } : undefined} // Image zoom on hover (if not disabled)
          transition={{ duration: 0.3 }} // Smooth transition for zoom
        />
      </CardContent>

      <CardFooter>
        <p className="text-center w-full text-sm text-muted-foreground">
          {product.age}
        </p>
      </CardFooter>
    </motion.div>
  );
};

export default ProductCard;
