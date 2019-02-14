import React from "react";
import "./Portrait.scss";

const portrait = props => (
  <div className="col-md-2 characterPortrait">
    <p className="characterPortrait__info">Name: {props.name}</p>
    <div
      className=""
      style={{
        height: props.height,
        margin: props.margin
      }}
    >
      <img src={props.portrait} alt="character" />
    </div>
  </div>
);

export default portrait;
