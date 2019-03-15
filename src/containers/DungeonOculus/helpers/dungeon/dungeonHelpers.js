import dungeonMonsters from "./dungeonMonsters";

class DungeonHelpers {
  constructor(
    dungeonName,
    dungeonCss,
    monstersArray,
    dungeonBoss,
    dungeonCosmetics
  ) {
    this.dungeonName = dungeonName;
    this.dungeonCss = dungeonCss;
    this.monstersArray = monstersArray;
    this.dungeonBoss = dungeonBoss;
    this.dungeonCosmetics = dungeonCosmetics;
  }
  monsterEncounterHandler(encounters, boss) {
    var bossHealth = boss.health;
    if (encounters.length <= 0) {
      if (bossHealth <= 0) {
        return true;
      } else {
        return false;
      }
    } else {
      let selectedIndex = Math.floor(Math.random() * encounters.length);
      let selectedMonster = encounters[selectedIndex];
      encounters.splice(selectedIndex, 1);

      return selectedMonster;
    }
  }
  // bossLivingCheck = boss => {
  //   if (boss.health <= 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };
}

export default DungeonHelpers;
