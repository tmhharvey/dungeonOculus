import React, { Component } from "react";
import "../containers/App.scss";
import Layout from "../containers/Layout/Layout.js";
import BurgerBuilder from "../containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
