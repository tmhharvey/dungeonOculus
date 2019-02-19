import damageHelper from "./combat/damageHelpers";
import healHelper from "./combat/healingHelpers";
import statusHelpers from "./combat/statusHelpers";

var abilityActionHelper = {
  abilityActionObject: (ability, characterOne, characterTwo) => {
    switch (ability.type) {
      case "damage":
        var abilityActionObject = damageHelper.damageAbilityHandler(
          ability,
          characterOne,
          characterTwo
        );

        return abilityActionObject;

        break;
      case "heal":
        var abilityActionObject = healHelper.healingAbilityHandler(
          ability,
          characterOne
        );
        return abilityActionObject;

        break;

      case "status":
        var abilityActionObject = statusHelpers.statusAbilityHelper(
          ability,
          characterOne
        );
        return abilityActionObject;

        break;
      default:
    }
  }
};

export default abilityActionHelper;
