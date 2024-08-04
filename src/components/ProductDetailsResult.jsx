import React from "react";
import { formatAmount } from "../utils";
import { Link } from "react-router-dom";

const ProductDetailsResult = ({ addToCart, result }) => {
  return (
    <div className="flex justify-between items-center max-lg:flex-col gap-10 w-full">
      <div className="flex-1 flex justify-center items-center w-full h-full bg-slate-200 rounded-lg">
        <img
          src={result.cover}
          alt="product detail"
          width={380}
          height={350}
          className="object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" !capitalize !text-3xl xl:!text-4xl lg:max-w-lg !font-bold info-text !text-black">
          {result.name}
        </h2>
        <div className="flex items-center gap-2 mt-4">
          <p className="info-text">{result.categories}</p>
          <div className="h-5 w-1 bg-slate-100" />
          <p className="info-text ">
            In{" "}
            <span className="info-text !text-sky-400">
              Stock {result?.stock}
            </span>
          </p>
        </div>

        <p className="info-text mt-2">{formatAmount(result.price)}</p>

        <h2 className="!font-bold mt-4 !text-xl info-text !text-black">
          Description
        </h2>
        <p className="mt-2 lg:max-w-lg info-text">
          Experience peak performance with the 15-inch macBook Air featuring the
          revolutionary Apple M2 chip, stunning 15.3-inch Liquid Retina display,
          and Versatile MagSafe 3 charging. Elevate productivity with Touch ID
          and more.
          {result?.description}
        </p>

        <Link
          onClick={() => addToCart(result)}
          className="mt-4 cursor-pointer text-white bg-black hover:bg-gray-900  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailsResult;
