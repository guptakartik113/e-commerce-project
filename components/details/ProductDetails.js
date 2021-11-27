import "./ProductDetails.css";
import { IoMdPerson } from "react-icons/io";
function ProductDetails() {
  function abc() {
    document.getElementById("abc1").src =
      "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F2020-Chevrolet-Corvette-Stingray%2F960x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349";
  }
  function xyz() {
    document.getElementById("abc1").src =
      "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F2020-Chevrolet-Corvette-Stingray%2F960x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349";
  }
  function pqr() {
    document.getElementById("abc1").src =
      "https://www.pixsy.com/wp-content/uploads/2021/04/edi-libedinsky-1bhp9zBPHVE-unsplash-1-1024x683.jpeg";
  }
  return (
    <>
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
            <div className="row">
              <img
                id="abc1"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=980:*"
                alt=""
                style={{ maxWidth: "100%", height: "100%" }}
              ></img>
            </div>
            <div className=" b row">
              <div className="col-4">
                <img
                  onClick={abc}
                  className="image"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=980:*"
                  alt="photo"
                  style={{ maxWidth: "100%", height: "100%" }}
                ></img>
              </div>
              <div className="col-4">
                <img
                  onClick={pqr}
                  className="image"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=980:*"
                  alt="photo"
                  style={{ maxWidth: "100%", height: "100%" }}
                ></img>
              </div>
              <div className="col-4">
                <img
                  onClick={xyz}
                  className="image"
                  src="https://www.pixsy.com/wp-content/uploads/2021/04/edi-libedinsky-1bhp9zBPHVE-unsplash-1-1024x683.jpeg"
                  alt=""
                  style={{ maxWidth: "100%", height: "100%" }}
                ></img>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 style={{ textAlign: "center" }}>Product Name</h2>
            <br />
            <h3 style={{ textAlign: "center" }}>price</h3>
            <br />

            <br />
            <div>
              <h4>Discribtion</h4>
              <p style={{ color: "black" }}>
                With its daily activity tracker and 9 different sports modes, it
                will now be fun to track your journey towards health. Stay alert
                at all times with smart notifications from your phone with
                vibration alerts for calls, texts, schedule reminders, alarms, &
                more The wellness mode of the smartwatch monitors your sleep,
                heart rate, blood oxygen levels as well as guides you into a
                meditative state when you need to relax It also comes with a
                menstruation cycle tracker that predicts your cycle and health.
                Its find my phone feature that will call your phone to easily
                locate your phone when you dont remember where you kept it The 5
                ATM water resistance will keep the watch safe from splashes &
                sweat too Warranty: 1 year Warranty provided by
                Brand/Manufacturer
              </p>
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
              Consumer Name
            </h3>
          </div>
          <div className="col">
            <p style={{ color: "black", textAlign: "justify" }}>
              It’s water resistant watch therefore sweat can’t enter inside the
              chamber. And also it doesn’t have exposed metal part ( copper )
              which could react with sweat. So feel free to wear it irrespective
              of season.
            </p>
          </div>
        </div>
      </div>
      <hr style={{ marginLeft: "40px", marginRight: "40px" }} />
    </>
  );
}
export default ProductDetails;
