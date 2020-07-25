import React from "react";
import "./loading-animations.scss";
import { LoadingAnimationsPage } from "../../../scripts/pages-data.js";

export default function LoadingAnimations() {
  document.title = LoadingAnimationsPage.pageTitle;

  return (
    <div id='loaders-container'>
      <SimpleLoader loaderClass='loader-1' />
      <SimpleLoader loaderClass='loader-2' />
      <div className='loader-container'>
        <div className='loader loader-3'>
          <div className='loader-3-inner'></div>
        </div>
        <p className='loader-name'>Loader 3</p>
      </div>
      <SimpleLoader loaderClass='loader-4' />
      <SimpleLoader loaderClass='loader-5' />
      {/* <div>
        <img className="company-loader" width="350px" height="130px" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" />
      </div> */}
    </div>
  );
}

// Simple loader means the one with no nesting inside the div with loader-x class
function SimpleLoader({ loaderClass }) {
  // Converting "loader-1" to "Loader 1"
  let loaderName = loaderClass.split("-").join(" ").toString();
  loaderName = loaderName[0].toUpperCase() + loaderName.slice(1);

  return (
    <div className='loader-container'>
      <div className={`loader ${loaderClass}`}></div>
      <p className='loader-name'>{loaderName}</p>
    </div>
  );
}
