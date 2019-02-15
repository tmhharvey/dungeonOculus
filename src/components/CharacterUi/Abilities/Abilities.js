import React from "react";
import "./Abilities.scss";
import Strike from "../../../assets/images/Strike.png";
import Fireball from "../../../assets/images/Fireball.png";
import Heal from "../../../assets/images/HealingTransparent.png";

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
      case "Heal":
        abilityImageArray.push(Heal);
        break;

      default:
        abilityImageArray.push("");
        break;
    }

    return (
      <div className="col-sm-3" key={ability.abilityImage}>
        <button
          className="abilitySection__slots"
          disabled={props.disabled}
          onClick={() => {
            props.charCombatHandler(
              props.abilityArray[index].trueAbility,
              props.character,
              props.monster
            );
            // props.healHandler(
            //   props.abilityArray[index].trueAbility,
            //   props.character
            // );
          }}
        >
          {" "}
          <img src={abilityImageArray[index]} className="" alt="ability" />
        </button>
      </div>
    );
  });

  return (
    <div className="col-md-5 abilitySection">
      <h3>Ability Slots</h3>
      <div className="row"> {currentAbilities}</div>
    </div>
  );
};

export default abilities;
