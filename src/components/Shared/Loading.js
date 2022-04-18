import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="mt-5" style={{ minHeight: "calc(100vh - 190px)" }}>
      <Spinner size="lg" animation="border" variant="primary" />
    </div>
  );
};

export default Loading;
