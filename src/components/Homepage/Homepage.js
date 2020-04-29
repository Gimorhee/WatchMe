import React, { useEffect } from "react";

import { Main } from "./Main";
import { GetInTouch } from "./GetInTouch";
import { Service } from "./Service";
import { Watch } from "../Watch/Watch";

import "../../styles/Homepage/Homepage.css";

export const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Homepage">
      <Main />
      <GetInTouch />
      <Service />
      <Watch />
    </div>
  );
};
