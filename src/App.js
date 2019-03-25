import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import Welcome from "./Components/Welcome";
import StrainContainer from "./Containers/StrainContainer";
import MainContainer from "./Containers/MainContainer";

import "./App.css";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
        </Switch>
      </div>
    );
  }
}

export default App;
