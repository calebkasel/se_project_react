import "./Header.css";
import Logo from "../../images/wtwr-logo.svg";
// import Avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Header = ({
  onCreateModal,
  weatherLocation,
  onLoginModal,
  onRegisterModal,
  loggedIn,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const avatar = currentUser ? currentUser.avatar : undefined;
  const showAvatar = avatar !== "" ? true : false;
  const name = currentUser.name;

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
      {loggedIn ? (
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
          <div>
            <Link to="/profile" className="header__user">
              {currentUser.name}
            </Link>
          </div>
          <div>
            {showAvatar ? (
              <Link to="/profile">
                <img src={currentUser.avatar} alt="logo" className="header__avatar" />
              </Link>
            ) : (
              <p className="header__avatar">{name[0]?.toUpperCase()}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="header__menu-right">
          <ToggleSwitch />
          <div>
            <button
              className="header__button"
              type="text"
              onClick={onRegisterModal}
            >
              Sign Up
            </button>
            <button
              className="header__button"
              type="text"
              onClick={onLoginModal}
            >
              Log In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
