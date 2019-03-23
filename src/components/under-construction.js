import React from "react";
import "../styles/css/under-construction.min.css";

export function UnderConstruction() {
  return (
    <div id="UnderConstruction">
      <div id="HomePage">
        <div className="div--bottom__center">Home Page</div>
      </div>
      <div id="Coming">Coming</div>
      <div id="Soon">
        <div className="div--middle__center">S</div>
        <div id="AvatarFace">
          <div className="avatar--glasses">
            <div className="temple left-temple"></div>
            <div className="frame"></div>
            <div className="glasses-bridge"></div>
            <div className="frame"></div>
            <div className="temple right-temple"></div>
          </div>
        </div>
        <div>N</div>
      </div>
    </div>
  );
}
