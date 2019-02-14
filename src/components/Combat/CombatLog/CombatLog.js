import React from "react";
import "./CombatLog.scss";

const combatLog = props => {
  let updatedLogs = props.combatLogArray.map((logs, index) => {
    return <p key={logs + index}>{logs}</p>;
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
