import React from "react";
import "./Portrait.scss";

const portrait = props => (
  <div className="col-md-2 characterPortrait">
    <p className="characterPortrait__info">{props.name}</p>
    <div
      className="characterPortrait__character"
      style={{
        height: props.height
      }}
    >
      <img src={props.portrait} alt="" />
    </div>
  </div>
);

export default portrait;
