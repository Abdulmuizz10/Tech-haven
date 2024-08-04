import React from "react";
import { BiMinus, BiTrash } from "react-icons/bi";
import { PiPlus } from "react-icons/pi";
import { formatAmount } from "../utils";

const CartCard = ({ product, addToCart, removeFromCart, cancelFromCart }) => {
  return (
    <div className="w-full shadow-lg  border border-gray-200 hover:shadow-xl transition-shadow rounded-md flex flex-col justify-evenly py-3 px-5">
      <div className="w-full flex items-center justify-between relative sm:gap-5">
        <div className="flex flex-col items-start justify-center gap-5">
          <p className="info-text">Product</p>
          <div className="flex gap-2 items-center">
            <div className=" bg-slate-100/100 flex items-center justify-center rounded-lg">
              <img
                src={product.cover}
                alt="product image"
                className="sm:h-[70px] sm:w-[70px] w-12 h-12"
              />
            </div>
            <div className="w-[120px] hidden sm:flex flex-col">
              <p className="whitespace-nowrap overflow-hidden text-ellipsis info-text max-sm:hidden">
                {product.name}
              </p>
              <p className=" whitespace-nowrap overflow-hidden text-ellipsis info-text hidden sm:flex">
                {formatAmount(product.price)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-5">
          <p className="text-left info-text md:-mt-6">Quantity</p>
          <div className="flex items-center gap-2 sm:gap-5 justify-center py-1 px-2 border-black border-2 rounded-lg">
            <button
              className="sm:text-2xl"
              onClick={() => removeFromCart(product)}
            >
              <BiMinus />
            </button>
            <p className="info-text mt-1">{product.qty}</p>
            <button className="sm:text-2xl" onClick={() => addToCart(product)}>
              <PiPlus />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-end justify-center gap-5">
          <p className="info-text text-right md:-mt-6 -mt-3">Subtotal</p>
          <div className="flex items-center justify-end">
            <p className="info-text">
              {formatAmount(product.price * product.qty)}
            </p>
            <button
              onClick={() => cancelFromCart(product)}
              className="hidden md:flex"
            >
              <BiTrash className="text-2xl ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
