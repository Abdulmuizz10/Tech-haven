import React from "react";
import { bannerTexts } from "../Data";

const Banner = () => {
  return (
    <section className="padding">
      <div className="container">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:place-items-center place-content-center">
          {bannerTexts.map((text, index) => (
            <div className="flex flex-col items-start" key={index}>
              <div className="text-3xl mb-5">{text.icon}</div>
              <h2 className="font-bold text-2xl mb-1">{text.title}</h2>
              <p className="info-text !text-base">{text.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
