import React, { useEffect } from "react";
import CartProductsSection from "../sections/cart-sections/CartProductsSection";

const Cart = ({ cartProducts, addToCart, removeFromCart, cancelFromCart }) => {
  const totalPrice = cartProducts.reduce(
    (price, items) => price + items.price * items.qty,
    0
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="max-sm:py-24">
      <CartProductsSection
        cartProducts={cartProducts}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cancelFromCart={cancelFromCart}
        totalPrice={totalPrice}
      />
    </main>
  );
};

export default Cart;
