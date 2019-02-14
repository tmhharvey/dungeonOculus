import React from "react";
import "./Combat.scss";

import CombatLog from "./CombatLog/CombatLog";

const Combat = props => <CombatLog combatLogArray={props.combatLogArray} />;

export default Combat;

//on an ability click, I need the ability to activate

//I need the damageCalc functions to fire and then for the monster health to decrease

// I then need the combat log to be updated with what happened
