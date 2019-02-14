import React from "react";
import "./Portrait.scss";

const portrait = props =>
  props.monsterImage ? (
    <img src={props.monsterImage} className="monsterCard" alt="monster" />
  ) : null;

export default portrait;
