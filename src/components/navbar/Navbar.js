import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
function Navbar() {
  return (
    <>
      <div className={`container-fluid ${classes.header}`}>
        <div className={`row`}>
          <div className={`col-3 col-lg-7 col-sm-6`}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h1 style={{ marginLeft: "20px" }}>Easy Shop</h1>
            </Link>
          </div>
          <div className={`col-5 col-lg-3 col-sm-3`}>
            <div class={`input-group rounded`}>
              <input
                type="search"
                className={`form-control`}
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
            </div>
          </div>
          <div
            className={`col-4 col-lg-2 col-sm-3 `}
            style={{ marginBottom: "5px" }}
          >
            <Link to="/shoppingCart" className={`${classes.a}`}>
              <div className={`${classes.cart}`}>
                <FaShoppingCart style={{ color: "white" }} />
              </div>
              <div className={`${classes.cart}`}>
                <p style={{ margin: "0" }}>1</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
