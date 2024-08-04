import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="padding h-screen w-full">
      <div className="container h-full w-full bg-hero-bg  bg-center bg-cover bg-slate-100 flex items-center justify-start rounded-sm">
        <div className="flex flex-col items-start sm:ml-5 lg:ml-10 lg:ml-24 xl:ml-32">
          <h1 className="!text-4xl !text-black font-semibold info-text">
            Unleash Innovation <br /> in Every Byte.
          </h1>
          <p className="info-text !text-black sm:mb-7 mb-5">
            Explore a World of Cutting Edge-Tech
          </p>
          <Link
            to={`/shop`}
            className="cursor-pointer text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Shop now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
