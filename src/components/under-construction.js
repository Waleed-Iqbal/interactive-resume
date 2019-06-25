import React from "react";
import "../styles/under-construction.scss";
import { AvatarWaleed } from "./avatars/waleed/avatar-waleed";
import svgComingSoon from "../assets/coming-soon.svg";

export function UnderConstruction() {
  return (
    <div id="UnderConstruction">
      <div id="HomePage">
        <div className="div--bottom__center">Under Construction</div>
      </div>
      <div id="Coming">
        <div className="div--middle__center" />
      </div>
      <div id="Soon">
        <div>Coming S</div>
        <AvatarWaleed />
        <div>NNN</div>
      </div>

      {/* <img src={svgComingSoon} alt="coming-soon" /> */}
      
    </div>
  );
}
