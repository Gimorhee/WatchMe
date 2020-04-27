import React from "react";

import { Main } from "./Main";
import { GetInTouch } from "./GetInTouch";

import "../../styles/Homepage/Homepage.css";

export const Homepage = () => {
  return (
    <div className="Homepage">
      <Main />
      <GetInTouch />
    </div>
  );
};
