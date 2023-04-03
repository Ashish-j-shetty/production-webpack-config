import ClayBank from "images/claybanks.webp";
import ClayBankTiny from "images/claybanksTiny.webp";
import ProgressiveImage from "../../components/ProgressiveImage";

export const Profile = () => {
  return (
    <div>
      <div>Profile</div>

      <ProgressiveImage
        src={ClayBank}
        placeholderSrc={ClayBankTiny}
        alt={"ClayBank"}
        className={"img"}
      />
    </div>
  );
};
