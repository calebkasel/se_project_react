import "./Header.css";
import Logo from "../../images/wtwr-logo.svg";
import Avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const Header = ({ onCreateModal, weatherLocation }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__menu-left">
        <div className="header__logo">
          <Link to="/">
            <img src={Logo} alt="WTWR-logo" />
          </Link>
        </div>
        <h3 className="header__info">
          {currentDate}, {weatherLocation}
        </h3>
      </div>
      <div className="header__menu-right">
        <ToggleSwitch />
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        <Link to="/profile" className="header__user">
          Caleb Kaselnak
        </Link>
        <div>
          <Link to="/profile">
            <img src={Avatar} alt="logo" className="header__avatar" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
