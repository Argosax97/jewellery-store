import React from "react";
import ButtonStyles from "./Button.module.scss";
import { node, oneOf, func } from "prop-types";

const Button = ({ children, type, onClickHandler }) => {
  return (
    <div
      className={`${ButtonStyles.button} ${ButtonStyles[type]}`}
      onClick={onClickHandler}
    >
      {children}
    </div>
  );
};

const types = ["search", "add", "plus-lg", "plus-sm", "gender","genderSelected"];

Button.propTypes = {
  children: node,
  type: oneOf(types),
  onClickHandler: func,
};
Button.defaultProps = {
  type: "plus-lg",
  onClickHandler: () => {
    console.log("clicked");
  },
};
export default Button;
