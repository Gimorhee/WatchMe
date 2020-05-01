import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

export const GetInTouch2 = () => {
  const ComponentToTrack = ({ isVisible }) => {
    const topProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 700,
      config: { duration: 1000 },
    });

    const bottomProps = useSpring({
      from: { opacity: 0 },
      to: { opacity: isVisible ? 1 : 0 },
      delay: 1400,
      config: { duration: 1000 },
    });

    return (
      <div className="GetInTouch">
        <div className="GetInTouch-Content">
          <animated.div style={topProps}>
            <h3>Experience our superior service and luxury timepieces</h3>
          </animated.div>
          <animated.div style={bottomProps}>
            <Link to="/contact1">Discover More</Link>
          </animated.div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <TrackVisibility partialVisibility tag="h3" once>
        <ComponentToTrack />
      </TrackVisibility>
    </div>
  );
};
