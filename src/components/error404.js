import React from "react";
import "../styles/globals.scss";
import { Link } from "react-router-dom";
import { AppNavigationLinks } from "../scripts/pages-data";
import { PageNotFound } from "../scripts/pages-data";

export function Error404() {
  document.title = PageNotFound.pageTitle;

  return (
    <h1>
      Page not found. Go to
      <Link to={AppNavigationLinks.home} className="link">
        &nbsp;homepage.
      </Link>
    </h1>
  );
}
