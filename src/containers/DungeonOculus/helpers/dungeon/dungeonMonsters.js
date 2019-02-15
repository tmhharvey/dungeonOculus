import AbilityHelpers from "../abilities/abilityHelpers";
import lizardPortrait from "../../../../assets/images/lizardMonster.jpg";
import pantherPortrait from "../../../../assets/images/blacktooth.PNG";
import corruptedAncientOne from "../../../../assets/images/corruptedAncientOne.PNG";
import DungeonHelpers from "./dungeonHelpers";

var Strike = new AbilityHelpers("Strike", "damage", "tooltip", 3, "Physical");
var Fireball = new AbilityHelpers("Fireball", "damage", "tooltip", 5, "Magic");
var Heal = new AbilityHelpers("Heal", "heal", "tooltip", 0, "Magic", "7");

var DungeonMonsters = {
  darkForestEncounters: {
    monsters: [
      {
        name: "Measle",
        class: "Scavenger",
        health: 2,
        attack: 3,
        attackType: "Physical",
        defense: 3,
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
        name: "Ol' Blacktooth",
        class: "Forest Creature",
        health: 6,
        attack: 4,
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
      health: 10,
      attack: 4,
      attackType: "Physical",
      defense: 4,
      defenseType: "Heavy",
      portrait: corruptedAncientOne,
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
