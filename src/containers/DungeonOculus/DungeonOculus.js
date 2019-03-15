import React, { Component } from "react";
import DungeonHelpers from "./helpers/dungeon/dungeonHelpers";
import DungeonMonsters from "./helpers/dungeon/dungeonMonsters";
import Dungeon from "../../components/Dungeon/Dungeon";
import CharacterUi from "../../components/CharacterUi/CharacterUi";
import Combat from "../../components/Combat/Combat";
import knightPortrait from "../../assets/images/knightTransparent.png";
import lizardPortrait from "../../assets/images/lizardMonster.jpg";
import banditPortrait from "../../assets/images/bandit.png";
import dungeons from "./helpers/dungeon/dungeons";
import Introduction from "../../components/CharacterUi/Introduction/Introduction";
import YouDied from "../../components/CharacterUi/YouDied/YouDied";
import Modal from "../../components/UI/Modal/Modal";
import abilityActionHelper from "./helpers/abilityActionHelpers";
import AbilityHelpers from "./helpers/abilities/abilityHelpers";
import BossTheme from "../../assets/audio/bossTheme.mp3";
import DarkSoulsDead from "../../assets/audio/DarkSoulsDead.mp3";

var darkSoulsDeath = new Audio(DarkSoulsDead);
var bossSong = new Audio(BossTheme);
var Strike = new AbilityHelpers(
  "Strike",
  "damage",
  "You swing in a downward arc with your sword, dealing 3 base damage! <br/> Damage Type: <strong>Physical </strong>. <br/> Cooldown: <strong>none</strong>",
  3,
  "Physical",
  0,
  0,
  0,
  false
);
var EnchantedStrike = new AbilityHelpers(
  "Enchanted Strike",
  "damage",
  "You magically enchant your sword and then swing in an upward arc, dealing 7 base damage! <br/>Damage Type: <strong>Magic </strong> <br/> Cooldown: <strong>4</strong>",
  7,
  "Magic",
  0,
  0,
  4,
  false
);
var Heal = new AbilityHelpers(
  "Heal Potion",
  "heal",
  "You quickly pop open and drink one of your health potions, healing you for 14. <br/> Cooldown: <strong> 2 Turns</strong>",
  0,
  "Magic",
  14,
  0,
  2,
  false
);

var ShieldBlock = new AbilityHelpers(
  "Shield Block",
  "status",
  "You magically enchant your shield, permanently increasing your defense by + 1. <br/> <strong>Cooldown: 5 Turns</strong>",
  1,
  "Magic",
  0,
  0,
  5,
  false
);

