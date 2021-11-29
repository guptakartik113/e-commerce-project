import "./Cart.css";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function Cart() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#EEEFE9" }}>
        <div className="row" style={{ margin: "30px" }}>
          <div className="col">
            <Link to="/shoppingCart" style={{ color: "#3D6EAF" }}>
              <h3 style={{ color: "black" }}>1. Shopping Cart</h3>
            </Link>
          </div>
          <div className="col">
            <Link to="/shoppingDetails" style={{ color: "#3D6EAF" }}>
              <h3 style={{ color: "black" }}>2. Shopping Details</h3>
            </Link>
          </div>
          <div className="col">
            <Link to="/paymentOption" style={{ color: "#3D6EAF" }}>
              <h3 style={{ color: "black" }}>3. Payment option</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
