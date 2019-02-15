import React, { Component } from "react";
import DungeonHelpers from "./helpers/dungeon/dungeonHelpers";
import DungeonMonsters from "./helpers/dungeon/dungeonMonsters";
import Dungeons from "./helpers/dungeon/dungeons";
import Dungeon from "../../components/Dungeon/Dungeon";
import CharacterUi from "../../components/CharacterUi/CharacterUi";
import Combat from "../../components/Combat/Combat";
import knightPortrait from "../../assets/images/knightTransparent.png";
import lizardPortrait from "../../assets/images/lizardMonster.jpg";
import banditPortrait from "../../assets/images/bandit.png";
import dungeons from "./helpers/dungeon/dungeons";
import Introduction from "../../components/CharacterUi/Introduction/Introduction";
import Modal from "../../components/UI/Modal/Modal";
import abilityActionHelper from "./helpers/abilityActionHelpers";
import AbilityHelpers from "./helpers/abilities/abilityHelpers";

var Strike = new AbilityHelpers("Strike", "damage", "tooltip", 3, "Physical");
var Fireball = new AbilityHelpers("Fireball", "damage", "tooltip", 5, "Magic");
var Heal = new AbilityHelpers("Heal Potion", "heal", "tooltip", 0, "Magic", 7);

console.log(Strike);

class DungeonOculus extends Component {
  state = {
    character: {
      player: true,
      name: "Larothion",
      class: "Knight",
      health: 20,
      maxHealth: 20,
      attack: 3,
      attackType: "Physical",
      defense: 4,
      defenseType: "Heavy",
      portrait: knightPortrait,
      ability: [
        {
          trueAbility: Strike,
          abilityImage: "Strike"
        },
        {
          trueAbility: Fireball,
          abilityImage: "Fireball"
        },
        {
          trueAbility: Heal,
          abilityImage: "Heal"
        }
      ]
    },
    monster: {
      player: false,
      name: "",
      class: "",
      health: 0,
      attack: 0,
      attackType: "",
      defense: 0,
      defenseType: "",
      portrait: "",
      ability: [
        {
          trueAbility: "",
          abilityImage: ""
        }
      ]
    },
    combatLog: ["Combat Has Not Initiated..."],
    gameInitiated: false,
    dungeonInitiated: false,
    abilitiesActive: false,
    combatInitiated: false,
    playerTurn: true,
    forbiddenForestCleared: false
  };

  startGameHandler = () => {
    this.setState({
      gameInitiated: true
    });
  };

  dungeonEnteredHandler = () => {
    this.setState({
      dungeonInitiated: true
    });
  };

  dungeonClearedHandler = () => {
    this.setState({
      forbiddenForestCleared: true
    });
  };

  combatInitiatedHandler = () => {
    this.setState({
      combatInitiated: true
    });
  };

  abilitiesActiveHandler = () => {
    this.setState({
      abilitiesActive: true
    });
  };

  dungeonSetupHandler = (selectedDungeon, dungeonEncounters) => {
    let encounters = dungeonEncounters.monsters;
    let boss = dungeonEncounters.boss;
    if (encounters.length <= 0) {
      let currentCombatLog = [...this.state.combatLog];
      let bossMessage = "You hear something behind you... Watch out!";

      currentCombatLog.push(bossMessage);

      this.setState({
        combatLog: currentCombatLog,
        playerTurn: true,
        monster: {
          name: boss.name,
          class: boss.class,
          boss: true,
          health: boss.health,
          attack: boss.attack,
          attackType: boss.attackType,
          defense: boss.defense,
          defenseType: boss.defenseType,
          portrait: boss.portrait,
          ability: boss.ability
        }
      });
    } else {
      var setMonster = selectedDungeon.monsterEncounterHandler(
        encounters,
        boss
      );

      this.setState({
        playerTurn: true,
        monster: {
          name: setMonster.name,
          class: setMonster.class,
          health: setMonster.health,
          attack: setMonster.attack,
          attackType: setMonster.attackType,
          defense: setMonster.defense,
          defenseType: setMonster.defenseType,
          portrait: setMonster.portrait,
          ability: setMonster.ability
        }
      });
    }
  };

