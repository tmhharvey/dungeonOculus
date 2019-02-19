import React, { Component } from "react";
import "./Introduction.scss";

class Introduction extends Component {
  render() {
    return (
      <div className="gameIntroduction">
        <div className="gameIntroduction__content">
          <div className="row">
            <div className="col-md-12">
              {" "}
              <h3 className="text-center">Welcome to Dungeon Oculus!</h3>
              <p>Dungeon Oculus is a RPG game built in ReactJS and SaSS! </p>
              <p>
                You are an adventurer hired by the Oculus Guild to clear out the
                monsters roaming the land.{" "}
              </p>
              <p>
                Unfortunately, The Guild is a little short-handed and set you
                out on this quest alone.
              </p>
              <p>
                You will have to use all your strength, wit, and magic to clear
                out the monsters that inhabit each dungeon... just be wary of
                what might await you inside!{" "}
              </p>
              <div
                className="gameIntroduction__content__startGame"
                onClick={this.props.startGame}
              >
                {" "}
                START GAME{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
