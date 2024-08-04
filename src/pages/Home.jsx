import React, { useEffect, useContext } from "react";
import ProductSection from "../sections/home-sections/ProductSection";
import CollectionSection from "../sections/home-sections/CollectionSection";
import CategoriesSection from "../sections/categories-sections/CategoriesSection";
import HeroSection from "../sections/home-sections/HeroSection";
import Banner2 from "../components/Banner2";
import { LayoutContext } from "../context/LayoutContext";

const Home = ({ addToCart, Products, Collections }) => {
  const { toggleLayout } = useContext(LayoutContext);
  useEffect(() => {
    toggleLayout(true);
  }, []);

  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ProductSection addToCart={addToCart} Products={Products} />
      <Banner2 />
      <CollectionSection addToCart={addToCart} Collections={Collections} />
    </main>
  );
};

export default Home;
