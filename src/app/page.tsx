import React from "react";
import Hero from "./Components/Hero";
import Category from "./Components/Category";
import { Products } from "./Components/Products/Products";
import Hero_tow from "./Components/Hero_tow";
import Offer from "./Components/Offer";

const page = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Products />
      <Hero_tow />
      <Offer />
    </div>
  );
};

export default page;
