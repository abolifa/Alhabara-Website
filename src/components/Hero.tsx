import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div
      className="relative -top-24 bg-cover bg-no-repeat bg-center h-[calc(100vh)]"
      style={{ backgroundImage: "url('cover.png')" }}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4 md:px-8">
        {/* Text Content */}
        <motion.div
          className="space-y-6 md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-blue-900">
            ALHABARA PREMIUM
          </h1>
          <p className="text-sm md:text-md lg:text-lg text-muted-foreground">
            Gain an overview of our wide range of high-quality premium products
            for babies, children, and expectant and breast-feeding mothers.
          </p>
          <Button className="px-10 rounded-full bg-amber-400 text-black">
            See more
          </Button>
        </motion.div>

        {/* Product Image with Hover Animation */}
        <motion.div
          className="hidden md:block w-1/2"
          initial={{ opacity: 0, scale: 0.8 }} // Start smaller and invisible
          animate={{ opacity: 1, scale: 1 }} // Animate to full size and visible
          transition={{ duration: 1, delay: 0.5 }} // Slight delay for effect
          whileHover={{ scale: 1.05, rotate: 5 }} // Zoom and rotate on hover
        >
          <img
            src="jmool.png"
            alt="Primalac Product"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Cloud Effect at the Bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-40 w-screen"
        initial={{ y: "100%" }} // Start off-screen at the bottom
        animate={{ y: "0%" }} // Animate upwards into view
        transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }} // Custom easing and delay for a smooth effect
      >
        <img src={"cloud.png"} className="w-full object-contain" alt="cloud" />
      </motion.div>
    </div>
  );
};

export default Hero;
