import { Link } from "react-router-dom";
import { DEFAULT_USERNAME } from "src/utils/constants";

export const Header = () => {
  return (
    <div>
      <h2>Hello , welcome {DEFAULT_USERNAME}</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
