import React from "react";
import { Nav } from "./Nav";

import { useSpring, animated } from "react-spring";

export const Main = () => {
  const props = useSpring({
    from: { number: 0 },
    to: { number: 100 },
    config: { duration: 100000 },
  });

  return (
    <div className="Main">
      <Nav />

      <div className="Main-Content">
        <h1>FOLLOW YOUR TIME.</h1>
        <p>
          Trusted by the world's largest clients, labels and brands to collect
          more royalties, consult about your next watch, fix more safely and
          with more transparency than anyone else.{" "}
        </p>
        <animated.span>{console.log(props.number)}</animated.span>
      </div>
    </div>
  );
};
