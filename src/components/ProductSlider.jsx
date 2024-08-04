import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiArrowBack } from "react-icons/bi";
import ProductCard from "./ProductCard";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="bg-black w-12 h-12 rounded-full flex items-center justify-center -right-6 top-[45%] absolute z-10 cursor-pointer"
      onClick={onClick}
    >
      <button className="next rotate-180">
        <BiArrowBack className="text-white" />
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="bg-black w-12 h-12 rounded-full flex items-center justify-center -left-6 top-[45%] absolute z-10 cursor-pointer"
      onClick={onClick}
    >
      <button className="prev">
        <BiArrowBack className="text-white" />
      </button>
    </div>
  );
};

const ProductSlider = ({ addToCart, Products, Collections }) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {Products &&
        Products.map((product, index) => {
          return (
            <ProductCard product={product} addToCart={addToCart} key={index} />
          );
        })}
      {Collections &&
        Collections.map((collection, index) => {
          return (
            <ProductCard
              collection={collection}
              addToCart={addToCart}
              key={index}
            />
          );
        })}
    </Slider>
  );
};

export default ProductSlider;
