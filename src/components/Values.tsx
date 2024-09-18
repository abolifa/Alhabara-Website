import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Hidden below and faded out
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Staggered animation based on index
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Values = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once when in view

  return (
    <div>
      {/* Values Section */}
      <section className="py-32 bg-gray-100" ref={ref}>
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-6xl font-extrabold text-blue-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Integrity */}
            {["Integrity", "Innovation", "Sustainability", "Excellence"].map(
              (value, index) => (
                <motion.div
                  key={value}
                  className="p-6 bg-white rounded-lg shadow-md"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index}
                  variants={cardVariants}
                >
                  <img
                    src={
                      value === "Integrity"
                        ? "gmo.png"
                        : value === "Innovation"
                        ? "cow.png"
                        : value === "Sustainability"
                        ? "leaf.png"
                        : "drop.png"
                    }
                    alt={value}
                  />
                  <h3 className="text-xl font-bold text-gray-800">{value}</h3>
                  <p className="mt-2 text-gray-600">
                    {value === "Integrity"
                      ? "We believe in honesty, trust, and transparency in everything we do."
                      : value === "Innovation"
                      ? "We continuously strive to improve through new ideas and technology."
                      : value === "Sustainability"
                      ? "Our goal is to positively impact the environment for future generations."
                      : "We are committed to delivering the best products and services to our customers."}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Values;
