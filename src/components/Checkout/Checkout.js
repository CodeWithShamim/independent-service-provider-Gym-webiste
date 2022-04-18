import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const { checkoutId } = useParams();

  // const emailRef = useRef();
  const phoneRef = useRef();
  const nameRef = useRef();

  // handle Registration
  const handleCheckout = (e) => {
    e.preventDefault();
    // get input value

    // const email = emailRef.current.value;
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;

    console.log(phone, name);

    if (name || phone) {
      toast("Thanks for Checkout.");
    }
  };

  return (
    <div style={{ minHeight: "calc(100vh - 190px)" }}>
      <div className="text-center main-container text-light">
        <div
          className=" w-50 mx-auto login-container"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <form onSubmit={handleCheckout}>
            <div className=" text-start">
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="nameHelp"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control bg-secondary"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={user.email}
                  readOnly
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Phone" className="form-label">
                  Phone
                </label>
                <input
                  ref={phoneRef}
                  type="number"
                  className="form-control"
                  id="Phone"
                  required
                />
              </div>
              <div className="mb-3 h-50">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  ref={phoneRef}
                  type="text"
                  className="form-control"
                  id="address"
                  required
                />
              </div>
            </div>

            <button type="submit" className="login-btn btn w-100 fw-bold fs-4">
              Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
