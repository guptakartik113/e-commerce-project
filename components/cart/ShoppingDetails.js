import { useState } from "react";
import { BiRupee } from "react-icons/bi";
import Cart from "./Cart";
import "./ShoppingDetails.css";
function ShoppingDetails() {
  // const [user, setUser] = userState("");
  const [userError, setUserError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  function submitHandle(e) {
    e.preventDefault();
  }
  function nameHandle(e) {
    let name = e.target.value;
    if (name == null || name == "") {
      setUserError(true);
    } else {
      setUserError(false);
    }
  }
  function phoneHandle(e) {
    let phone = e.target.value;

    if (phone.length == 10) {
      setPhoneError(false);
    } else {
      setPhoneError(true);
    }

    console.log(phone);
  }
  function addressHandle(e) {
    let address = e.target.value;
    if (address.length < 20 || address.length > 100) {
      setAddressError(true);
    } else {
      setAddressError(false);
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
          <div className="col-sm-7">
            <div style={{ marginLeft: "50px", marginRight: "50px" }}>
              <br />
              <h3>ShoppingDetails</h3>
              <hr />
              <form onSubmit={submitHandle}>
                <label htmlFor="name">
                  Full Name
                  {userError ? (
                    <span style={{ color: "red" }}>user can’t be empty</span>
                  ) : (
                    ""
                  )}
                </label>

                <input
                  onChange={nameHandle}
                  className="input"
                  type="text"
                  id="name"
                  name="firstname"
                  placeholder="eg. kartik gupta "
                  required
                ></input>

                <label htmlFor="Address">Address</label>
                {addressError ? (
                  <span style={{ color: "red" }}>
                    Address must be 20 to 100 characters
                  </span>
                ) : (
                  ""
                )}
                <input
                  onChange={addressHandle}
                  className="input"
                  type="text"
                  id="Address"
                  name="firstname"
                  placeholder="542 W. 15th Street"
                  required
                ></input>

                <label htmlFor="country">Country</label>
                <select id="country" name="country" required>
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                  <option value="usa">india</option>
                </select>
                <label htmlFor="city">City</label>
                <input
                  // onChange={}
                  className="input"
                  type="text"
                  id="city"
                  name="firstname"
                  placeholder="City"
                  required
                ></input>
                <label htmlFor="phone">Phone no.</label>
                {phoneError ? (
                  <span style={{ color: "red" }}>Enter 10 digits</span>
                ) : (
                  ""
                )}
                <input
                  onChange={phoneHandle}
                  pattern="[1-9]{1}[0-9]{9}"
                  className="input"
                  type="text"
                  id="phone"
                  name="firstname"
                  placeholder="9912399576"
                  required
                ></input>
                <input type="submit" value="Submit"></input>
              </form>
            </div>
          </div>
          <div className="col-sm-5">
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
                  <h2>Noise model 2</h2>
                  <h3>
                    <BiRupee style={{ width: "20px" }} />
                    209 2
                  </h3>
                </div>
              </div>
              <hr />

              <div className="abc">
                <div>
                  <p>Subtotal</p>
                </div>
                <div>
                  <p>2092</p>
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
export default ShoppingDetails;
