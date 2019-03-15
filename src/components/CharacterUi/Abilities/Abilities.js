import React from "react";
import "./Abilities.scss";
import Strike from "../../../assets/images/Strike.png";
import EnchantedStrike from "../../../assets/images/EnchantedStrike.PNG";
import Heal from "../../../assets/images/HealingTransparent.png";
import ShieldBlock from "../../../assets/images/shieldTransparent.png";
import ReactTooltip from "react-tooltip";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

const abilities = props => {
  let abilityImageArray = [];

  let currentAbilities = props.abilityArray.map((ability, index) => {
    const abilityToolTipParsed = ability.trueAbility.tooltip;
    switch (ability.abilityImage) {
      case "Strike":
        abilityImageArray.push(Strike);
        break;
      case "EnchantedStrike":
        abilityImageArray.push(EnchantedStrike);
        break;
      case "Heal":
        abilityImageArray.push(Heal);
        break;

      case "ShieldBlock":
        abilityImageArray.push(ShieldBlock);
        break;

      default:
        abilityImageArray.push("");
        break;
    }
    return (
      <div className="col-sm-3" key={ability.abilityImage}>
        {/* <div
          className="abilitySection__tooltip"
          style={{
            pointerEvents:
              props.disabled || ability.trueAbility.abilityDisabled
                ? "none !important"
                : "visible !important"
          }}
        >
          <ReactTooltip
            id={"ability" + ability.trueAbility.abilityName}
            place="top"
            type="error"
            effect="solid"
          >
            {" "}
            <span>{ReactHtmlParser(abilityToolTipParsed)}</span>
          </ReactTooltip>
        </div> */}
        <button
          data-tip
          data-for={"ability" + ability.trueAbility.abilityName}
          className="abilitySection__slots"
          disabled={props.disabled || ability.trueAbility.abilityDisabled}
          abilityCooldownHandler={props.abilityCooldownHandler(
            ability.trueAbility,
            index
          )}
          onClick={() => {
            props.charCombatHandler(
              props.abilityArray[index].trueAbility,
              props.character,
              props.monster
            );
            props.cooldownCounterController(index);

            // props.healHandler(
            //   props.abilityArray[index].trueAbility,
            //   props.character
            // );
          }}
        >
          {props.disabled || ability.trueAbility.abilityDisabled ? (
            <p className="abilitySection__slots--cooldown">
              {"Cooldown: " +
                props.abilityArray[index].trueAbility.cooldownCounter}
            </p>
          ) : (
            " "
          )}

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
