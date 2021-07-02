import React from "react";
import "./input.css";

const Input = (props) => {
  return (
    <input
      className="styled-input"
      type="text"
      placeholder={props.placeholder}
      name={props.name}
      required
    ></input>
  );
};
export default Input;
