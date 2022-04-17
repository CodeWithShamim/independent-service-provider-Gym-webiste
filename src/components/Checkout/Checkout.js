import React from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { checkoutId } = useParams();
  return (
    <div style={{ minHeight: "calc(100vh - 190px)" }}>
      <h1>this is Checkout: {checkoutId}</h1>
    </div>
  );
};

export default Checkout;
