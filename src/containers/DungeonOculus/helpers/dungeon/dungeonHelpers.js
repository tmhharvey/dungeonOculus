class DungeonHelpers {
  constructor(dungeonName, monstersArray, dungeonBoss, dungeonCosmetics) {
    this.dungeonName = dungeonName;
    this.monstersArray = monstersArray;
    this.dungeonBoss = dungeonBoss;
    this.dungeonCosmetics = dungeonCosmetics;
  }
  monsterEncounterHandler(monstersArray) {
    if (monstersArray.length <= 0) {
      //this will then handle the boss fight(s)
      //after the boss fight -> dungeonInitiated: false
      return null;
    }
    let selectedIndex = Math.floor(Math.random() * monstersArray.length);
    let selectedMonster = monstersArray[selectedIndex];
    this.monstersArray.splice(selectedIndex, 1);
    console.log(selectedMonster);
    console.log(this.monstersArray);
    return selectedMonster;
  }
  damageMultiplierCheck(defenseType) {}
}

export default DungeonHelpers;
