import React, { Component } from "react";

import DungeonHelpers from "./helpers/dungeon/dungeonHelpers";
import DungeonMonsters from "./helpers/dungeon/dungeonMonsters";
import Dungeons from "./helpers/dungeon/dungeons";
import AbilityCreation from "../../components/CharacterUi/Abilities/abilityHelpers";
import Dungeon from "../../components/Dungeon/Dungeon";

import CharacterUi from "../../components/CharacterUi/CharacterUi";
import Combat from "../../components/Combat/Combat";

import knightPortrait from "../../assets/images/knightTransparent.png";
import lizardPortrait from "../../assets/images/lizardMonster.jpg";
import banditPortrait from "../../assets/images/bandit.png";
import dungeons from "./helpers/dungeon/dungeons";
import Introduction from "../../components/CharacterUi/Introduction/Introduction";
import Modal from "../../components/UI/Modal/Modal";

var Strike = new AbilityCreation("Strike", "tooltip", 3, "Physical");
var Fireball = new AbilityCreation("Fireball", "tooltip", 5, "Magic");
var Heal = new AbilityCreation("Heal", "tooltip", 0, "Magic", "7");

class DungeonOculus extends Component {
  state = {
    character: {
      player: true,
      name: "Larothion",
      class: "Knight",
      health: 20,
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
    gameInitiated: true,
    dungeonInitiated: false,
    abilitiesActive: false,
    combatInitiated: false,
    playerTurn: true
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

  dungeonSetupHandler = (selectedDungeon, monsterArray) => {
    if (monsterArray.length <= 0) {
      let currentCombatLog = [...this.state.combatLog];
      let bossMessage = "You hear something behind you... Watch out!";
      console.log(currentCombatLog);
      currentCombatLog.push(bossMessage);

      this.setState({
        combatLog: currentCombatLog
      });
      return null;
    }
    var monsters = monsterArray;

    var setMonster = selectedDungeon.monsterEncounterHandler(monsters);
    console.log("=====");
    console.log(setMonster);

    this.setState({
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
  };

  damageCalculator(
    charAbility,
    defenderDefType,
    attackerAttack,
    defenderDefense
  ) {
    console.log(charAbility);
    var totalDamage = charAbility.useAbility(defenderDefType) + attackerAttack;

    var actualDamage = totalDamage - defenderDefense;

    return Math.round(actualDamage);
  }

  // healingCalculator = (charAbility, character) => {
  //   console.log(charAbility);
  //   let updatedCharacter = character;
  //   var healedAmount = charAbility.useAbilityHeal();
  //   var oldCharacterHealth = character.health;
  //   const updatedCharacterHealth = oldCharacterHealth + healedAmount;

  //   let newCombatLog = [...this.state.combatLog];
  //   let healingLog = (character.name =
  //     " healed himself for " + healedAmount + "!");

  //   newCombatLog.push(healingLog);

  //   updatedCharacter.health = updatedCharacterHealth;
  //   return this.SetState({
  //     character: updatedCharacter,
  //     combatLog: newCombatLog,
  //     playerTurn: false
  //   });
  // };

  charCombatHandler = (attacker, defender, damageCalc, attackerAbility) => {
    let oldDefenderState = defender;
    let activeAbility = attackerAbility;
    let attackerAttack = attacker.attack;
    let defenderDef = defender.defense;
    let defenderDefType = defender.defenseType;
    let defenderCurrentHealth = defender.health;
    let combatLogCopy = [...this.state.combatLog];
    let updatedCombatLog = "";
    let combatLogText = "";

    var trueDamage = damageCalc(
      activeAbility,
      defenderDefType,
      attackerAttack,
      defenderDef
    );

    combatLogText =
      attacker.name +
      " used " +
      activeAbility.abilityName +
      " and did " +
      trueDamage +
      " damage to " +
      defender.name +
      "!";
    combatLogText.toString();
    defenderCurrentHealth = defenderCurrentHealth - trueDamage;
    oldDefenderState.health = defenderCurrentHealth;

    combatLogCopy.push(combatLogText);

    updatedCombatLog = combatLogCopy;

    if (defenderCurrentHealth <= 0) {
      let resetMonster = {
        name: "",
        class: "",
        health: "",
        attack: "",
        attackType: "",
        defense: "",
        defenseType: "",
        portrait: "",
        ability: ""
      };
      let monsterDeathCombatLog =
        defender.name +
        "'s health has reached 0.  You've defeated " +
        defender.name +
        "!";
      updatedCombatLog.push(monsterDeathCombatLog);

      this.setState({
        monster: resetMonster,
        combatLog: updatedCombatLog,
        combatInitiated: false,
        abilitiesActive: false,
        playerTurn: true
      });
    } else {
      this.setState({
        monster: oldDefenderState,
        combatLog: updatedCombatLog,
        playerTurn: false
      });
    }
  };

  monCombatHandler = (attacker, defender, damageCalc, attackerAbility) => {
    let oldDefenderState = defender;
    let activeAbility = attackerAbility;
    let attackerAttack = attacker.attack;
    let defenderDef = defender.defense;
    let defenderDefType = defender.defenseType;
    let defenderCurrentHealth = defender.health;
    let combatLogCopy = [...this.state.combatLog];
    let updatedCombatLog = "";
    let combatLogText = "";

    var trueDamage = damageCalc(
      activeAbility,
      defenderDefType,
      attackerAttack,
      defenderDef
    );

    combatLogText =
      attacker.name +
      " used " +
      activeAbility.abilityName +
      " and did " +
      trueDamage +
      " damage to " +
      defender.name +
      "!";
    combatLogText.toString();
    defenderCurrentHealth = defenderCurrentHealth - trueDamage;
    oldDefenderState.health = defenderCurrentHealth;

    combatLogCopy.push(combatLogText);

    updatedCombatLog = combatLogCopy;

    if (defenderCurrentHealth <= 0) {
      window.location.reload();
    } else {
      this.setState({
        character: oldDefenderState,
        combatLog: updatedCombatLog,
        playerTurn: true
      });
    }
  };

  render() {
    if (!this.state.playerTurn) {
      var attacker = this.state.monster;
      var defender = this.state.character;
      var damageCalc = this.damageCalculator;
      var attackerAbility = this.state.monster.ability[0].trueAbility;
      this.monCombatHandler(attacker, defender, damageCalc, attackerAbility);
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
          darkForestMonsters={DungeonMonsters.darkForestMonsters}
          dungeonEntered={this.dungeonEnteredHandler}
          combatInitiated={this.combatInitiatedHandler}
          combatOngoing={this.state.combatInitiated}
          dungeonInitiated={this.state.dungeonInitiated}
          abilitiesActive={this.abilitiesActiveHandler}
        />

        <CharacterUi
          character={this.state.character}
          combatHandler={this.charCombatHandler}
          damageCalculator={this.damageCalculator}
          monster={this.state.monster}
          abilitiesActive={this.state.abilitiesActive}
          healHandler={this.healingCalculator}
        />
      </>
    );
  }
}

export default DungeonOculus;
