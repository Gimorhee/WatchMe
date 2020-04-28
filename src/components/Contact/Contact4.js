import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export const Contact4 = () => {
  //   Animation Props
  const props = useSpring({
    from: { marginTop: -5000 },
    to: { marginTop: 0 },
    config: { duration: 1300 },
  });

  const [choice, setChoice] = useState({
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
  });

  const { a, b, c, d, e } = choice;

  const onClickA = () => {
    if (b && c && d && e) {
      setChoice({ ...choice, a: !a });
    }
  };
  const onClickB = () => {
    if (a && c && d && e) {
      setChoice({ ...choice, b: !b });
    }
  };
  const onClickC = () => {
    if (a && b && d && e) {
      setChoice({ ...choice, c: !c });
    }
  };
  const onClickD = () => {
    if (a && b && c && e) {
      setChoice({ ...choice, d: !d });
    }
  };
  const onClickE = () => {
    if (a && c && d && b) {
      setChoice({ ...choice, e: !e });
    }
  };

  return (
    <div className="Contact">
      {" "}
      <animated.div style={props} className="Contact-Content">
        <div className="Contact-Q">
          <span>4</span>
          <i className="fas fa-arrow-right"></i>
          <h1>When do you need your service done? * </h1>
        </div>

        <span className="Content-Multiple">Choose most appropriate one</span>

        <div className="Content-Choices">
          <button
            className={a ? "Content-Choice" : "Chosen"}
            onClick={() => onClickA()}
          >
            <div className="Content-Type">
              <span>A</span>
              <p>Immediately</p>
            </div>
            <i className="fas fa-check"></i>
          </button>
          <button
            className={b ? "Content-Choice" : "Chosen"}
            onClick={() => onClickB()}
          >
            <div className="Content-Type">
              <span>B</span>
              <p>3-5 days</p>
            </div>
            <i className="fas fa-check"></i>
          </button>
          <button
            className={c ? "Content-Choice" : "Chosen"}
            onClick={() => onClickC()}
          >
            <div className="Content-Type">
              <span>C</span>
              <p>1-2 weeks</p>
            </div>
            <i className="fas fa-check"></i>
          </button>
          <button
            className={d ? "Content-Choice" : "Chosen"}
            onClick={() => onClickD()}
            onKeyPress={(e) => console.log(e.key)}
          >
            <div className="Content-Type">
              <span>D</span>
              <p>1-2 months</p>
            </div>
            <i className="fas fa-check"></i>
          </button>
          <button
            className={e ? "Content-Choice" : "Chosen"}
            onClick={() => onClickE()}
          >
            <div className="Content-Type">
              <span>E</span>
              <p>Got a lot of time</p>
            </div>
            <i className="fas fa-check"></i>
          </button>
        </div>

        {(!a || !b || !c || !d || !e) && (
          <div className="Contact-S">
            <Link to="/contact5">
              OK{" "}
              <span>
                <i className="fas fa-check"></i>{" "}
              </span>
            </Link>
          </div>
        )}
      </animated.div>
    </div>
  );
};
