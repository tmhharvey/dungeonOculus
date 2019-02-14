import React, { Component } from "react";
import "./Dungeon.scss";
import Topbar from "./Topbar/Topbar";
// import CharacterUi from "../CharacterUi/CharacterUi";
import Stats from "./Stats/Stats";
import BattleLayout from "./BattleLayout/BattleLayout";
import Combat from "../Combat/Combat";

class Dungeon extends Component {
  state = {};

  render() {
    return (
      <>
        <Topbar
          monsterName={this.props.monster.name}
          dungeonName={this.props.darkForest.dungeonName}
        />

        <div className="row text-center dungeonLayout">
          <BattleLayout
            dungeonSetup={() =>
              this.props.dungeonSetup(
                this.props.darkForest,
                this.props.darkForestMonsters
              )
            }
          />

          <Stats monster={this.props.monster} />
          <Combat combatLogArray={this.props.combatLogArray} />
        </div>
      </>
    );
  }
}

export default Dungeon;
