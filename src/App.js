import React, { Component } from "react";
import "./App.scss";
import Layout from "./Layout/Layout.js";

import DungeonOculus from "./containers/DungeonOculus/DungeonOculus";

class App extends Component {
  state = {
    dungeonSelected: [0],
    battleInitiated: false
  };
  render() {
    return (
      <div>
        <Layout>
          <DungeonOculus />
        </Layout>
      </div>
    );
  }
}

export default App;
