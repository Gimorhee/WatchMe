import React, { useState } from "react";
import { Regular } from "./Regular";
import { Premium } from "./Premium";
import { Luxury } from "./Luxury";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

import "../../styles/Watch/Watch.css";

export const Watch = () => {
  const [component, setComponent] = useState({
    regular: true,
    premium: false,
    luxury: false,
  });

  const { regular, premium, luxury } = component;

  const showRegular = () => {
    setComponent({ regular: true, premium: false, luxury: false });
  };

  const showPremium = () => {
    setComponent({ regular: false, premium: true, luxury: false });
  };

  const showLuxury = () => {
    setComponent({ regular: false, premium: false, luxury: true });
  };

  // ANIMATION PROPS
  const ComponentToTrack = ({ isVisible }) => {
    const topProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      config: { duration: 500 },
    });

    const bottomProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 700,
      config: { duration: 1000 },
    });

    return (
      <div className="Watch-Container">
        <animated.div style={topProps} className="Watch-Top">
          <h1>Watches</h1>
          <button
            onClick={() => showRegular()}
            className={regular && "Current"}
          >
            Regular
          </button>
          <button
            onClick={() => showPremium()}
            className={premium && "Current"}
          >
            Premium
          </button>
          <button onClick={() => showLuxury()} className={luxury && "Current"}>
            Luxury
          </button>
          <p>
            Price Range: {regular && "$200 ~ $500"}{" "}
            {premium && "$2,000 ~ 5,000"} {luxury && "$7,500 ~ $50,000"}{" "}
          </p>
        </animated.div>
        <animated.div style={bottomProps} className="Watch-Bottom">
          {regular && <Regular />}
          {premium && <Premium />}
          {luxury && <Luxury />}
        </animated.div>
      </div>
    );
  };

  return (
    <TrackVisibility partialVisibility once>
      <ComponentToTrack />
    </TrackVisibility>
  );
};
