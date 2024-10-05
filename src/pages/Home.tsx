import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import Products from "@/components/products";
import Values from "@/components/Values";
import AboutUs from "./About";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Brands />
      <AboutUs />
      <Values />
    </div>
  );
};

export default Home;
