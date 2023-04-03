import IcyMountain from "images/icyMountain.webp";
import IcyMountainTiny from "images/icyMountainTiny.webp";
import ProgressiveImage from "../../components/ProgressiveImage";

export const About = () => {
  return (
    <div>
      <div>about</div>
      <ProgressiveImage
        src={IcyMountain}
        placeholderSrc={IcyMountainTiny}
        alt={"icy"}
        className={"img"}
      />
    </div>
  );
};
