import React, { useEffect, useState } from "react";

import Styles from "./progressiveImage.module.css";

export default function ProgressiveImage(props) {
  const {
    src,
    placeholderSrc,
    alt,
    className,
    height = "450px",
    width = "450px",
  } = props;

  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? Styles.loading : Styles.loded;

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImgSrc(src);
  }, [src]);

  return (
    <img
      src={imgSrc}
      className={`${className}${customClass}`}
      alt={alt}
      height={height}
      width={width}
    />
  );
}
