import React, { Component } from "react";
import "./Modal.scss";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  render() {
    return (
      <>
        <Backdrop
          show={this.props.gameStarted}
          topStyle={"0%"}
          leftStyle={"0%"}
        />
        <div
          className="Modal"
          style={{
            transform: this.props.gameStarted
              ? "translateY(-100vh)"
              : "translate(-50%, -50%)",
            opacity: this.props.gameStarted ? "0" : "1"
          }}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}
export default Modal;
