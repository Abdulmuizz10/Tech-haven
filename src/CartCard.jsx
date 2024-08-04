import React from "react";
import { BiMinus, BiTrash } from "react-icons/bi";
import { PiPlus } from "react-icons/pi";
import { formatAmount } from "../utils";

const CartCard = ({ product, addToCart, removeFromCart, cancelFromCart }) => {
  const { id, discount, cover, name, price, reviews, categories } = product;
  return (
    <div className="w-full shadow-lg  border border-gray-200 hover:shadow-xl transition-shadow rounded-md flex flex-col justify-evenly py-3 px-5">
      <div className="w-full flex justify-between items-center mb-5">
        <p className="info-text">Product</p>
        <p className="text-left -ml-12 info-text">Quantity</p>
        <p className="info-text">Subtotal</p>
      </div>

      <div className="w-full flex items-center justify-between relative gap-5">
        <div className=" bg-slate-100/100 flex items-center justify-center rounded-lg">
          <img
            src={cover}
            alt=""
            className="sm:h-[70px] sm:w-[70px] w-12 h-12"
          />
        </div>

        <div className="flex items-center gap-5 justify-center py-1 px-2 border-black border-2 rounded-lg">
          <button className="text-2xl" onClick={() => removeFromCart(product)}>
            <BiMinus />
          </button>
          <p className="info-text mt-1">{product.qty}</p>
          <button className="text-2xl" onClick={() => addToCart(product)}>
            <PiPlus />
          </button>
        </div>

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
  );
};

export default CartCard;
