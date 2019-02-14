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
      <div className="row text-center">
        <div className="col-sm-12 ">
          <h3>Monster Stats </h3>
        </div>

        <div className="col-sm-12 ">
          <div className="monsterInfo__items">
            Health Points: {props.monster.health}
          </div>
        </div>
        <div className="col-sm-12">
          <div className="monsterInfo__items">
            Attack: {props.monster.attack}
          </div>
        </div>
        <div className="col-sm-12">
          <div className="monsterInfo__items">
            Defense: {props.monster.defense}
          </div>
        </div>
        <div className="col-sm-12">
          <div className="monsterInfo__items">
            Attack Type: {props.monster.attackType}
          </div>
        </div>
        <div className="col-sm-12">
          <div className="monsterInfo__items">
            {" "}
            Defense Type: {props.monster.defenseType}
          </div>
        </div>
      </div>
    </div>
  );
};

export default stats;
