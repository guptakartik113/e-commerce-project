import "./ShoppingCart.css";
import { BiRupee } from "react-icons/bi";
import { TiPlusOutline } from "react-icons/ti";
import { TiMinusOutline } from "react-icons/ti";
import Cart from "./Cart";
function ShoppingCart() {
  var data = 0;

  //printing default value of data that is 0 in h2 tag

  //creation of increment function
  function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
  }
  //creation of decrement function
  function decrement() {
    data = data - 1;
    document.getElementById("counting").innerText = data;
  }
  return (
    <>
      <Cart />
      <div
        className="container-fluid"
        style={{ marginTop: "20px", border: "1px solid black" }}
      >
        <div className="row">
          <div className="col-sm-7">
            <br />
            <div style={{ marginLeft: "50px", marginRight: "50px" }}>
              <h3>Payment Option</h3>
              <hr />
              <br />
              <div className="aa row">
                <div className=" col-lg-4">
                  <img
                    className="image"
                    src="https://media.istockphoto.com/photos/watch-picture-id136631027"
                    alt="products"
                    style={{ maxWidth: "100%", height: "100%" }}
                  ></img>
                </div>
                <div
                  className="col-lg-4"
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h3>Noise model 2</h3>
                    <h3>
                      <BiRupee style={{ width: "20px" }} />
                      209 2
                    </h3>
                  </div>
                </div>
                <div
                  className="col-lg-4"
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    onClick={increment}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TiPlusOutline />
                  </button>
                  <h2 id="counting">0</h2>
                  <button
                    onClick={decrement}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TiMinusOutline />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <br />
            <div style={{ marginLeft: "50px", marginRight: "50px" }}>
              <h3>Summary</h3>
              <hr />
              <input
                className="ss"
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter Coupon Code"
              ></input>
              <div className="abc">
                <div>
                  <p>Subtotal</p>
                </div>
                <div>
                  <p>209 2</p>
                </div>
              </div>
              <div className="abc">
                <div>
                  <p>Discount</p>
                </div>
                <div>
                  <p>0</p>
                </div>
              </div>
              <div className="abc">
                <div>
                  <p>Taxes</p>
                </div>
                <div>
                  <p>0</p>
                </div>
              </div>
              <hr />
              <div className="abc">
                <div>
                  <p>Total</p>
                </div>
                <div>
                  <p>2092</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ShoppingCart;
