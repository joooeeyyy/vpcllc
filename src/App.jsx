import React, { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import {
  MenuContext,
  ServicesContext,
  SelectedContext,
} from "./helper/Context";
import categories from "./constants";

const App = () => {
  const [categoriesUse, setCategory] = useState(categories.at(0).getList());
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Category");

  return (
    <ServicesContext.Provider value={{ categoriesUse, setCategory }}>
      <MenuContext.Provider value={{ open, setOpen }}>
        <SelectedContext.Provider value={{ selected, setSelected }}>
          <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
          </>
        </SelectedContext.Provider>
      </MenuContext.Provider>
    </ServicesContext.Provider>
  );
};

export default App;
