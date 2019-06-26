import React from "react";
import {Link} from 'react-router-dom';
import "../styles/under-construction.scss";
import { AvatarWaleed } from "./avatars/waleed/avatar-waleed";

export function UnderConstruction() {
  return (
    <div id="UnderConstruction">
      <Link href="/resume">
        <h1>RESUME HERE !!!</h1>
      </Link>
      <div id="HomePage">
        <div className="div--bottom__center">
          Under Construction
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
