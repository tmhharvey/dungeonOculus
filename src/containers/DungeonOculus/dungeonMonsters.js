import AbilityCreation from "../../components/CharacterUi/Abilities/abilityHelpers";
import lizardPortrait from "../../assets/images/lizardMonster.jpg";
import banditPortrait from "../../assets/images/bandit.png";
import DungeonHelpers from "./dungeonHelpers";

var Strike = new AbilityCreation("Strike", "tooltip", 3, "Physical");
var Fireball = new AbilityCreation("Fireball", "tooltip", 5, "Magic");

var DungeonMonsters = {
  darkForestMonsters: [
    {
      name: "Measle",
      class: "Scavenger",
      health: 10,
      attack: 2,
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
      class: "Bandit",
      health: 8,
      attack: 5,
      attackType: "Piercing",
      defense: 2,
      defenseType: "Light",
      portrait: banditPortrait,
      ability: [
        {
          trueAbility: Strike,
          abilityImage: "Strike"
        }
      ]
    }
  ]
};

export default DungeonMonsters;
