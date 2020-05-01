import React from "react";
import Img from "react-image";

// WATCH IMAGES
import cs1 from "../../images/classic/cs1.png";
import cs2 from "../../images/classic/cs2.png";
import cs3 from "../../images/classic/cs3.png";
import cs4 from "../../images/classic/cs4.png";
import iwc1 from "../../images/classic/iwc1.png";
import iwc2 from "../../images/classic/iwc2.png";
import iwc3 from "../../images/classic/iwc3.png";
import iwc4 from "../../images/classic/iwc4.png";
import omega1 from "../../images/classic/omega1.jpg";
import omega2 from "../../images/classic/omega2.jpg";
import omega3 from "../../images/classic/omega3.jpg";
import omega4 from "../../images/classic/omega4.jpg";

export const Classic = () => {
  return (
    <div className="Watches">
      <div className="Watch">
        <div className="Image-Container Extra-Padding">
          <Img src={cs1} className="No-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>CHRONOSWISS</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container Extra-Padding">
          <Img src={cs2} className="No-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>CHRONOSWISS</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container Extra-Padding">
          <Img src={cs3} className="No-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>CHRONOSWISS</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container Extra-Padding">
          <Img src={cs4} className="No-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>CHRONOSWISS</span>
        </div>
      </div>

      <div className="Watch">
        <div className="Image-Container">
          <Img src={iwc1} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>IWC</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={iwc2} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>IWC</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={iwc3} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>IWC</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={iwc4} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>IWC</span>
        </div>
      </div>

      <div className="Watch">
        <div className="Image-Container">
          <Img src={omega1} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>OMEGA</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={omega2} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>OMEGA</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={omega3} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>OMEGA</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={omega4} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>OMEGA</span>
        </div>
      </div>
    </div>
  );
};
