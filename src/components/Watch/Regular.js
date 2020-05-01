import React from "react";

// WATCH IMAGES
import dw1 from "../../images/regular/dw1.jpg";
import dw2 from "../../images/regular/dw2.jpg";
import dw3 from "../../images/regular/dw3.jpg";
import dw5 from "../../images/regular/dw5.jpg";
import ts1 from "../../images/regular/ts1.png";
import ts2 from "../../images/regular/ts2.png";
import ts5 from "../../images/regular/ts5.png";
import ts6 from "../../images/regular/ts6.png";
import nixon1 from "../../images/regular/nixon1.png";
import nixon2 from "../../images/regular/nixon2.png";
import nixon3 from "../../images/regular/nixon3.png";
import nixon4 from "../../images/regular/nixon4.png";

export const Regular = () => {
  return (
    <div className="Watches">
      <div className="Watch">
        <div className="Image-Container">
          <img src={dw1} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>Daniel Wellington</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img src={dw2} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>Daniel Wellington</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img src={dw3} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>Daniel Wellington</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img src={dw5} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>Daniel Wellington</span>
        </div>
      </div>

      <div className="Watch">
        <div className="Image-Container">
          <img src={ts1} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>TISSOT</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img src={ts2} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>TISSOT</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img src={ts5} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>TISSOT</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img src={ts6} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>TISSOT</span>
        </div>
      </div>

      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={nixon1} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>NIXON</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={nixon2} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>NIXON</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={nixon3} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>NIXON</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={nixon4} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>NIXON</span>
        </div>
      </div>
    </div>
  );
};
