import React, { Component } from "react";
import "./CharacterUi.scss";
import Portrait from "./Portrait/Portrait";
import Stats from "./Stats/Stats";
import Abilities from "./Abilities/Abilities";
import knightPortrait from "../../assets/images/knight.png";
import Dungeon from "../Dungeon/Dungeon";

class CharacterUi extends Component {
  state = {
    character: {
      name: "Larothion"
    }
  };

  render() {
    return (
      <>
        <div className="row text-center characterBar">
          <Portrait
            portrait={this.props.character.portrait}
            name={this.props.character.name}
            class={this.props.character.class}
            margin={"2rem 0rem 0rem 0rem"}
          />
          <Stats
            attack={this.props.character.attack}
            health={this.props.character.health}
            healthColor={"#78AB46"}
            attackType={this.props.character.attackType}
            defense={this.props.character.defense}
            defenseType={this.props.character.defenseType}
            class={this.props.character.class}
          />
          <Abilities
            abilityArray={this.props.character.ability}
            character={this.props.character}
            charCombatHandler={this.props.charCombatHandler}
            monster={this.props.monster}
            disabled={!this.props.abilitiesActive}
            playerTurn={this.props.playerTurn}
            abilityCooldownHandler={this.props.abilityCooldownHandler}
            cooldownCounterController={this.props.cooldownCounterController}
            // healHandler={this.props.healHandler}
          />
          <div className="col-md-2 characterBar__tips">
            COMING SOON: <br />
            Game Tips!
          </div>
        </div>
      </>
    );
  }
}

export default CharacterUi;
