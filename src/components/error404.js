import React from 'react';
import "../styles/globals.scss"
import { Link } from 'react-router-dom';
import { NavigationLinks } from '../scripts/variables';


export function Error404() {
  return (
    <h1>
      Page not found.
      Go to
      <Link to={NavigationLinks.home} className='link'>
        homepage.
      </Link>
    </h1>
  )
}
