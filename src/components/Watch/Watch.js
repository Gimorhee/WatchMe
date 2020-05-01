import React, { useState } from "react";
import { Regular } from "./Regular";
import { Classic } from "./Classic";
import { Premium } from "./Premium";
import { Luxury } from "./Luxury";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

import "../../styles/Watch/Watch.css";

export const Watch = () => {
  const [component, setComponent] = useState({
    regular: true,
    classy: false,
    premium: false,
    luxury: false,
  });

  const { regular, classic, premium, luxury } = component;

  const showRegular = () => {
    setComponent({
      regular: true,
      classic: false,
      premium: false,
      luxury: false,
    });
  };

  const showClassic = () => {
    setComponent({
      regular: false,
      classic: true,
      premium: false,
      luxury: false,
    });
  };

  const showPremium = () => {
    setComponent({
      regular: false,
      classic: false,
      premium: true,
      luxury: false,
    });
  };

  const showLuxury = () => {
    setComponent({
      regular: false,
      classic: false,
      premium: false,
      luxury: true,
    });
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
            Casual
          </button>
          <button
            onClick={() => showClassic()}
            className={classic && "Current"}
          >
            classic
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
            {classic && "$1,000 ~ $5,000"}
            {premium && "$5,000 ~ 15,000"} {luxury && "$20,000 ~ $75,000"}{" "}
          </p>
        </animated.div>
        <animated.div style={bottomProps} className="Watch-Bottom">
          {regular && <Regular />}
          {classic && <Classic />}
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
