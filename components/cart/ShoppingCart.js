import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { useState } from "react";
import Cart from "./Cart";
import "./ShoppingCart.css";
function ShoppingCart() {
  // // const [userError, setUserError] = useState(false);
  const [cvvError, setCvvError] = useState(false);
  const [yearError, setYearError] = useState(false);

  function submitHandle(e) {
    e.preventDefault();
  }
  // function nameHandle(e) {
  //   let name = e.target.value;
  //   if (name == null || name == "") {
  //     setUserError(true);
  //   } else {
  //     setUserError(false);
  //   }
  // }
  function cvvHandle(e) {
    let cvv = e.target.value;

    if (cvv.length == 3) {
      setCvvError(false);
    } else {
      setCvvError(true);
    }
  }
  function yearHandle(e) {
    let year = e.target.value;
    if (year.length == 4) {
      setYearError(false);
    } else {
      setYearError(true);
    }
  }
  return (
    <>
      <Cart />
      <div
        className="container-fluid"
        style={{ marginTop: "20px", border: "1px solid black" }}
      >
        <div className="row">
          <div className="col-md-7">
            <br />
            <div style={{ marginLeft: "50px", marginRight: "50px" }}>
              <h3>Payment Method</h3>
              <hr />

              <div class="col-50">
                <form onSubmit={submitHandle}>
                  <label for="fname">
                    <BsFillCreditCard2BackFill />
                  </label>

                  <label htmlFor="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                    required
                  />
                  <label htmlFor="cnumber">Credit card number</label>
                  <input
                    type="text"
                    id="cnumber"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                    required
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                    pattern="[1-9]{1}[0-9]{9}"
                    required
                  />
                  <div class="row">
                    <div class="col-50">
                      <label htmlFor="expyear">Exp Year</label>
                      {yearError ? (
                        <span style={{ color: "red" }}>
                          four numbers allowed
                        </span>
                      ) : (
                        ""
                      )}
                      <input
                        onChange={yearHandle}
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2018"
                        pattern="[1-9]{1}[0-9]{9}"
                        required
                      />
                    </div>
                    <div class="col-50">
                      <label htmlFor="cvv">CVV</label>
                      {cvvError ? (
                        <span style={{ color: "red" }}>
                          three numbers allowed
                        </span>
                      ) : (
                        ""
                      )}
                      <input
                        onChange={cvvHandle}
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                        pattern="[1-9]{1}[0-9]{9}"
                        required
                      />
                    </div>
                    <input type="submit" value="Submit"></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <br />
            <div style={{ marginLeft: "50px", marginRight: "50px" }}>
              <h3>Summary</h3>
              <hr />
              <div className="row">
                <div className="col-5">
                  <img
                    className="image"
                    src="https://media.istockphoto.com/photos/watch-picture-id136631027"
                    alt="products"
                    style={{ maxWidth: "100%", height: "100%" }}
                  ></img>
                </div>
                <div className="col-7">
                  <h2>Product Name</h2>
                  <h3>Price</h3>
                </div>
              </div>
              <hr />
              <div className="abc">
                <div>
                  <p>Subtotal</p>
                </div>
                <div>
                  <p>Price</p>
                </div>
              </div>
              <div className="abc">
                <div>
                  <p>Discount</p>
                </div>
                <div>
                  <p>Price</p>
                </div>
              </div>
              <div className="abc">
                <div>
                  <p>Taxes</p>
                </div>
                <div>
                  <p>Price</p>
                </div>
              </div>
              <hr />
              <div className="abc">
                <div>
                  <p>Total</p>
                </div>
                <div>
                  <p>Price</p>
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
