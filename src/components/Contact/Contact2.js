import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import "../../styles/Contact/Contact.css";

export const Contact2 = ({ history }) => {
  //   Animation Props
  const props = useSpring({
    from: { marginTop: -5000 },
    to: { marginTop: 0 },
    config: { duration: 1000 },
  });

  // Contact Content Props
  const [contactInfo, setContactInfo] = useState();
  const [noContent] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const onChange = (e) => {
    setContactInfo(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter" && contactInfo && validateEmail(contactInfo)) {
      history.push("/contact3");
    } else if (e.key === "Enter" && !noContent) {
      setShowWarning(true);
    } else if (e.key === "Enter" && !validateEmail(contactInfo)) {
      setShowWarning(true);
    }
  };

  return (
    <div className="Contact">
      <animated.div style={props} className="Contact-Content">
        <div className="Contact-Q">
          <span>2</span>
          <i className="fas fa-arrow-right"></i>
          <h1>Email Address *</h1>
        </div>
        <div className="Contact-A">
          <input
            type="email"
            placeholder="email@example.com"
            value={contactInfo}
            onChange={(e) => onChange(e)}
            onKeyPress={(e) => onKeyPress(e)}
          />
        </div>
        {contactInfo && (
          <div className="Contact-S">
            <Link
              to={validateEmail(contactInfo) ? "/contact3" : "/contact2"}
              onClick={() => setShowWarning(true)}
            >
              OK{" "}
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
          <div className="Contact-Warning">Please Fill Your Email.</div>
        )}
        {showWarning && !validateEmail(contactInfo) && contactInfo && (
          <div className="Contact-Warning">Please Enter Valid Email.</div>
        )}
      </animated.div>
    </div>
  );
};
