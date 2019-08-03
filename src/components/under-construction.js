import React from "react";
import { AvatarWaleed } from "./avatars/waleed/avatar-waleed";
import "../styles/under-construction.scss";

export default function UnderConstruction(props) {
  return (
    <div id="UnderConstruction">
      <div id="HomePage">
        <div className="div--bottom__center">
          <strong><em>{props.heading}</em></strong> under construction, stay tuned.
        </div>
      </div>
      <div id="Coming">
        <div className="div--middle__center"></div>
      </div>
      <div id="Soon">
        <div>Coming S</div>
        <AvatarWaleed />
        <div>N</div>
      </div>
    </div>
  );
}
