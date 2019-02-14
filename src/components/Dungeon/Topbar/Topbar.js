import React from "react";
import "./Topbar.scss";

const Topbar = props => {
  return (
    <div className="row text-center dungeonTopbar">
      <div className="col-md-8 dungeonTopbar__section">
        <h3>Dungeon Name: {props.dungeonName}</h3>
      </div>
      <div className="col-md-4 dungeonTopbar__section" />
    </div>
  );
};

export default Topbar;
