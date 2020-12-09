import React, { Component } from "react";
import Particles from "react-particles-js";
export default class App extends Component {
  render() {
    console.log(this.props.param);
    return <Particles params={this.props.param} />;
  }
}
