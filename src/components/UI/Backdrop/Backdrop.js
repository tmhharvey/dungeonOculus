import React from "react";
import "./Backdrop.scss";

const backdrop = props => {
  return (
    <div
      className="Backdrop"
      style={{
        transform: props.show ? "translateY(-100vh)" : null,
        opacity: props.show ? "0" : "1",
        top: props.topStyle,
        left: props.leftStyle
      }}
    >
      {props.children}
    </div>
  );
};

export default backdrop;
