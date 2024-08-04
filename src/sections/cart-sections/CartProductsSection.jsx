import React, { useContext } from "react";
import CartCard from "../../components/CartCard";
import { formatAmount } from "../../utils";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const CartProductsSection = ({
  cartProducts,
  addToCart,
  removeFromCart,
  cancelFromCart,
  totalPrice,
}) => {
  const { newUser, loginUser } = useContext(AuthContext);

  return (
    <section className="padding">
      <div className="container">
        <div className="container">
          <div className="mb-5">
            <h2 className="head-text">Shopping Cart</h2>
          </div>
          <div className="xl:flex justify-evenly gap-5">
            <div className="flex flex-col gap-5 max-w-3xl lg:max-w-4xl w-full max-xl:mb-20">
              {cartProducts.length === 0 && (
                <div className="flex flex-col justify-center items-center gap-5">
                  <h1 className=" info-text !text-2xl text-center ">
                    No Products are added in Cart
                  </h1>
                  <Link
                    to="/shop"
                    className="cursor-pointer !text-white bg-black hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center info-text w-fit"
                  >
                    Go to Shop
                  </Link>
                </div>
              )}
              {cartProducts.map((product, index) => {
                return (
                  <CartCard
                    product={product}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    cancelFromCart={cancelFromCart}
                    key={index}
                  />
                );
              })}
            </div>
            <div className="pt-2 pb-2 px-5   border border-slate-gray bg-white flex flex-col items-start justify-center gap-4 rounded-md shadow-lg hover:shadow-xl h-full xl:w-[400px]">
              <div className="flex items-center justify-between gap-5 w-full">
                <p className="info-text">Delivery charge: </p>
                <p className="info-text">
                  {totalPrice < 20000
                    ? formatAmount(totalPrice / 1000)
                    : "Free"}
                </p>
              </div>

              <div className="flex items-center justify-between gap-5 w-full">
                <p className="info-text">Grand Total: </p>
                <p className="info-text">{formatAmount(totalPrice)}</p>
              </div>

              {newUser || loginUser ? (
                <Link
                  to="/checkout"
                  className="!text-white info-text !text-sm bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 w-full py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  CHECKOUT
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="!text-white info-text !text-sm bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 w-full py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign In to Checkout
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartProductsSection;
