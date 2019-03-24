import React from "react";
import "../styles/under-construction.scss";
import { AvatarWaleed } from "./avatars/waleed/avatar-waleed";

export function UnderConstruction() {
  return (
    <div id="UnderConstruction">
      <div id="HomePage">
        <div className="div--bottom__center">
          Portfolio Under Construction
        </div>
      </div>
      <div id="Coming">Coming</div>
      <div id="Soon">
        <div>S</div>
        <AvatarWaleed/>
        <div>N</div>
      </div>
    </div>
  );
}
