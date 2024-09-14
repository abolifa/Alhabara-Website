import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-no-repeat bg-center h-[calc(80vh)]"
      style={{ backgroundImage: "url('cover.png')" }}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4 md:px-8">
        {/* Text Content */}
        <div className="space-y-6 md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900">
            ALHABARA PRODUCTS
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Gain an overview of our wide range of high-quality premium products
            for babies, children, and expectant and breast-feeding mothers.
          </p>
          <Button className="px-10 rounded-full bg-amber-400 text-black">
            See more
          </Button>
        </div>

        {/* Product Image */}
        <div className="hidden md:block w-1/2">
          <img
            src="jmool.png"
            alt="Primalac Product"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Cloud Effect at the Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 w-screen">
        <img src={"cloud.png"} className="w-full object-contain" />
      </div>
    </div>
  );
};

export default Hero;
