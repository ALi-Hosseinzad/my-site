import React, { Component } from "react";
import Profile from "../profile/Profile";
import Projects from "../Projects/Projects";
import Experiences from "../Experiences/Experiences";
import Abilities from "../Abilities/Abilities";
import Cantact from "../Contact/Contact";
import Canvas from "./Canvas";
import "./../../css/Canvas.css";
import { PARAMS } from "./params";
const paramsMap = [0, 1, 2, 3, 1];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: PARAMS,
    };
  }

  render() {
    return (
      <React.Fragment>
        {paramsMap.map((i, index) => {
          return <Canvas param={this.state.params[i]} key={index} />;
        })}
        <div>
          <Profile />
          <Experiences />
          <Abilities />
          {/* <Projects /> */}
          <Cantact />
        </div>
      </React.Fragment>
    );
  }
}
