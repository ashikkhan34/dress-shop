import React from "react";
import Hero from "./Components/Hero";
import Category from "./Components/Category";
import { Products } from "./Components/Products/Products";
import Hero_tow from "./Components/Hero_tow";
import Offer from "./Components/Offer";
import TrendingDress from "./Components/TrendingDress";
import AboutShop from "./Components/AboutShop";
import Accordion from "./Components/Accordion";

const page = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Products />
      <Hero_tow />
      <Offer />
      <TrendingDress />
      <AboutShop />
      <Accordion />
    </div>
  );
};

export default page;
