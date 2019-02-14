import React from "react";
import "./Stats.scss";

const stats = props => (
  <div className="col-md-3 characterStats text-left">
    <div className="row">
      <div className="col-sm-12 text-center">
        <h3>Character: {props.class}</h3>
      </div>
      <div className="col-sm-12">
        <div className="characterStats__items text-center">
          Health Points: <br />
          <span className="characterStats__health">{props.health}</span>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="characterStats__items">
          Attack: &nbsp;
          <span className="characterStats__attack"> {props.attack}</span>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="characterStats__items">
          Attack Type: &nbsp;
          <span className="characterStats__attackType">{props.attackType}</span>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="characterStats__items">
          Defense:
          <span className="characterStats__defense">
            {" "}
            &nbsp;{props.defense}
          </span>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="characterStats__items">
          Defense Type: &nbsp;
          <span className="characterStats__defenseType">
            {" "}
            {props.defenseType}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default stats;
