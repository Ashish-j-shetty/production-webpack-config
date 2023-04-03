import React from "react";

import oneDPRImage from "images/1DPR.png";
import twoDPRImage from "images/2DPR.png";
import threeDPRImage from "images/3DPR.png";

export default function index() {
  return (
    <div>
      <img
        src={oneDPRImage}
        srcSet={`${oneDPRImage} 1x, ${twoDPRImage} 2x ,  ${threeDPRImage} 3x`}
        alt="dpr example"
      />
    </div>
  );
}
