import React, { Component } from "react";
import { Canvas } from "react-canvas-js";

const sample1 = {
  maxParticles: 70,
  colors: [
    "#00FFFF",
    "#9932CC",
    "#487EEF",
    "#FF1493",
    "#fc5c65",
    "#fed330",
    "#7FFF00",
  ],
  shapes: ["circle", "square"],
  size: 9,
  minSpeed: 0.05,
  maxSpeed: 0.2,
  alpha: 0.7,
  backgroundColor: "#1E1F29",
};

export default class App extends Component {

  render() {
    return (
      <>
        <div id="scrollableDiv" style={{ height: 300, overflow: "auto" }}>
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={true}
            scrollableTarget="scrollableDiv"
          >
            {this.state.items.map((i, index) => (
              <Canvas options={sample1} key={index} />
            ))}
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
