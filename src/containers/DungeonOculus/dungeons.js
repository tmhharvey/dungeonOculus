import DungeonHelpers from "./dungeonHelpers";
import DungeonMonsters from "./dungeonMonsters";

var Forest = new DungeonHelpers(
  "Forbidden Forest",
  DungeonMonsters.darkForestMonsters,
  "Boss",
  "Cosmetics"
);

var dungeons = {
  darkForest: Forest
};

export default dungeons;
