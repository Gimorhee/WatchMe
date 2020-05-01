import React from "react";
import Img from "react-image";

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
          <Img src={ap1} className="No-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>AUDEMARS PIGUET</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={ap2} className="No-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>AUDEMARS PIGUET</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={ap3} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>AUDEMARS PIGUET</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={ap4} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>AUDEMARS PIGUET</span>
        </div>
      </div>

      <div className="Watch">
        <div className="Image-Container">
          <Img src={pp1} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>PATEK PHILIPPE</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={pp2} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>PATEK PHILIPPE</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={pp3} />
        </div>
        <div className="Inner-Bg">
          <span>PATEK PHILIPPE</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={pp4} className="Avg-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>PATEK PHILIPPE</span>
        </div>
      </div>

      <div className="Watch">
        <div className="Image-Container">
          <Img src={vc1} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>VACHERON CONSTANTIN</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={vc2} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>VACHERON CONSTANTIN</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={vc3} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>VACHERON CONSTANTIN</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={vc4} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>VACHERON CONSTANTIN</span>
        </div>
      </div>
    </div>
  );
};
