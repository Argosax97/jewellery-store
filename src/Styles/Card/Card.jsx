import React from "react";
import CardStyles from "./Card.module.scss";
import { node, oneOf } from "prop-types";

const Card = ({ children, type, onclickHandler }) => {
  
  return (
    <div
      className={`${CardStyles.card} ${CardStyles[type]}`}
      onClick={onclickHandler}
    >
      {children}
    </div>
  );
};

const types = ["category", "product"];

Card.propTypes = {
  children: node.isRequired,
  type: oneOf(types),
};
Card.defaultProps = {
  type: "category",
  onClickHandler: () => {
    console.log("card clicked");
  },
};

export default Card;
