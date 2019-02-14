import React, { Component } from "react";
import "./Layout.scss";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar.js";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer.js";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  };
  sideDrawerOpenHandler = () => {
    this.setState({
      showSideDrawer: true
    });
  };
  render() {
    return (
      <>
        <Toolbar
          show={this.sideDrawerOpenHandler}
          closed={this.sideDrawerClosedHandler}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={"Content"}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
