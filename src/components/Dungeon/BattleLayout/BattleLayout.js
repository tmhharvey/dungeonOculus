import React from "react";
import "./BattleLayout.scss";

const battleLayout = props => {
  return (
    <div className="col-md-8 dungeonSelection">
      <div
        className="dungeonSelection__darkForest"
        onClick={props.dungeonSetup}
        style={{
          display: props.combatOngoing ? "none" : "inline-block"
        }}
      >
        <div
          className="dungeonSelection__darkForest--enterButton"
          onClick={() => {
            props.dungeonEntered();
            props.combatInitiated();
            props.abilitiesActive();
          }}
        >
          {" "}
          {props.dungeonInitiated
            ? "Continue On..."
            : "Enter The Forbidden Forest"}
        </div>
      </div>
    </div>
  );
};

export default battleLayout;
