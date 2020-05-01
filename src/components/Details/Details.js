import React from "react";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

import "../../styles/Details/Details.css";

import bg1 from "../../images/details/bg1.jpg";
import bg2 from "../../images/details/bg2.jpg";
import bg3 from "../../images/details/bg3.jpg";
import bg4 from "../../images/details/bg4.jpg";
import bg5 from "../../images/details/bg5.jpg";
import bg6 from "../../images/details/bg6.jpg";
import bg7 from "../../images/details/bg7.jpg";
import bg8 from "../../images/details/bg8.jpg";
import bg10 from "../../images/details/bg10.jpg";
import bg11 from "../../images/details/bg11.jpg";

export const Details = () => {
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
      <div className="Details">
        <animated.div style={topProps} className="Details-Top">
          <h1>
            We craft our product with <br /> scrupulous attention to detail.
          </h1>
          <p>
            Watch Me has been providing immaculate services to all of our
            clients by designing, reparing and customizing timepieces synonymous
            with reliability, accuracy and precision. We offer a wide assortment
            of Classic and Luxury watch models to suit any wrist. Discover the
            broad selection of watches to find a superior combination of style
            and functionality.
          </p>
        </animated.div>
        <animated.div style={bottomProps} className="Details-Bottom">
          <div className="Details-Infos">
            <div className="Details-Info">
              <div className="Inner-Info">
                <img src={bg7} alt="" />
              </div>
              <div className="Inner-Info">
                <img src={bg8} alt="" />
              </div>
              <div className="Inner-Info Info-Quote">
                <p>
                  <span>‟</span>It's been many years in making, but on my mind
                  since day one<span>”</span>
                </p>
              </div>
            </div>

            <div className="Details-Info">
              <div className="Inner-Info Info-Quote">
                <p>
                  <span>‟</span>The best thing about the future is that it comes
                  one day at a time<span>”</span>
                </p>
              </div>
              <div className="Inner-Info">
                <img src={bg4} alt="" />
              </div>
              <div className="Inner-Info">
                <img src={bg3} alt="" />
              </div>
            </div>

            <div className="Details-Info">
              <div className="Inner-Info">
                <img src={bg1} alt="" />
              </div>
              <div className="Inner-Info">
                <img src={bg2} alt="" />
              </div>
              <div className="Inner-Info Info-Quote">
                <p>
                  <span>‟</span>Respect yourself enough to know that you deserve
                  the very best<span>”</span>
                </p>
              </div>
            </div>

            <div className="Details-Info">
              <div className="Inner-Info Info-Quote">
                <p>
                  <span>‟</span>Respect yourself enough to know that you deserve
                  the very best<span>”</span>
                </p>
              </div>
              <div className="Inner-Info">
                <img src={bg10} alt="" />
              </div>
              <div className="Inner-Info">
                <img src={bg5} alt="" />
              </div>
            </div>

            <div className="Details-Info">
              <div className="Inner-Info">
                <img src={bg11} alt="" />
              </div>
              <div className="Inner-Info">
                <img src={bg6} alt="" />
              </div>
              <div className="Inner-Info Info-Quote">
                <p>
                  <span>‟</span>I know what I want and I'g gonna get it. It's
                  that simple
                  <span>”</span>
                </p>
              </div>
            </div>
          </div>
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
