import React from "react";
import spinner from "./ajax-loader.gif";
const Spinner = () => {
  return (
    <div className="text-center">
      <img src={spinner} className="spinner" alt="spinner" />
    </div>
  );
};

export default Spinner;
