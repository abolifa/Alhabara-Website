import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import Products from "@/components/products";
import Values from "@/components/Values";
import AboutUs from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Brands />
      <AboutUs />
      <Values />
      <Contact />
    </>
  );
};

export default Home;
