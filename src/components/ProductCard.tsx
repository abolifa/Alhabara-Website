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
import { useNavigate } from "react-router-dom";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  category: string | undefined;
  color?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "cursor-pointer bg-stone-50 relative overflow-hidden",
        product.action ? "text-muted-foreground cursor-not-allowed" : null
      )}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={!product.action ? { scale: 1.05 } : undefined}
      whileTap={!product.action ? { scale: 0.95 } : undefined}
      onClick={() => navigate(`/products/${product.id}`)}
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
          whileHover={!product.action ? { scale: 1.1 } : undefined}
          transition={{ duration: 0.3 }}
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
