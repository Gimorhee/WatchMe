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
import gs1 from "../../images/regular/gs1.png";
import gs2 from "../../images/regular/gs2.png";
import gs3 from "../../images/regular/gs3.png";
import gs4 from "../../images/regular/gs4.png";

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
          <img className="More-Padding" src={gs1} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>G-SHOCK</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={gs2} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>G-SHOCK</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={gs3} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>G-SHOCK</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={gs4} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>G-SHOCK</span>
        </div>
      </div>
    </div>
  );
};
