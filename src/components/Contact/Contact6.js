import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export const Contact6 = ({ history }) => {
  //   Animation Props
  const props = useSpring({
    from: { marginTop: -5000 },
    to: { marginTop: 0 },
    config: { duration: 1300 },
  });

  // Contact Content Props
  const [contactInfo, setContactInfo] = useState();
  const [noContent] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const onChange = (e) => {
    setContactInfo(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter" && contactInfo) {
      history.push("/contact6");
    } else if (e.key === "Enter" && !noContent) {
      setShowWarning(true);
    }
  };

  return (
    <div className="Contact">
      <animated.div style={props} className="Contact-Content">
        <div className="Contact-Q">
          <span>5</span>
          <i className="fas fa-arrow-right"></i>
          <h1>
            If you have any additional comments or questions, please let us
            know! *
          </h1>
        </div>
        <div className="Contact-A">
          <input
            type="text"
            placeholder="Type your answer here..."
            value={contactInfo}
            onChange={(e) => onChange(e)}
            onKeyPress={(e) => onKeyPress(e)}
          />
        </div>
        {contactInfo && (
          <div className="Contact-S">
            <Link to="/contact7">
              Submit{" "}
              <span>
                <i className="fas fa-check"></i>{" "}
              </span>
            </Link>
            <p>
              press <strong>Enter</strong>{" "}
              <span>
                <i className="fas fa-caret-right"></i>
              </span>
            </p>
          </div>
        )}
        {showWarning && !contactInfo && (
          <div className="Contact-Warning">Please Fill Your Answer.</div>
        )}
      </animated.div>
    </div>
  );
};
