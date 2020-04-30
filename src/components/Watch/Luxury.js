import React from "react";

// WATCH IMAGES
import ap1 from "../../images/luxury/ap1.png";
import ap2 from "../../images/luxury/ap2.png";
import ap3 from "../../images/luxury/ap3.png";
import ap4 from "../../images/luxury/ap4.png";
import pp1 from "../../images/luxury/pp1.jpg";
import pp2 from "../../images/luxury/pp2.jpg";
import pp3 from "../../images/luxury/pp3.jpg";
import pp4 from "../../images/luxury/pp4.jpg";
import vc1 from "../../images/luxury/vc1.png";
import vc2 from "../../images/luxury/vc2.png";
import vc3 from "../../images/luxury/vc3.png";
import vc4 from "../../images/luxury/vc4.png";

export const Luxury = () => {
  return (
    <div className="Watches">
      <div className="Watch">
        <div className="Image-Container">
          <img className="No-Padding" src={ap1} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>AUDEMARS PIGUET</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="No-Padding" src={ap2} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>AUDEMARS PIGUET</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={ap3} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>AUDEMARS PIGUET</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={ap4} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>AUDEMARS PIGUET</span>
        </div>
      </div>

      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={vc1} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>VACHERON CONSTANTIN</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={vc2} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>VACHERON CONSTANTIN</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={vc3} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>VACHERON CONSTANTIN</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={vc4} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>VACHERON CONSTANTIN</span>
        </div>
      </div>

      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={pp1} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>PATEK PHILIPPE</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={pp2} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>PATEK PHILIPPE</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img src={pp3} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>PATEK PHILIPPE</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <img className="More-Padding" src={pp4} alt="" />
        </div>
        <div className="Inner-Bg">
          <span>PATEK PHILIPPE</span>
        </div>
      </div>
    </div>
  );
};
