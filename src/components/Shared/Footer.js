import React from "react";

const Footer = () => {
  const getDate = new Date();
  const getYear = getDate.getFullYear();
  return (
    <div
      // style={{
      //   position: "absolute",
      //   bottom: "0",
      //   width: "100%",
      //   height: "60px",
      //   background: "black",
      // }}
      className="bg-dark py-4"
    >
      <p className="text-light mt-3">Copyright &copy; {getYear}</p>
    </div>
  );
};

export default Footer;
