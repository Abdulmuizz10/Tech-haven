import React from "react";
import { Link } from "react-router-dom";
import { watch1 } from "../assets";
const Banner2 = () => {
  return (
    <>
      <section className="max-sm:h-screen md:h-[60vh] lg:h-[70vh] xl:h-[80vh] h-full w-full xl:hidden flex items-center justify-center">
        <div className="container h-full w-full bg-banner-bg bg-center bg-cover bg-fixed flex max-[769px]:flex-col items-center justify-between nav-padding-x max-[769px]:nav-padding-y lg:gap-20">
          <div className="flex flex-col items-start sm:ml-5  flex-1">
            <h1 className="sm:!text-4xl !text-[35px] max-sm:!leading-[50px] !text-white font-semibold  info-text">
              50% Off For Your First Shopping
            </h1>
            <p className="info-text !text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              eaque aut dolorum qui accusamu.
            </p>
            <Link
              to={`/shop`}
              className="cursor-pointer text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Shop now
            </Link>
          </div>
          <div className="flex-1">
            <img
              src={watch1}
              className="object-cover max-w-[300px] w-full"
              alt=""
            />
          </div>{" "}
        </div>
      </section>
      <section className="padding h-screen w-full hidden xl:flex">
        <div className="container h-full w-full bg-hero-bg2  bg-center bg-cover bg-slate-100 flex items-center justify-start rounded-sm">
          <div className="flex flex-col items-start sm:ml-5 lg:ml-10 lg:ml-24 xl:ml-32">
            <h1 className="!text-4xl !text-black font-semibold info-text">
              50% Off For Your First <br /> Shopping
            </h1>
            <p className="info-text !text-black sm:mb-7 mb-5 lg:max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              eaque aut dolorum qui accusamu.
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
    </>
  );
};

export default Banner2;
