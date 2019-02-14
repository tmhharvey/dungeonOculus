import React from "react";
import "./BattleLayout.scss";

const battleLayout = props => {
  return (
    <div className="col-md-8 dungeonSelection">
      <div
        className="dungeonSelection--darkForest"
        onClick={props.dungeonSetup}
      >
        Enter The Dark Forest
      </div>
    </div>
  );
};

export default battleLayout;
