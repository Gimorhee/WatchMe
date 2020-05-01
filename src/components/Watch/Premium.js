import React from "react";

// WATCH IMAGES
import bp1 from "../../images/premium/bp1.png";
import bp2 from "../../images/premium/bp2.png";
import bp3 from "../../images/premium/bp3.png";
import bp4 from "../../images/premium/bp4.png";
import rolex1 from "../../images/premium/rolex1.png";
import rolex2 from "../../images/premium/rolex2.png";
import rolex3 from "../../images/premium/rolex3.png";
import rolex4 from "../../images/premium/rolex4.png";
import zenith1 from "../../images/premium/zenith1.png";
import zenith2 from "../../images/premium/zenith2.png";
import zenith3 from "../../images/premium/zenith3.png";
import zenith4 from "../../images/premium/zenith4.png";

export const Premium = () => {
  return (
    <div className="Watches">
      <div className="Watch">
        <div className="Image-Container">
          <img className="No-Padding" src={rolex1} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>ROLEX</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="No-Padding" src={rolex2} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>ROLEX</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="No-Padding" src={rolex3} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>ROLEX</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="No-Padding" src={rolex4} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>ROLEX</span>
        </div>
      </div>

      <div className="Watch">
        <div className="Image-Container">
          <img src={bp1} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>BLANCPAIN</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img src={bp2} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>BLANCPAIN</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img src={bp3} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>BLANCPAIN</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img src={bp4} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>BLANCPAIN</span>
        </div>
      </div>

      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={zenith1} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>ZENITH</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={zenith2} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>ZENITH</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={zenith3} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>ZENITH</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={zenith4} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>ZENITH</span>
        </div>
      </div>
    </div>
  );
};
