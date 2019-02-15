import React from "react";
import "./Stats.scss";

const stats = props => (
  <div className="col-md-3 characterStats text-left">
    <div className="row">
      <div className="col-sm-12 text-center">
        <h3>Character: {props.class}</h3>
      </div>
      <div className="col-sm-12">
        <div className="characterStats__items text-left">
          <i className="ra ra-health ra-1x" />
          Health Points: &nbsp;
          <span className="characterStats__health">{props.health}</span>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="characterStats__items">
          <i className="ra ra-dripping-sword ra-1x" />
          Attack: &nbsp;
          <span className="characterStats__attack"> {props.attack}</span>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="characterStats__items">
          <i className="ra ra-heavy-shield ra-1x" />
          Defense:
          <span className="characterStats__defense">
            {" "}
            &nbsp;{props.defense}
          </span>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="characterStats__items text-left">
          <i className="ra ra-level-three ra-1x" />
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
