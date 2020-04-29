import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export const Contact3 = () => {
  //   Animation Props
  const props = useSpring({
    from: { marginTop: -5000 },
    to: { marginTop: 0 },
    config: { duration: 1000 },
  });

  const [choice, setChoice] = useState({
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
  });

  const { a, b, c, d, e, f } = choice;

  const onClickA = () => {
    setChoice({ ...choice, a: !a });
  };
  const onClickB = () => {
    setChoice({ ...choice, b: !b });
  };
  const onClickC = () => {
    setChoice({ ...choice, c: !c });
  };
  const onClickD = () => {
    setChoice({ ...choice, d: !d });
  };
  const onClickE = () => {
    setChoice({ ...choice, e: !e });
  };
  const onClickF = () => {
    setChoice({ ...choice, f: !f });
  };

  return (
    <div className="Contact">
      {" "}
      <animated.div style={props} className="Contact-Content">
        <div className="Contact-Q">
          <span>3</span>
          <i className="fas fa-arrow-right"></i>
          <h1>What can we do for you? * </h1>
        </div>

        <span className="Content-Multiple">Choose as many as you like</span>

        <div className="Content-Choices">
          <button
            className={a ? "Content-Choice" : "Chosen"}
            onClick={() => onClickA()}
          >
            <div className="Content-Type">
              <span>A</span>
              <p>Customization</p>
            </div>
            <i className="fas fa-check"></i>
          </button>
          <button
            className={b ? "Content-Choice" : "Chosen"}
            onClick={() => onClickB()}
          >
            <div className="Content-Type">
              <span>B</span>
              <p>Repair</p>
            </div>
            <i className="fas fa-check"></i>
          </button>
          <button
            className={c ? "Content-Choice" : "Chosen"}
            onClick={() => onClickC()}
          >
            <div className="Content-Type">
              <span>C</span>
              <p>Consultation</p>
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
              <p>Looking to Sell</p>
            </div>
            <i className="fas fa-check"></i>
          </button>
          <button
            className={e ? "Content-Choice" : "Chosen"}
            onClick={() => onClickE()}
          >
            <div className="Content-Type">
              <span>E</span>
              <p>Looking to Buy</p>
            </div>
            <i className="fas fa-check"></i>
          </button>
          <button
            className={f ? "Content-Choice" : "Chosen"}
            onClick={() => onClickF()}
          >
            <div className="Content-Type">
              <span>F</span>
              <p>Other</p>
            </div>
            <i className="fas fa-check"></i>
          </button>
        </div>

        {!f && (
          <input
            className="Other-Option"
            type="text"
            placeholder="Please specify..."
          ></input>
        )}

        {(!a || !b || !c || !d || !e || !f) && (
          <div className="Contact-S">
            <Link to="/contact4">
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
