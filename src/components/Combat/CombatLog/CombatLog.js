import React from "react";
import "./CombatLog.scss";

const combatLog = props => {
  if (props.combatLogArray.length >= 8) {
    props.combatLogArray.splice(0, 3);
  }
  let updatedLogs = props.combatLogArray.map((logs, index) => {
    return <span key={logs + index}>{logs}</span>;
  });

  return (
    <div className="col-md-2">
      <div className="combatLog">
        <h3>Combat Log</h3>
        <div className="combatLog__textDisplay text-left">{updatedLogs}</div>
      </div>
    </div>
  );
};

export default combatLog;
