import React from "react";
import "./Stats.scss";
import Portrait from "./Portrait/Portrait";

const stats = props => {
  return (
    <div className="col-md-2 monsterInfo">
      <h4>
        <strong>{props.monster.name}</strong>
      </h4>
      <div className="monsterInfo__portrait">
        <Portrait monsterImage={props.monster.portrait} />
      </div>
      <div className="row text-left">
        <div className="col-sm-12 text-center">
          <h3>Monster Stats </h3>
        </div>

        <div className="col-sm-12 ">
          <div className="monsterInfo__items">
            <i className="ra ra-health ra-1x" /> Health Points:{" "}
            {props.monster.health}
          </div>
        </div>
        <div className="col-sm-12">
          <div className="monsterInfo__items">
            <i className="ra ra-dripping-sword ra-1x" /> Attack:{" "}
            {props.monster.attack}
          </div>
        </div>
        <div className="col-sm-12">
          <div className="monsterInfo__items">
            <i className="ra ra-heavy-shield ra-1x" /> Defense:{" "}
            {props.monster.defense}
          </div>
        </div>
        <div className="col-sm-12">
          <div className="monsterInfo__items">
            <i className="ra ra-level-three-advanced ra-1x" /> Attack Type:{" "}
            {props.monster.attackType}
          </div>
        </div>
        <div className="col-sm-12">
          <div className="monsterInfo__items">
            {" "}
            <i className="ra ra-level-three ra-1x" /> Defense Type:{" "}
            {props.monster.defenseType}
          </div>
        </div>
      </div>
    </div>
  );
};

export default stats;
