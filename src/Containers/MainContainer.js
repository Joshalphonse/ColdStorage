import React, { Component } from "react";
import StrainContainer from "./StrainContainer";
const URL = "http://localhost:3000/api/v1/strains";
class MainContainer extends Component {
  state = {
    strains: []
  };

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(strains =>
        this.setState({
          strains: strains
        })
      );
  }

  render() {
    return <StrainContainer strains={this.state.strains} />;
  }
}
export default MainContainer;
