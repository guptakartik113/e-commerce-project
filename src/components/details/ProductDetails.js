import "./ProductDetails.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { IoMdPerson } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
function ProductDetails() {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const response = await fetch(
        "https://619897f5164fa60017c2311f.mockapi.io/users/" + id + "/details"
      );
      setProduct(await response.json());
    } catch (error) {
      console.log("the error is" + error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  let { id } = useParams();

  function abc(curElem) {
    document.getElementById("abc1").src = curElem.photo1;
  }
  function xyz(curElem) {
    document.getElementById("abc1").src = curElem.photo2;
  }
  function pqr(curElem) {
    document.getElementById("abc1").src = curElem.photo3;
  }
  return (
    <>
      {product.map((curElem) => {
        return (
          <div key={curElem.userId}>
            <div className="container-fluid" style={{ marginTop: "30px" }}>
              <div
                className="row"
                style={{
                  marginLeft: "40px",
                  marginRight: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="col-lg-6">
                  <div className="row m">
                    <img
                      id="abc1"
                      src={curElem.productPhoto}
                      alt=""
                      style={{ maxWidth: "100%", height: "100%" }}
                    ></img>
                  </div>
                  <div className=" b row">
                    <div className="col-4">
                      <img
                        onClick={() => {
                          abc(curElem);
                        }}
                        className="image"
                        src={curElem.photo1}
                        alt="photo"
                        style={{ maxWidth: "100%", height: "100%" }}
                      ></img>
                    </div>
                    <div className="col-4">
                      <img
                        onClick={() => {
                          xyz(curElem);
                        }}
                        className="image"
                        src={curElem.photo2}
                        alt="photo"
                        style={{ maxWidth: "100%", height: "100%" }}
                      ></img>
                    </div>
                    <div className="col-4">
                      <img
                        onClick={() => {
                          pqr(curElem);
                        }}
                        className="image"
                        src={curElem.photo3}
                        alt=""
                        style={{ maxWidth: "100%", height: "100%" }}
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h2 style={{ textAlign: "center" }}>{curElem.productName}</h2>
                  <br />
                  <h3 style={{ textAlign: "center" }}>
                    <BiRupee style={{ width: "20px" }} />
                    {curElem.price}
                  </h3>
                  <br />

                  <br />
                  <div>
                    <h4>Discribtion</h4>
                    <p style={{ color: "black" }}>{curElem.discription}</p>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ marginLeft: "40px", marginRight: "40px" }} />
            <br />
            <h2 style={{ marginLeft: "40px" }}>
              <ins>Reviews</ins>
            </h2>
            <div className="container-fluid">
              <div
                className="row"
                style={{ marginLeft: "40px", marginRight: "40px" }}
              >
                <div
                  className="col"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h3 style={{ textAlign: "center" }}>
                    <IoMdPerson style={{ width: "50px" }} />
                    kartik gupta
                  </h3>
                </div>
                <div className="col">
                  <p style={{ color: "black", textAlign: "justify" }}>
                    It’s water resistant watch therefore sweat can’t enter
                    inside the chamber. And also it doesn’t have exposed metal
                    part ( copper ) which could react with sweat. So feel free
                    to wear it irrespective of season.
                  </p>
                </div>
              </div>
            </div>
            <hr style={{ marginLeft: "40px", marginRight: "40px" }} />
          </div>
        );
      })}
    </>
  );
}
export default ProductDetails;
