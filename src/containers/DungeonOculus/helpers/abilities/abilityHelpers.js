class AbilityCreation {
  constructor(
    abilityName,
    type,
    tooltip,
    damage,
    AttackType,
    healAmount,
    cooldownCounter,
    setCooldown,
    abilityDisabled
  ) {
    this.abilityName = abilityName;
    this.type = type;
    this.tooltip = tooltip;
    this.damage = damage;
    this.AttackType = AttackType;
    this.healAmount = healAmount;
    this.cooldownCounter = cooldownCounter;
    this.setCooldown = setCooldown;
    this.abilityDisabled = abilityDisabled;
  }
}

export default AbilityCreation;
