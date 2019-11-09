import React from 'react';
import { Link } from 'react-router-dom';


export function Error404() {
  return (
    <h1>
      Page not found. Go to <Link to={this.props.linkTo}> homepage. </Link>
    </h1>
  )
}
