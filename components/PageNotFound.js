import React from "react";
import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const err = useRouteError();
  console.log("err", err);
  return (
    <div>
      <h4>PageNotFound</h4>
    </div>
  );
};

export default PageNotFound;
