import React from "react";

const Button = ({ disable = false, ...props }) => {
  return (
    <div>
      <button
        onClick={props.clicked ? props.clicked() : null}
        type="button"
        class="btn btn-outline-primary"
        style={{ marginRight: "10px", marginTop: "5px" }}
        disabled={disable}
      >
        {props.name}
      </button>
    </div>
  );
};
export default Button;
