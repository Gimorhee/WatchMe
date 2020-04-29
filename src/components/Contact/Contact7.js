import React from "react";
import { Link } from "react-router-dom";

export const Contact7 = () => {
  return (
    <div className="Contact">
      <div className="Contact-TY">
        <div className="Contact-Logo">
          <i className="far fa-paper-plane"></i> <span>WATCHME</span>
        </div>
        <h3>
          Thank you for taking your time to fill up the questions. We will get
          back to you as soon as possible.
        </h3>
        <Link to="/">Back To Home</Link>
      </div>
    </div>
  );
};
