import React from "react";

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
        <div className="Image-Container">
          <img className="Little-Padding" src={cs1} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>CHRONOSWISS</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="Little-Padding" src={cs2} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>CHRONOSWISS</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="Little-Padding" src={cs3} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>CHRONOSWISS</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="Little-Padding" src={cs4} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>CHRONOSWISS</span>
        </div>
      </div>

      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={iwc1} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>IWC</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={iwc2} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>IWC</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={iwc3} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>IWC</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={iwc4} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>IWC</span>
        </div>
      </div>

      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={omega1} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>OMEGA</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={omega2} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>OMEGA</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={omega3} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>OMEGA</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={omega4} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>OMEGA</span>
        </div>
      </div>
    </div>
  );
};
