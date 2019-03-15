import AbilityHelpers from "../abilities/abilityHelpers";
import lizardPortrait from "../../../../assets/images/lizardMonster.jpg";
import pantherPortrait from "../../../../assets/images/blacktooth.PNG";
import corruptedAncientOne from "../../../../assets/images/corruptedAncientOne.jpg";
import corruptedForestCreature from "../../../../assets/images/corruptedForestCreature.jpg";
import banditScoundrel from "../../../../assets/images/Bandit1.jpg";
import banditMob from "../../../../assets/images/BanditMob.jpg";
import banditCutThroat from "../../../../assets/images/bandit2.png";
import banditLord from "../../../../assets/images/banditLord.jpg";
import necroSeductress from "../../../../assets/images/necroseduct.jpg";
import necroChamp from "../../../../assets/images/necroChamp.jpg";
import necroTempt from "../../../../assets/images/necroTempt.PNG";
import archNecro from "../../../../assets/images/archNecro.jpg";
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
        attack: 9,
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
        attack: 6,
        attackType: "Piercing",
        defense: 3,
        defenseType: "Heavy",
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
        attack: 6,
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
      health: 45,
      attack: 12,
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
  },
  necroDwellEncounters: {
    monsters: [
      {
        name: "Necromancer Seductress",
        class: "Scavenger",
        health: 15,
        attack: 12,
        attackType: "Magic",
        defense: 1,
        defenseType: "Enchanted",
        portrait: necroSeductress,
        ability: [
          {
            trueAbility: Strike,
            abilityImage: "Strike"
          }
        ]
      },
      {
        name: "Skeletal Champion",
        class: "Forest Creature",
        health: 50,
        attack: 6,
        attackType: "Physical",
        defense: 3,
        defenseType: "Light",
        portrait: necroChamp,
        ability: [
          {
            trueAbility: Strike,
            abilityImage: "Strike"
          }
        ]
      },
      {
        name: "Temptor",
        class: "Forest Creature",
        health: 20,
        attack: 7,
        attackType: "Magic",
        defense: 5,
        defenseType: "Light",
        portrait: necroTempt,
        ability: [
          {
            trueAbility: Strike,
            abilityImage: "Strike"
          }
        ]
      }
    ],
    boss: {
      name: "Necro Magistar",
      class: "Forest Spirit",
      boss: true,
      health: 30,
      attack: 17,
      attackType: "Magic",
      defense: 4,
      defenseType: "Enchanted",
      portrait: archNecro,
      audio: BossTheme,
      ability: [
        {
          trueAbility: Strike,
          abilityImage: "Strike"
        }
      ]
    }
  },
  banditCoverEncounters: {
    monsters: [
      {
        name: "Scoundrel",
        class: "Scavenger",
        health: 14,
        attack: 5,
        attackType: "Physical",
        defense: 2,
        defenseType: "Light",
        portrait: banditScoundrel,
        ability: [
          {
            trueAbility: Strike,
            abilityImage: "Strike"
          }
        ]
      },
      {
        name: "Bandit Mob",
        class: "Forest Creature",
        health: 33,
        attack: 5,
        attackType: "Piercing",
        defense: 1,
        defenseType: "Light",
        portrait: banditMob,
        ability: [
          {
            trueAbility: Strike,
            abilityImage: "Strike"
          }
        ]
      },
      {
        name: "Cut Throat",
        class: "Forest Creature",
        health: 19,
        attack: 6,
        attackType: "Piercing",
        defense: 1,
        defenseType: "Light",
        portrait: banditCutThroat,
        ability: [
          {
            trueAbility: Strike,
            abilityImage: "Strike"
          }
        ]
      }
    ],
    boss: {
      name: "Bandit Lord",
      class: "Forest Spirit",
      boss: true,
      health: 12,
      attack: 9,
      attackType: "Physical",
      defense: 6,
      defenseType: "Light",
      portrait: banditLord,
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
