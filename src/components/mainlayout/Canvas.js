import React, { Component } from "react";
import Particles from "react-particles-js";
export default class App extends Component {
  render() {
    return <Particles params={this.props.param} />;
  }
}
