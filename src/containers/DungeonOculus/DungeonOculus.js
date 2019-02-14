import React, { Component } from "react";

import DungeonHelpers from "./dungeonHelpers";
import DungeonMonsters from "./dungeonMonsters";
import Dungeons from "./dungeons";
import AbilityCreation from "../../components/CharacterUi/Abilities/abilityHelpers";
import Dungeon from "../../components/Dungeon/Dungeon";

import CharacterUi from "../../components/CharacterUi/CharacterUi";
import Combat from "../../components/Combat/Combat";

import knightPortrait from "../../assets/images/knight.jpg";
import lizardPortrait from "../../assets/images/lizardMonster.jpg";
import banditPortrait from "../../assets/images/bandit.png";
import dungeons from "./dungeons";

var Strike = new AbilityCreation("Strike", "tooltip", 3, "Physical");
var Fireball = new AbilityCreation("Fireball", "tooltip", 5, "Magic");

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
    combatLog: ["Combat Has Not Initiated..."]
  };

  dungeonSetupHandler = (selectedDungeon, monsterArray) => {
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

  combatHandler = (attacker, defender, damageCalc, attackerAbility) => {
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

    if (attacker.player) {
      this.setState({
        monster: oldDefenderState,
        combatLog: updatedCombatLog
      });
    } else {
      this.setState({
        character: oldDefenderState,
        combatLog: updatedCombatLog
      });
    }
  };

  render() {
    return (
      <>
        <Dungeon
          combatHandler={this.combatHandler}
          damageCalculator={this.damageCalculator}
          monster={this.state.monster}
          character={this.state.character}
          dungeonSetup={this.dungeonSetupHandler}
          combatLogArray={this.state.combatLog}
          darkForest={dungeons.darkForest}
          darkForestMonsters={DungeonMonsters.darkForestMonsters}
        />

        <CharacterUi
          character={this.state.character}
          combatHandler={this.combatHandler}
          damageCalculator={this.damageCalculator}
          monster={this.state.monster}
        />
      </>
    );
  }
}

export default DungeonOculus;
