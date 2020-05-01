import React from "react";
import { useSpring, animated } from "react-spring";
import TrackVisibility from "react-on-screen";

import bg from "../../images/watches.jpeg";

export const Service = () => {
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
      <div id="service" className="Service">
        <div className="Service-Inner">
          <animated.div style={topProps}>
            <h1>Services</h1>
          </animated.div>
          <animated.div style={bottomProps} className="Service-Contents">
            <div className="Service-Content">
              <i className="fas fa-american-sign-language-interpreting"></i>
              <h6>CONSULTATION</h6>
              <p>
                You want to know more about watches but don't know what to do?
                Our watch experts are here for you to provide the custom
                consultation to answer every single question you have.
              </p>
            </div>
            <div className="Service-Content">
              <i className="fas fa-wrench"></i>
              <h6>CUSTOMIZATION</h6>
              <p>
                Hoping to customize your favorite watch? Bring it to us. Our
                highly experienced designers and custom experts will provide you
                the dream customization.
              </p>
            </div>
            <div className="Service-Content">
              <i className="fas fa-retweet"></i>
              <h6>TRADE</h6>
              <p>
                Looking to trade your watch with equal or similar value? We will
                provide you the superior trading service for your watch to be
                traded safely and successfully.
              </p>
            </div>
            <div className="Service-Content">
              <i className="fas fa-tools"></i>
              <h6>REPAIR</h6>
              <p>
                There are not many companies providing services to repair the
                luxury watches but we are one of them. Our experts will repair
                your watch and bring it back to the brand-new condition.
              </p>
            </div>
            <div className="Service-Content">
              <i className="fas fa-hand-holding-usd"></i>
              <h6>LOOKING TO BUY</h6>
              <p>
                Looking for new watches? We are here to help you. Our advisors
                will provide the variety types of watches depending on your
                budget, favorite brand and styles.
              </p>
            </div>
            <div className="Service-Content">
              <i className="fas fa-search-dollar"></i>
              <h6>LOOKING TO SELL</h6>
              <p>
                You need your watch gone? We will price your watch with the
                maximum possible value, either by it ourselves or provide you
                other sources wher you can sell your watches.
              </p>
            </div>
          </animated.div>
        </div>
      </div>
    );
  };
  return (
    <TrackVisibility partialVisibility tag="p" once>
      <ComponentToTrack />
    </TrackVisibility>
  );
};
