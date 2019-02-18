import DungeonMonsters from "../dungeon/dungeonMonsters";

var healingHelpers = {
  healingAbilityHandler: (ability, healer) => {
    let healersOriginalHealth = healer.health;
    let activeAbility = ability;
    let healingPower = ability.healAmount;
    let abilityCombatLog = "";
    var updatedHealer = healer;
    var abilityActionObject;

    var healersNewHealth = healingHelpers.totalHealingCalc(
      healersOriginalHealth,
      healingPower,
      healer
    );

    updatedHealer.health = healersNewHealth;
    abilityCombatLog =
      healer.name +
      " used " +
      ability.abilityName +
      " and healed themselves for " +
      healingPower;

    abilityActionObject = {
      updatedCharacter: updatedHealer,
      abilityCombatLog: abilityCombatLog
    };

    return abilityActionObject;

    // when a character uses an ability, that abilties 'cooldown' is activated,
    //as long as the cooldownCounter is < 0, the ability must be disabled and can not be used,
    //every time a combatTurn happens, the counter is reduced by 1,
    //once the ability's cooldown hits 0, the ability cool down is reset
  },
  totalHealingCalc: (originalHealth, healingPower, healer) => {
    var updatedHealth = originalHealth + healingPower;
    var maxHealth = healer.maxHealth;
    if (updatedHealth >= maxHealth) {
      updatedHealth = maxHealth;
    }

    return updatedHealth;
  }
};

export default healingHelpers;
