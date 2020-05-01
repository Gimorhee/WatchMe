import React from "react";
import Img from "react-image";

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
          <Img src={rolex1} className="No-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>ROLEX</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={rolex2} className="No-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>ROLEX</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={rolex3} className="No-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>ROLEX</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={rolex4} className="No-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>ROLEX</span>
        </div>
      </div>

      <div className="Watch">
        <div className="Image-Container">
          <Img src={bp1} />
        </div>
        <div className="Inner-Bg">
          <span>BLANCPAIN</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={bp2} />
        </div>
        <div className="Inner-Bg">
          <span>BLANCPAIN</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={bp3} />
        </div>
        <div className="Inner-Bg">
          <span>BLANCPAIN</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={bp4} />
        </div>
        <div className="Inner-Bg">
          <span>BLANCPAIN</span>
        </div>
      </div>

      <div className="Watch">
        <div className="Image-Container">
          <Img src={zenith1} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>ZENITH</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={zenith2} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>ZENITH</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={zenith3} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>ZENITH</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={zenith4} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>ZENITH</span>
        </div>
      </div>
    </div>
  );
};
