import React from "react";
import Img from "react-image";

// WATCH IMAGES
import dw1 from "../../images/regular/dw1.jpg";
import dw2 from "../../images/regular/dw2.jpg";
import dw3 from "../../images/regular/dw3.jpg";
import dw5 from "../../images/regular/dw5.jpg";
import ts1 from "../../images/regular/ts1.png";
import ts2 from "../../images/regular/ts2.png";
import ts5 from "../../images/regular/ts5.png";
import ts6 from "../../images/regular/ts6.png";
import vincero1 from "../../images/regular/vincero1.jpg";
import vincero2 from "../../images/regular/vincero2.jpg";
import vincero3 from "../../images/regular/vincero3.jpg";
import vincero4 from "../../images/regular/vincero4.jpg";

export const Regular = () => {
  return (
    <div className="Watches">
      <div className="Watch">
        <div className="Image-Container">
          <Img src={dw1} />
        </div>
        <div className="Inner-Bg">
          <span>Daniel Wellington</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={dw2} />
        </div>
        <div className="Inner-Bg">
          <span>Daniel Wellington</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={dw3} />
        </div>
        <div className="Inner-Bg">
          <span>Daniel Wellington</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={dw5} />
        </div>
        <div className="Inner-Bg">
          <span>Daniel Wellington</span>
        </div>
      </div>

      <div className="Watch">
        <div className="Image-Container">
          <Img src={ts1} />
        </div>
        <div className="Inner-Bg">
          <span>TISSOT</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={ts2} />
        </div>
        <div className="Inner-Bg">
          <span>TISSOT</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={ts5} />
        </div>
        <div className="Inner-Bg">
          <span>TISSOT</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={ts6} />
        </div>
        <div className="Inner-Bg">
          <span>TISSOT</span>
        </div>
      </div>

      <div className="Watch">
        <div className="Image-Container">
          <Img src={vincero1} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>VINCERO</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={vincero2} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>VINCERO</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={vincero3} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>VINCERO</span>
        </div>
      </div>
      <div className="Watch">
        <div className="Image-Container">
          <Img src={vincero4} className="More-Padding" />
        </div>
        <div className="Inner-Bg">
          <span>VINCERO</span>
        </div>
      </div>
    </div>
  );
};
