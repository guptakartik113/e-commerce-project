import "jquery";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import { Routes } from "react-router";
import Home from "./components/home/Home";

import ProductDetails from "./components/details/ProductDetails";
import Error from "./components/404/Error";
import Cart from "./components/cart/Cart";
import PaymentOption from "./components/cart/PaymentOption";
import ShoppingDetails from "./components/cart/ShoppingDetails";
import ShoppingCart from "./components/cart/ShoppingCart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/productDetails/:id"
            exact
            element={<ProductDetails />}
          />
          <Route path="/paymentOption" exact element={<PaymentOption />} />
          <Route path="/shoppingCart" exact element={<ShoppingCart />} />
          <Route path="/shoppingDetails" exact element={<ShoppingDetails />} />
          <Route path="/paymentOption" exact element={<PaymentOption />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
