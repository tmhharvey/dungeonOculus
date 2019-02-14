import React from "react";
import "./Abilities.scss";

import Strike from "../../../assets/images/Strike.png";
import Fireball from "../../../assets/images/Fireball.png";

const abilities = props => {
  let abilityImageArray = [];

  let currentAbilities = props.abilityArray.map((ability, index) => {
    switch (ability.abilityImage) {
      case "Strike":
        abilityImageArray.push(Strike);
        break;
      case "Fireball":
        abilityImageArray.push(Fireball);
        break;

      default:
        abilityImageArray.push("");
        break;
    }

    return (
      <div className="col-sm-4" key={ability.abilityImage}>
        <div
          className="abilitySection__slots"
          onClick={() =>
            props.combat(
              props.character,
              props.monster,
              props.damageCalc,
              props.abilityArray[index].trueAbility
            )
          }
        >
          {" "}
          <img src={abilityImageArray[index]} className="" alt="ability" />
        </div>
      </div>
    );
  });

  return (
    <div className="col-md-5 abilitySection">
      <h3>Ability Slots</h3>
      <div className="row">{currentAbilities}</div>
    </div>
  );
};

export default abilities;
