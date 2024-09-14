import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import Products from "@/components/products";
import Values from "@/components/Values";

const Home = () => {
  return (
    <div className="space-y-4">
      <Hero />
      <Products />
      <Brands />
      <Values />
    </div>
  );
};

export default Home;
