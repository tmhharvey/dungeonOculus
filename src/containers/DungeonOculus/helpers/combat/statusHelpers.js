import DungeonMonsters from "../dungeon/dungeonMonsters";

var statusHelpers = {
  statusAbilityHelper: (ability, character) => {
    let charOriginalDefense = character.defense;
    let activeAbility = ability;
    let statusBuffPower = ability.damage;
    let abilityCombatLog = "";
    var updatedChar = character;
    var abilityActionObject;

    var charNewStatus = statusHelpers.statusBuffCalc(
      charOriginalDefense,
      statusBuffPower,
      character
    );

    updatedChar.defense = charNewStatus;
    abilityCombatLog =
      character.name +
      " used " +
      ability.abilityName +
      " and buffed their defense by " +
      statusBuffPower +
      "!";

    abilityActionObject = {
      updatedCharacter: updatedChar,
      abilityCombatLog: abilityCombatLog
    };

    return abilityActionObject;
  },
  statusBuffCalc: (originalDefense, buffPower, character) => {
    var updatedDefense = originalDefense + buffPower;
    // var maxDefense = character.defense;
    // if (updatedHealth >= maxHealth) {
    //   updatedHealth = maxHealth;
    // }

    return updatedDefense;
  }
};

export default statusHelpers;
