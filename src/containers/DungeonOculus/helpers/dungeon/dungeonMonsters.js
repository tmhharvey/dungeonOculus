import AbilityHelpers from "../abilities/abilityHelpers";
import lizardPortrait from "../../../../assets/images/lizardMonster.jpg";
import pantherPortrait from "../../../../assets/images/blacktooth.PNG";
import corruptedAncientOne from "../../../../assets/images/corruptedAncientOne.jpg";
import corruptedForestCreature from "../../../../assets/images/corruptedForestCreature.jpg";
import DungeonHelpers from "./dungeonHelpers";
import BossTheme from "../../../../assets/audio/bossTheme.mp3";

var Strike = new AbilityHelpers("Strike", "damage", "tooltip", 3, "Physical");
var Fireball = new AbilityHelpers("Fireball", "damage", "tooltip", 5, "Magic");
var Heal = new AbilityHelpers("Heal", "heal", "tooltip", 0, "Magic", "7");

var DungeonMonsters = {
  darkForestEncounters: {
    monsters: [
      {
        name: "Measle",
        class: "Scavenger",
        health: 20,
        attack: 7,
        attackType: "Physical",
        defense: 1,
        defenseType: "Light",
        portrait: lizardPortrait,
        ability: [
          {
            trueAbility: Strike,
            abilityImage: "Strike"
          }
        ]
      },
      {
        name: "Corrupted Forest Creature",
        class: "Forest Creature",
        health: 30,
        attack: 4,
        attackType: "Piercing",
        defense: 3,
        defenseType: "Light",
        portrait: corruptedForestCreature,
        ability: [
          {
            trueAbility: Strike,
            abilityImage: "Strike"
          }
        ]
      },
      {
        name: "Ol' Blacktooth",
        class: "Forest Creature",
        health: 22,
        attack: 5,
        attackType: "Piercing",
        defense: 2,
        defenseType: "Light",
        portrait: pantherPortrait,
        ability: [
          {
            trueAbility: Strike,
            abilityImage: "Strike"
          }
        ]
      }
    ],
    boss: {
      name: "Corrupted Ancient One",
      class: "Forest Spirit",
      boss: true,
      health: 40,
      attack: 9,
      attackType: "Physical",
      defense: 4,
      defenseType: "Light",
      portrait: corruptedAncientOne,
      audio: BossTheme,
      ability: [
        {
          trueAbility: Strike,
          abilityImage: "Strike"
        }
      ]
    }
  }
};

export default DungeonMonsters;
