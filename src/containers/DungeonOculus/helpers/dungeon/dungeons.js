import DungeonHelpers from "./dungeonHelpers";
import DungeonMonsters from "./dungeonMonsters";

var darkForest = new DungeonHelpers(
  "Forbidden Forest",
  "darkForest",
  DungeonMonsters.darkForestEncounters.monsters,
  DungeonMonsters.darkForestEncounters.boss,
  "Cosmetics"
);

var banditCove = new DungeonHelpers(
  "Bandit's Cove",
  "banditCove",
  DungeonMonsters.banditCoverEncounters.monsters,
  DungeonMonsters.banditCoverEncounters.boss,
  "Cosmetics"
);

var necroDwell = new DungeonHelpers(
  "Necro Dwelling",
  "necroDwell",
  DungeonMonsters.necroDwellEncounters.monsters,
  DungeonMonsters.necroDwellEncounters.boss,
  "Cosmetics"
);

var dungeons = [
  {
    selectedDungeon: darkForest
  },
  {
    selectedDungeon: banditCove
  },
  {
    selectedDungeon: necroDwell
  }
];

export default dungeons;
