import React from "react";

const Card = ({ val, clicked }) => {
  return <div>{clicked ? val.value : "X"}</div>;
};

export default Card;
