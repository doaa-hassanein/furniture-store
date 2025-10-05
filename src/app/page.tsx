import React from "react";
import Hero from "./Home/Hero/Hero";
import Shop from "./Home/Blog/Blog";
import Categories from "./Home/Categories/Categories";
import Products from "./Home/Products/Products";
import Sale from "./Home/Sale/Sale";
import Testimonials from "./Home/Testimonal/Testimonal";
import QA from "./Home/QA/QA";
import Footer from "./Home/Footer/Footer";

const page = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Products />
      <Sale />
      <Testimonials />
      <Shop />
      <QA />
       <Footer /> 
    </div>
  );
};

export default page;
