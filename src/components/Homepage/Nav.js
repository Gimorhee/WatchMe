import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <i className="far fa-paper-plane"></i> <span>WATCH ME</span>
      </Link>
    </nav>
  );
};
