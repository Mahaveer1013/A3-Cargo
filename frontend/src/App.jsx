import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow pt-[64px] ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
