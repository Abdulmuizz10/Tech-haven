import React, { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Categories from "./pages/Categories";
import CollectionDetails from "./pages/CollectionDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import { LayoutContext } from "./context/LayoutContext";
import { AuthContext } from "./context/AuthContext";
import ProductCard from "./components/ProductCard";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { Data, categoryData } from "./Data";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const { Products, Collections } = Data;
  const { roots, toggleLayout } = useContext(LayoutContext);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState("");

  const addToCart = (product) => {
    const existingProduct = cartProducts.find((cartProduct) => {
      return cartProduct.id === product.id;
    });

    if (existingProduct) {
      setCartProducts(
        cartProducts.map((cartProduct) => {
          return cartProduct.id === product.id
            ? { ...existingProduct, qty: existingProduct.qty + 1 }
            : cartProduct;
        })
      );
    } else {
      setCartProducts([...cartProducts, { ...product, qty: 1 }]);
      toast(`${product.name} is added to cart`);
    }
  };

  const removeFromCart = (product) => {
    const existingProduct = cartProducts.find((cartProduct) => {
      return cartProduct.id === product.id;
    });

    if (existingProduct.qty === 1) {
      setCartProducts(
        cartProducts.filter((cartProduct) => {
          return cartProduct.id !== product.id;
        })
      );
      toast(`${product.name} is removed from cart`);
    } else {
      setCartProducts(
        cartProducts.map((cartProduct) => {
          return cartProduct.id === product.id
            ? { ...existingProduct, qty: existingProduct.qty - 1 }
            : cartProduct;
        })
      );
    }
  };

  const cancelFromCart = (product) => {
    setCartProducts(
      cartProducts.filter((cartProduct) => {
        return cartProduct.id !== product.id;
      })
    );
    toast(`${product.name} is removed from cart`);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = Products.filter((product) => {
    return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  const filteredData = (Products, selected, query) => {
    let filteredProducts = Products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ id, discount, cover, name, price, reviews, categories }) =>
          categories === selected
        // color === selected ||
        // company === selected ||
        // newPrice === selected ||
        // title === selected
      );
    }

    return filteredProducts.map((product, index) => (
      <ProductCard product={product} addToCart={addToCart} key={index} />
    ));
  };

  const result = filteredData(Products, selected, query);

  return (
    <div className="bg-white">
      <Router>
        {roots && (
          <>
            <ToastContainer />
            <Navbar cartProducts={cartProducts} />
          </>
        )}
        <Routes>
          <Route
            path="/login"
            element={<Login toggleLayout={toggleLayout} />}
          />

          <Route
            path="/sign-up"
            element={<SignUp toggleLayout={toggleLayout} />}
          />
          <Route
            path="/"
            element={
              <Home
                addToCart={addToCart}
                Products={Products}
                Collections={Collections}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop
                result={result}
                setSelected={setSelected}
                query={query}
                active={active}
                setActive={setActive}
                handleInputChange={handleInputChange}
              />
            }
          />
          <Route
            path="/product-details/:id"
            element={
              <ProductDetails Products={Products} addToCart={addToCart} />
            }
          />
          <Route
            path="/shop/product-details/:id"
            element={
              <ProductDetails Products={Products} addToCart={addToCart} />
            }
          />

          {categoryData.map((category, index) => {
            return (
              <Route
                path={`/categories/${category.name}/product-details/:id`}
                element={
                  <ProductDetails Products={Products} addToCart={addToCart} />
                }
                key={index}
              />
            );
          })}

          <Route
            path="/collection-details/:id"
            element={
              <CollectionDetails
                Collections={Collections}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/categories/:id"
            element={<Categories addToCart={addToCart} Products={Products} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartProducts={cartProducts}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cancelFromCart={cancelFromCart}
              />
            }
          />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        {roots && (
          <>
            <Banner />
            <Footer />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
