import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Innerwear from "./pages/Innerwear";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Clothing from "./pages/Clothing";
import WomenProducts from "./pages/WomenProducts";
import Skincare from "./pages/Skincare";
import DressMaterials from "./pages/DressMaterials";
import Stitching from "./pages/Stitching";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/clothing" element={<Clothing />} />
                  <Route path="/innerwear" element={<Innerwear />} />
          <Route path="/women-products" element={<WomenProducts />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/dress-materials" element={<DressMaterials />} />
          <Route path="/stitching" element={<Stitching />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;