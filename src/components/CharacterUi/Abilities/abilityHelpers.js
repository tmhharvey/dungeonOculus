class AbilityCreation {
  constructor(abilityName, tooltip, damage, AttackType) {
    this.abilityName = abilityName;
    this.tooltip = tooltip;
    this.damage = damage;
    this.AttackType = AttackType;
  }
  useAbility(defenderDefType) {
    let damageMultiplier = this.damageMultiplierCheck(defenderDefType);
    let damageRangeCalc = Math.floor(Math.random() * this.damage) + this.damage;

    let damage = damageRangeCalc * damageMultiplier;
    console.log("The base ability damage is: " + this.damage);
    console.log("The calculated range damage is: " + damageRangeCalc);
    console.log(defenderDefType);
    console.log("Damage Multiplier: " + damageMultiplier);
    console.log("The returned damage is: " + damage);
    return damage;
  }
  damageMultiplierCheck(defenseType) {
    let damageMultiplier = 1;

    if (this.AttackType === "Physical") {
      switch (defenseType) {
        case "Heavy":
          damageMultiplier = 1;
          break;
        case "Light":
          damageMultiplier = 1.5;
          break;
        case "Enchanted":
          damageMultiplier = 1;
          break;
        default:
          damageMultiplier = 1;
      }
    }

    if (this.AttackType === "Magic") {
      switch (defenseType) {
        case "Heavy":
          damageMultiplier = 2;
          break;
        case "Light":
          damageMultiplier = 1.5;
          break;
        case "Enchanted":
          damageMultiplier = 0.5;
          break;
        default:
          damageMultiplier = 1;
      }
    }

    if (this.AttackType === "Piercing") {
      switch (defenseType) {
        case "Heavy":
          damageMultiplier = 0.5;
          break;
        case "Light":
          damageMultiplier = 2;
          break;
        case "Enchanted":
          damageMultiplier = 1;
          break;
        default:
          damageMultiplier = 1;
      }
    }

    return damageMultiplier;
  }
}

export default AbilityCreation;
