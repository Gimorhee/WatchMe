import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <i className="fas fa-hourglass-half"></i> <span>WATCH ME</span>
      </Link>
    </nav>
  );
};
