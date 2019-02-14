class DungeonHelpers {
  constructor(dungeonName, monstersArray, dungeonBoss, dungeonCosmetics) {
    this.dungeonName = dungeonName;
    this.monstersArray = monstersArray;
    this.dungeonBoss = dungeonBoss;
    this.dungeonCosmetics = dungeonCosmetics;
  }
  monsterEncounterHandler(monstersArray) {
    let selectedIndex = Math.floor(Math.random() * 2);
    let selectedMonster = monstersArray[selectedIndex];
    this.monstersArray.splice(selectedIndex, 1);
    console.log(selectedMonster);
    console.log(this.monstersArray);
    return selectedMonster;
  }
  damageMultiplierCheck(defenseType) {}
}

export default DungeonHelpers;
