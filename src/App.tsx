import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import SingleBrand from "./pages/SingleBrand";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "./i18n";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/brands/:id" element={<SingleBrand />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
}

export default App;
