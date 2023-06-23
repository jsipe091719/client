import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Feature from "./Feature";
import Product from "./Product";
import Footer from "./Footer";
import Job from "./Job";
import C1 from "./C1";
import C2 from "./C2";
import C3 from "./C3";
import C4 from "./C4";
import ContactUs from "./ContactUs";
import WSPGallery from "./WSPGallery";

const Display = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <C1 />
      <C2 />
      <C3 />
      <C4 />
      <Feature />
      <Product />
      <Job />
      <ContactUs />
      <WSPGallery />
      <Footer />
    </div>
  );
};

export default Display;
