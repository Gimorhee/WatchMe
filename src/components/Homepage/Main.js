import React from "react";
import { Nav } from "./Nav";

import { useSpring, animated } from "react-spring";

export const Main = () => {
  const mainProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 600,
    config: { duration: 1200 },
  });

  const bottomProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1400,
    config: { duration: 1000 },
  });

  return (
    <div className="Main">
      <Nav />

      <div className="Main-Content">
        <animated.div style={mainProps}>
          <h1>FOLLOW YOUR TIME.</h1>
        </animated.div>
        <animated.div style={bottomProps}>
          <p>
            Trusted by the world's largest clients, labels and brands to collect
            more royalties, consult about new premium watch, fix and customize
            with more transparency and technology than anyone else.{" "}
          </p>
        </animated.div>
      </div>
    </div>
  );
};
