import Laptop from "images/laptop.webp";
import ProgressiveImage from "src/components/ProgressiveImage";
import LatopImgTiny from "images/laptopTiny.webp";
export const Home = () => {
  return (
    <div>
      <div>home</div>
      <ProgressiveImage
        src={Laptop}
        placeholderSrc={LatopImgTiny}
        alt={"laptop"}
        className={"img"}
      />
    </div>
  );
};
