import React from 'react'
import './loading-animations.scss';

export default function LoadingAnimations() {
  return (
    <div id="loaders-container">
      <div>
        <div className="loader-1"></div>
        <p>
          loader-1
        </p>
      </div>
      <div>
        <div className="loader-2"></div>
        <p>loader-2</p>
      </div>
      <div>
        <div className="loader-3">
          <div className="loader-3-inner"></div>
        </div>
        <p>loader-3</p>
      </div>
      <div>
        <div className="loader-4"></div>
        <p>loader-4</p>
      </div>
      <div>
        <div className="loader-5"></div>
        <p>loader-5</p>
      </div>
      {/* <div>
        <img className="company-loader" width="350px" height="130px" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" />
      </div> */}
    </div>
  )
}
