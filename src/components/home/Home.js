import React, { useState, useEffect } from "react";
import { MdVerifiedUser } from "react-icons/md";
import { BiRupee } from "react-icons/bi";

import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const response = await fetch(
        "https://619897f5164fa60017c2311f.mockapi.io/users"
      );
      setProduct(await response.json());
    } catch (error) {
      console.log("the error is" + error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  function clickMe(curElem) {
    console.log(curElem.productName);
  }
  return (
    <>
      <div className="container-fluid mt-1">
        <div className="row text-center ">
          {product.map((curElem) => {
            return (
              <div className="col-sm-6 col-md-4 mt-5 " key={curElem.id}>
                <div className="left">
                  <img
                    className="image"
                    src={curElem.productPhoto}
                    alt="products"
                    style={{ maxWidth: "100%", height: "250px" }}
                  ></img>
                  <div className="middle ">
                    <div className="text" style={{ cursor: "pointer" }}>
                      Add to cart
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h5>
                    {curElem.productName}
                    <MdVerifiedUser style={{ width: "16px" }} />
                  </h5>
                  <p>
                    <BiRupee style={{ width: "20px" }} />
                    {curElem.price}
                  </p>
                  <div className="moreDetails" id="abc">
                    <Link
                      to={"/productDetails/" + curElem.id}
                      onClick={() => {
                        clickMe(curElem);
                      }}
                    >
                      More details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Home;
