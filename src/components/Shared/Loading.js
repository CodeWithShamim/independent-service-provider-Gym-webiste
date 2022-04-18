import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="mt-5" style={{ minHeight: "calc(100vh - 90px)" }}>
      <Spinner animation="grow" variant="info" />
    </div>
  );
};

export default Loading;
