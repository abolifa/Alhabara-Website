import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
  return (
    <Card
      className={cn(
        "cursor-pointer bg-stone-50 relative overflow-hidden",
        product.action ? "text-muted-foreground cursor-not-allowed" : null
      )}
    >
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent
        className={cn(
          !product.action ? "transition-all ease-in-out hover:scale-105" : null
        )}
      >
        <img src={product.image} className="w-full h-full object-contain" />
      </CardContent>
      <CardFooter>
        <p className="text-center w-full text-sm text-muted-foreground">
          {product.age}
        </p>
      </CardFooter>

      <div className="absolute top-10 -left-10 bg-red-600 text-white px-8 py-0 -rotate-45">
        {product?.action}
      </div>
    </Card>
  );
};

export default ProductCard;
