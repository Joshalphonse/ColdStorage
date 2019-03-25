import React, { Component } from "react";
import Strain from "../Components/Strain";

class StrainContrainer extends Component {
  render() {
    let strainList = this.props.strains.map(strains => (
      <Strain key={strains.id} strain={strains} />
    ));

    return <h1>{strainList}</h1>;
  }
}
export default StrainContrainer;
