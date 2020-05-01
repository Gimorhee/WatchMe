import React, { useEffect } from "react";

import { Main } from "./Main";
import { GetInTouch } from "./GetInTouch";
import { Service } from "./Service";
import { Watch } from "../Watch/Watch";
import { Details } from "../Details/Details";
import { GetInTouch2 } from "./GetInTouch2";
import { Footer } from "../Footer/Footer";

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
      <Details />
      <GetInTouch2 />
      <Footer />
    </div>
  );
};
