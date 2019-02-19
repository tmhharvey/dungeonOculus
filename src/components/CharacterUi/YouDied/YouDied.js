import React, { Component } from "react";
import "./YouDied.scss";

class YouDied extends Component {
  render() {
    return (
      <div className="youDied">
        <div className="youDied__content">
          <div className="row">
            <div className="col-md-12">
              {" "}
              <h3 className="text-center">YOU DIED</h3>
              <div
                className="youDied__content__startGame"
                onClick={this.props.startGame}
              >
                {" "}
                RESTART GAME{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YouDied;
