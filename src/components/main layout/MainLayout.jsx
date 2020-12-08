import React, { Component } from "react";
import { Canvas, importAll } from "react-canvas-js";
import Profile from "./../profile/Profile";
import Experiences from "./../Experiences/Experiences";
import Abilities from "../Abilities/Abilities";
import "./../../css/Canvas.css";
let icons = importAll(
  require.context("./../../img/icons", false, /\.(jpg|jpeg|png|svg)$/)
);

icons = icons.map((icon) => {
  return {
    type: "image",
    src: icon,
  };
});
console.log(icons);

const particleOptions = [
  {
    maxParticles: 50,
    colors: ["#2E1D62", "#513D91", "#487EEF", "#11A887", "#fc5c65", "#fed330"],
    shapes: ["circle", "square"],
    size: 8,
    minSpeed: 0.07,
    maxSpeed: 0.2,
    alpha: 0.7,
    backgroundColor: "#1E1F29",
  },
  {
    maxParticles: 70,
    colors: ["#fff"],
    shapes: ["circle"],
    size: 2,
    minSpeed: 0.06,
    maxSpeed: 0.2,
    alpha: 0.7,
    backgroundColor: "#1E1F29",
  },
  {
    maxParticles: 0,
    shapes: icons,
    size: 80,
    minSpeed: 0.1,
    maxSpeed: 0.3,
    alpha: 0.9,
    backgroundColor: "#1E1F29",
  },
];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {height: 460};  
  }
  render() {
    const examples = particleOptions.map((option, index) => {
      return <Canvas options={option} height={this.state.height}/>;
    });
    // const canvas=document.getElementsByTagName("canvas");
    // if(canvas.getAttribute("height")!== this.state.height){
    //   console.log("val");
    // }
    return (
      <>
        <div className="canvas">{examples}</div>
        <Profile />
        <Experiences />
        <Abilities />
      </>
    );
  }
}

