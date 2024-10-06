import { Brand, brands } from "@/lib/products";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import useInView and motion
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Brands: React.FC = () => {
  const ref = useRef(null); // Create a reference for the Brands component
  const isInView = useInView(ref, { once: true }); // Trigger animation once when in view
  const navigate = useNavigate();
  const { t } = useTranslation();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Hidden state
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

  return (
    <div className="py-32" ref={ref} id="brands">
      {" "}
      {/* Attach ref to the component */}
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-extrabold text-blue-900 mb-10">
          {t("Our Brands")}
        </h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Trigger animation only if in view
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }, // Stagger the children
          }}
        >
          {brands.map((brand: Brand, index) => (
            <motion.div
              key={brand.name}
              custom={index}
              variants={cardVariants}
              className="group relative p-4 overflow-hidden cursor-pointer bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate(`/brands/${brand.id}`)} // Navigate to Brand Page
            >
              {/* Logo Image */}
              <motion.img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-contain transition-transform transform group-hover:scale-110"
                whileHover={{ scale: 1.1 }} // Scale up the image on hover
                transition={{ duration: 0.3 }}
              />

              {/* Overlay with Brand Name */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-bold">
                  {brand.name}
                </span>
              </div>

              {/* New Label */}
              {brand.new === true && (
                <motion.div
                  className="absolute top-6 -left-12 px-20 py-3 font-bold bg-red-500 text-white rounded-r-full"
                  initial={{ x: -50 }} // Start off-screen
                  animate={{ x: 0 }} // Slide into view
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  New
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Brands;
