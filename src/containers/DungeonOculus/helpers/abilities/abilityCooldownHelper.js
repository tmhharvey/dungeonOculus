
var abilityCooldownHelpers = {

    cooldownCheck = (ability) => {
       const baseCooldown = ability.setCooldown;
       var cooldownCounter = ability.cooldownCounter

       if (cooldownCounter <= 0) {
           cooldownCounter = baseCooldown;
       } else if (cooldownCounter > 0) {
        cooldownCounter--;
       }

        return cooldownCounter


    }
 
    // when a character uses an ability, that abilties 'cooldown' is activated,
     //every time a combatTurn happens, the counter is reduced by 1,
     
    //as long as the cooldownCounter is < 0, the ability must be disabled and can not be used,
   
    //once the ability's cooldown hits 0, the ability cool down is reset


};

export default abilityCooldownHelpers;