class DungeonOculus extends Component {
  state = {
    character: {
      player: true,
      name: "Sir Harvey",
      class: "Knight",
      health: 30,
      maxHealth: 30,
      attack: 3,
      attackType: "Physical",
      defense: 2,
      defenseType: "Heavy",
      portrait: knightPortrait,
      ability: [
        {
          trueAbility: Strike,
          abilityImage: "Strike"
        },
        {
          trueAbility: Heal,
          abilityImage: "Heal"
        },
        {
          trueAbility: ShieldBlock,
          abilityImage: "ShieldBlock"
        },
        {
          trueAbility: EnchantedStrike,
          abilityImage: "EnchantedStrike"
        }
      ],
      defaultChar: {
        player: true,
        name: "Larothion",
        class: "Knight",
        health: 30,
        maxHealth: 30,
        attack: 3,
        attackType: "Physical",
        defense: 2,
        defenseType: "Heavy",
        portrait: knightPortrait,
        ability: [
          {
            trueAbility: Strike,
            abilityImage: "Strike"
          },
          {
            trueAbility: Heal,
            abilityImage: "Heal"
          },
          {
            trueAbility: ShieldBlock,
            abilityImage: "ShieldBlock"
          },
          {
            trueAbility: EnchantedStrike,
            abilityImage: "EnchantedStrike"
          }
        ]
      }
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
    dungeonsArray: dungeons,
    currentDungeon: "",
    combatLog: ["Combat Has Not Initiated..."],
    characterAlive: true,
    gameInitiated: false,
    dungeonInitiated: false,
    abilitiesActive: false,
    combatInitiated: false,
    playerTurn: true,
    forbiddenForestActive: false,
    forbiddenForestCleared: false,
    banditCoveActive: false,
    banditCoveCleared: false,
    necroDwellActive: false,
    necroDwellCleared: false
  };

  startGameHandler = () => {
    this.setState({
      gameInitiated: true
    });
  };
  restartGameHandler = () => {
    window.location.reload();
  };
  dungeonEnteredHandler = dungeon => {
    let dungeonName = dungeon.dungeonCss;
    switch (dungeonName) {
      case "darkForest":
        this.setState({
          forbiddenForestActive: true,
          currentDungeon: dungeon
        });
        break;
      case "banditCove":
        this.setState({
          banditCoveActive: true,
          currentDungeon: dungeon
        });
        break;
      case "necroDwell":
        this.setState({
          necroDwellActive: true,
          currentDungeon: dungeon
        });
        break;
      default:
      // code block
    }
    this.setState({
      dungeonInitiated: true
    });
  };

  dungeonClearedHandler = dungeon => {
    let dungeonName = dungeon.dungeonCss;
    let updatedDungeonArray = this.state.dungeonsArray;
    console.log(JSON.stringify(updatedDungeonArray));

    var remainingDungeons = updatedDungeonArray.map(function(
      dungeonElement,
      index
    ) {
      if (dungeonElement.selectedDungeon.dungeonCss == dungeonName) {
        updatedDungeonArray.splice(index, 1);
      }
    });
    if (dungeonName === "darkForest") {
      this.setState({
        forbiddenForestCleared: true,
        forbiddenForestActive: false,
        dungeonInitiated: false
      });
    } else if (dungeonName === "banditCove") {
      this.setState({
        banditCoveCleared: true,
        banditCoveActive: false,
        dungeonInitiated: false
      });
    } else if (dungeonName === "necroDwell") {
      this.setState({
        necroDwellCleared: true,
        necroDwellActive: false,
        dungeonInitiated: false
      });
    }

    this.setState({
      dungeonsArray: updatedDungeonArray
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

  PlaySound = audio => {
    audio.loop = false;
    audio.volume = 0.3;

    audio.play();
  };

  StopSound = audio => {
    audio.pause();
    audio.currentTime = 0;
  };

  abilityCooldownHandler = (ability, index) => {
    let updatedCharacter = { ...this.state.character };
    let abilityDisabled =
      updatedCharacter.ability[index].trueAbility.abilityDisabled;

    if (ability.cooldownCounter > 0 && ability.abilityDisabled == false) {
      updatedCharacter.ability[index].trueAbility.abilityDisabled = true;

      this.setState({
        character: updatedCharacter
      });
    } else {
      if (ability.cooldownCounter === 0 && ability.abilityDisabled == true)
        updatedCharacter.ability[index].trueAbility.abilityDisabled = false;
    }
  };

  cooldownCounterController = index => {
    //the cooldown should only reset to the default on the element that was clicked
    let updatedCharacter = { ...this.state.character };
    let currentCooldown =
      updatedCharacter.ability[index].trueAbility.cooldownCounter;
    let defaultCooldown =
      updatedCharacter.ability[index].trueAbility.setCooldown;

    let abilityArray = updatedCharacter.ability;

    abilityArray.forEach((selectedAbility, index) => {
      let currentCooldown = selectedAbility.trueAbility.cooldownCounter;
      let defaultCooldown = selectedAbility.trueAbility.setCooldown;
      if (currentCooldown >= 1) {
        updatedCharacter.ability[index].trueAbility.cooldownCounter =
          currentCooldown - 1;

        this.setState({
          character: updatedCharacter
        });
      }
    });

    if (currentCooldown === 0) {
      updatedCharacter.ability[
        index
      ].trueAbility.cooldownCounter = defaultCooldown;

      this.setState({
        character: updatedCharacter
      });
    }
  };
  dungeonSetupHandler = (dungeon, dungeonEncounters) => {
    console.log(dungeon);
    let encounters = dungeonEncounters;
    let boss = dungeon.dungeonBoss;
    this.dungeonEnteredHandler(dungeon);
    if (encounters.length <= 0) {
      let currentCombatLog = [...this.state.combatLog];
      let bossMessage = "You hear something behind you... Watch out!";
      this.PlaySound(bossSong);
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
      var setMonster = dungeon.monsterEncounterHandler(encounters, boss);

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
          if (this.state.monster.boss) {
            this.dungeonClearedHandler(this.state.currentDungeon);
            this.StopSound(bossSong);
            var monsterDeathLog =
              "You defeated " +
              defender.name +
              " and have cleared the Dungeon! The guild will be pleased... very pleased.";
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
          return this.setState(
            {
              monster: abilityActionObject.updatedDefender,
              combatLog: updatedCombatLog,
              playerTurn: false,
              abilitiesActive: false
            },
            () => {
              this.monsterTurnCheck();
            }
          );
        }
        break;
      case "heal":
        if (abilityActionObject.updatedCharacter.player) {
          return this.setState(
            {
              character: abilityActionObject.updatedCharacter,
              combatLog: updatedCombatLog,
              playerTurn: false,
              abilitiesActive: false
            },
            () => {
              this.monsterTurnCheck();
            }
          );
        } else {
          return this.setState({
            monster: abilityActionObject.updatedCharacter,
            combatLog: updatedCombatLog,
            playerTurn: true,
            abilitiesActive: true
          });
        }
        break;
      case "status":
        if (abilityActionObject.updatedCharacter.player) {
          return this.setState(
            {
              character: abilityActionObject.updatedCharacter,
              combatLog: updatedCombatLog,
              playerTurn: false,
              abilitiesActive: false
            },
            () => {
              this.monsterTurnCheck();
            }
          );
        } else {
          return this.setState({
            monster: abilityActionObject.updatedCharacter,
            combatLog: updatedCombatLog,
            playerTurn: true,
            abilitiesActive: true
          });
        }
        break;
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
          this.StopSound(bossSong);
          this.PlaySound(darkSoulsDeath);
          return this.setState({
            characterAlive: false
          });
        } else {
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

  monsterTurnCheck = () => {
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
  };

  render() {
    return (
      <>
        <Modal show={this.state.gameInitiated}>
          <Introduction startGame={this.startGameHandler} />
        </Modal>
        <Modal show={this.state.characterAlive}>
          <YouDied startGame={this.restartGameHandler} />
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
          forestActive={this.state.forbiddenForestActive}
          banditCoveCleared={this.state.banditCoveCleared}
          banditCoveActive={this.state.banditCoveActive}
          necroActive={this.state.necroDwellActive}
          necroCleared={this.state.necroDwellCleared}
          dungeonsArray={this.state.dungeonsArray}
        />

        <CharacterUi
          character={this.state.character}
          combatHandler={this.charCombatHandler}
          damageCalculator={this.damageCalculator}
          monster={this.state.monster}
          abilitiesActive={this.state.abilitiesActive}
          healHandler={this.healingCalculator}
          charCombatHandler={this.charCombatHandler}
          cooldownCounterController={this.cooldownCounterController}
          abilityCooldownHandler={this.abilityCooldownHandler}
        />
      </>
    );
  }
}

export default DungeonOculus;
