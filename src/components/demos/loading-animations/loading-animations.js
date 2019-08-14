import React from 'react'
import './loading-animations.scss';

export default function LoadingAnimations() {
  return (
    <div id="loaders-container">
      <div>
        <div className="loader loader-1"></div>
        <p>
          Loader 1
        </p>
      </div>
      <div>
        <div className="loader loader-2"></div>
        <p>Loader 2</p>
      </div>
      <div>
        <div className="loader loader-3">
          <div className="loader-3-inner"></div>
        </div>
        <p>Loader 3</p>
      </div>
      <div>
        <div className="loader loader-4"></div>
        <p>Loader 4</p>
      </div>
      <div>
        <div className="loader loader-5"></div>
        <p>Loader 5</p>
      </div>
      {/* <div>
        <img className="company-loader" width="350px" height="130px" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" />
      </div> */}
    </div>
  )
}
