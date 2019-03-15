import React, { Component } from "react";
import "./Dungeon.scss";
import Topbar from "./Topbar/Topbar";
import Stats from "./Stats/Stats";
import BattleLayout from "./BattleLayout/BattleLayout";
import Combat from "../Combat/Combat";

class Dungeon extends Component {
  state = {};

  render() {
    return (
      <>
        <Topbar monsterName={this.props.monster.name} />

        <div className="row text-center dungeonLayout">
          <BattleLayout
            dungeonSetup={this.props.dungeonSetup}
            dungeonEntered={this.props.dungeonEntered}
            combatInitiated={this.props.combatInitiated}
            combatOngoing={this.props.combatOngoing}
            dungeonInitiated={this.props.dungeonInitiated}
            abilitiesActive={this.props.abilitiesActive}
            forestCleared={this.props.forestCleared}
            dungeonsArray={this.props.dungeonsArray}
            forestActive={this.props.forestActive}
            banditCoveCleared={this.props.banditCoveCleared}
            banditCoveActive={this.props.banditCoveActive}
            necroActive={this.props.necroActive}
            necroCleared={this.props.necroCleared}
          />

          <Stats monster={this.props.monster} />
          <Combat combatLogArray={this.props.combatLogArray} />
        </div>
      </>
    );
  }
}

export default Dungeon;
