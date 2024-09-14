import { Brand, brands } from "@/lib/products";
import React from "react";

const Brands: React.FC = () => {
  return (
    <div className="py-32">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-extrabold text-blue-900 mb-10">
          Our Brands
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand: Brand) => (
            <div
              key={brand.name}
              className="group relative p-4 overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Logo Image */}
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-contain transition-transform transform group-hover:scale-110"
              />
              {/* Overlay with Brand Name */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-bold">
                  {brand.name}
                </span>
              </div>

              {brand.new === true && (
                <div className="absolute top-6 -left-12 px-20 py-3 font-bold bg-red-500 text-white -rotate-45">
                  New
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
