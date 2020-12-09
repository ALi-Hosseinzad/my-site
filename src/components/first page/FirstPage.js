import React, { Component } from "react";
import "./../../css/FirstPage.scss";
import MainLayout from "../main layout/MainLayout";
export default function Welcome() {
  // const [checked, setChecked] = React.useState(true);
  return (
    // <div className="curtain">
    //   <div className="curtain__wrapper">
    //     <input type="checkbox" checked={checked} onChange={() => setChecked(false)} />

    //     <div className="curtain__panel curtain__panel--left">
    //       <h1>Click to reveal&nbsp;</h1>
    //     </div>

    //     <div className="curtain__content">
    <MainLayout />
    //     </div>

    //     <div className="curtain__panel curtain__panel--right">
    //       <h1>a special reward...</h1>
    //     </div>
    //   </div>
    // </div>
  );
}
