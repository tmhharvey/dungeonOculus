import AbilityHelpers from "../abilities/abilityHelpers";
import lizardPortrait from "../../../../assets/images/lizardMonster.jpg";
import pantherPortrait from "../../../../assets/images/blacktooth.PNG";
import corruptedAncientOne from "../../../../assets/images/corruptedAncientOne.jpg";
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
        health: 17,
        attack: 7,
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
        health: 24,
        attack: 3,
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
      attack: 6,
      attackType: "Physical",
      defense: 4,
      defenseType: "Light",
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
