import React from "react";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

interface ProductsGridProps {
  category?: string; // optional category prop
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ category }) => {
  // Filter products if a category is provided, otherwise display all products
  const filteredProducts = category
    ? products.filter((item) => item.category === category)
    : products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {filteredProducts.map((item) => (
        <ProductCard
          key={item.description}
          product={item}
          category={category}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
