import React from "react";
import "./BattleLayout.scss";

// If true, it shows all the dungeons, if false it goes away and shows whichever dungeon state is true

const battleLayout = props => {
  var dungeonsLayout;
  if (props.forestActive) {
    let dungeon = props.dungeonsArray.find(dungeonElement => {
      if (dungeonElement.selectedDungeon.dungeonCss === "darkForest") {
        return dungeonElement.selectedDungeon;
      }
    });

    dungeonsLayout = (
      <div className="col-md-12" key={dungeon.selectedDungeon.dungeonCss + 0}>
        <div>
          <div
            style={{
              display: props.forestActive ? "inline-block" : "none"
            }}
          >
            <div
              className={
                "dungeonSelection__" + dungeon.selectedDungeon.dungeonCss
              }
              onClick={() =>
                props.dungeonSetup(
                  dungeon.selectedDungeon,
                  dungeon.selectedDungeon.monstersArray
                )
              }
              style={{
                display: props.combatOngoing ? "none" : "inline-block"
              }}
            >
              <div
                className={
                  "dungeonSelection__" +
                  dungeon.selectedDungeon.dungeonCss +
                  "--enterButton"
                }
                onClick={() => {
                  props.combatInitiated();
                  props.abilitiesActive();
                }}
              >
                {" "}
                Continue On
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.banditCoveActive) {
    let dungeon = props.dungeonsArray.find(dungeonElement => {
      if (dungeonElement.selectedDungeon.dungeonCss === "banditCove") {
        return dungeonElement.selectedDungeon;
      }
    });

    dungeonsLayout = (
      <div className="col-md-12" key={dungeon.selectedDungeon.dungeonCss + 0}>
        <div>
          <div
            style={{
              display: props.banditCoveActive ? "inline-block" : "none"
            }}
          >
            <div
              className={
                "dungeonSelection__" + dungeon.selectedDungeon.dungeonCss
              }
              onClick={() =>
                props.dungeonSetup(
                  dungeon.selectedDungeon,
                  dungeon.selectedDungeon.monstersArray
                )
              }
              style={{
                display: props.combatOngoing ? "none" : "inline-block"
              }}
            >
              <div
                className={
                  "dungeonSelection__" +
                  dungeon.selectedDungeon.dungeonCss +
                  "--enterButton"
                }
                onClick={() => {
                  props.combatInitiated();
                  props.abilitiesActive();
                }}
              >
                {" "}
                Continue On
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.necroActive) {
    let dungeon = props.dungeonsArray.find(dungeonElement => {
      if (dungeonElement.selectedDungeon.dungeonCss === "necroDwell") {
        return dungeonElement.selectedDungeon;
      }
    });
    console.log(dungeon.selectedDungeon.monstersArray);
    dungeonsLayout = (
      <div className="col-md-12" key={dungeon.selectedDungeon.dungeonCss + 2}>
        <div>
          <div
            style={{
              display: props.necroActive ? "inline-block" : "none"
            }}
          >
            <div
              className={
                "dungeonSelection__" + dungeon.selectedDungeon.dungeonCss
              }
              onClick={() =>
                props.dungeonSetup(
                  dungeon.selectedDungeon,
                  dungeon.selectedDungeon.monstersArray
                )
              }
              style={{
                display: props.combatOngoing ? "none" : "inline-block"
              }}
            >
              <div
                className={
                  "dungeonSelection__" +
                  dungeon.selectedDungeon.dungeonCss +
                  "--enterButton"
                }
                onClick={() => {
                  props.combatInitiated();
                  props.abilitiesActive();
                }}
              >
                {" "}
                Continue On
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    dungeonsLayout = props.dungeonsArray.map((dungeon, index) => {
      var currentDungeon = dungeon.selectedDungeon;
      return (
        <div
          className="col-md-6"
          key={dungeon.selectedDungeon.dungeonCss + index}
        >
          <div>
            <div
              style={{
                display: props.dungeonInitiated ? "none" : "inline-block"
              }}
            >
              <div
                className={
                  "dungeonSelection__" + dungeon.selectedDungeon.dungeonCss
                }
                onClick={() =>
                  props.dungeonSetup(
                    dungeon.selectedDungeon,
                    dungeon.selectedDungeon.monstersArray
                  )
                }
                style={{
                  display: props.combatOngoing ? "none" : "inline-block"
                }}
              >
                <div
                  className={
                    "dungeonSelection__" +
                    dungeon.selectedDungeon.dungeonCss +
                    "--enterButton"
                  }
                  onClick={() => {
                    props.dungeonEntered(currentDungeon);
                    props.combatInitiated();
                    props.abilitiesActive();
                  }}
                >
                  {" "}
                  {"Enter The " + dungeon.selectedDungeon.dungeonName}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  // let currentAbilities = props.abilityArray.map((ability, index) => {
  //   const abilityToolTipParsed = ability.trueAbility.tooltip;
  //   return (
  //     <div className="col-sm-3" key={ability.abilityImage}>
  //       <button
  //         data-tip
  //         data-for={"ability" + ability.trueAbility.abilityName}
  //         className="abilitySection__slots"
  //         disabled={props.disabled || ability.trueAbility.abilityDisabled}
  //         abilityCooldownHandler={props.abilityCooldownHandler(
  //           ability.trueAbility,
  //           index
  //         )}
  //         onClick={() => {
  //           props.charCombatHandler(
  //             props.abilityArray[index].trueAbility,
  //             props.character,
  //             props.monster
  //           );
  //           props.cooldownCounterController(index);
  //         }}
  //       />
  //     </div>
  //   );
  // });
  return (
    <div className="col-md-8 dungeonSelection">
      <div className="row dungeonSelection__container">{dungeonsLayout}</div>
    </div>
  );
};

export default battleLayout;
