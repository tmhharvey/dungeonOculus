class AbilityCreation {
  constructor(
    abilityName,
    type,
    tooltip,
    damage,
    AttackType,
    healAmount,
    cooldownCounter,
    setCooldown
  ) {
    this.abilityName = abilityName;
    this.type = type;
    this.tooltip = tooltip;
    this.damage = damage;
    this.AttackType = AttackType;
    this.healAmount = healAmount;
    this.cooldownCounter = cooldownCounter;
    this.setCooldown = setCooldown;
  }
}

export default AbilityCreation;