  charCombatHandler = (ability, attacker, defender) => {
    var updatedCombatLog = [...this.state.combatLog];
    var abilityActionObject = abilityActionHelper.abilityActionObject(
      ability,
      attacker,
      defender
    );
    updatedCombatLog.push(abilityActionObject.abilityCombatLog);
    switch (ability.type) {
      case "damage":
        if (abilityActionObject.updatedDefender.health <= 0) {
          console.log(abilityActionObject.updatedDefender);
          if (this.state.monster.boss) {
            this.dungeonClearedHandler();
            var monsterDeathLog =
              "You defeated " +
              defender.name +
              " and have cleared The Dark Forest! The guild will be pleased... very pleased.";
            updatedCombatLog.push(monsterDeathLog);
            return this.setState({
              monster: abilityActionObject.updatedDefender,
              combatLog: updatedCombatLog,
              playerTurn: false,
              combatInitiated: false,
              abilitiesActive: false,
              dungeonInitiated: false
            });
          } else {
            var monsterDeathLog = "You defeated " + defender.name;
            updatedCombatLog.push(monsterDeathLog);
            return this.setState({
              monster: abilityActionObject.updatedDefender,
              combatLog: updatedCombatLog,
              playerTurn: false,
              combatInitiated: false,
              abilitiesActive: false
            });
          }
        } else {
          return this.setState({
            monster: abilityActionObject.updatedDefender,
            combatLog: updatedCombatLog,
            playerTurn: false,
            abilitiesActive: false
          });
        }
        break;
      case "heal":
        if (abilityActionObject.updatedCharacter.player) {
          return this.setState({
            character: abilityActionObject.updatedCharacter,
            combatLog: updatedCombatLog,
            playerTurn: false,
            abilitiesActive: false
          });
        } else {
          return this.setState({
            monster: abilityActionObject.updatedCharacter,
            combatLog: updatedCombatLog,
            playerTurn: true,
            abilitiesActive: true
          });
          break;
        }
      default:
        alert("error...");
    }
  };

  monsterCombatHandler = (ability, attacker, defender) => {
    switch (ability.type) {
      case "damage":
        var updatedCombatLog = [...this.state.combatLog];
        var abilityActionObject = abilityActionHelper.abilityActionObject(
          ability,
          attacker,
          defender
        );
        updatedCombatLog.push(abilityActionObject.abilityCombatLog);

        if (abilityActionObject.updatedDefender.health <= 0) {
          window.location.reload();
        } else {
          console.log(updatedCombatLog);

          return this.setState({
            character: abilityActionObject.updatedDefender,
            combatLog: updatedCombatLog,
            playerTurn: true,
            combatInitiated: true
          });
        }
        break;
      default:
        alert("uh oh");
    }
  };

  render() {
    if (
      !this.state.playerTurn &&
      this.state.combatInitiated &&
      this.state.dungeonInitiated
    ) {
      setTimeout(() => {
        var attacker = this.state.monster;
        var defender = this.state.character;
        var attackerAbility = this.state.monster.ability[0].trueAbility;
        this.monsterCombatHandler(attackerAbility, attacker, defender);

        this.setState({
          abilitiesActive: true
        });
      }, 1000);
    }

    return (
      <>
        <Modal gameStarted={this.state.gameInitiated}>
          <Introduction startGame={this.startGameHandler} />
        </Modal>
        <Dungeon
          playerTurn={this.state.playerTurn}
          combatHandler={this.monCombatHandler}
          damageCalculator={this.damageCalculator}
          monster={this.state.monster}
          character={this.state.character}
          dungeonSetup={this.dungeonSetupHandler}
          combatLogArray={this.state.combatLog}
          darkForest={dungeons.darkForest}
          darkForestMonsters={DungeonMonsters.darkForestEncounters}
          dungeonEntered={this.dungeonEnteredHandler}
          combatInitiated={this.combatInitiatedHandler}
          combatOngoing={this.state.combatInitiated}
          dungeonInitiated={this.state.dungeonInitiated}
          abilitiesActive={this.abilitiesActiveHandler}
          forestCleared={this.state.forbiddenForestCleared}
        />

        <CharacterUi
          character={this.state.character}
          combatHandler={this.charCombatHandler}
          damageCalculator={this.damageCalculator}
          monster={this.state.monster}
          abilitiesActive={this.state.abilitiesActive}
          healHandler={this.healingCalculator}
          charCombatHandler={this.charCombatHandler}
        />
      </>
    );
  }
}

export default DungeonOculus;
