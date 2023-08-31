import "./Header.css";
import Logo from "../../images/wtwr-logo.svg";
import Avatar from "../../images/avatar.svg";

const Header = ({ onCreateModal, weatherLocation }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__menu-left">
        <div className="header__logo">
          <img src={Logo} alt="WTWR-logo" />
        </div>
        <h3 className="header__info">
          {currentDate}, {weatherLocation}
        </h3>
      </div>
      <div className="header__menu-right">
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        <h3 className="header__user">Caleb Kaselnak</h3>
        <div>
          <img src={Avatar} alt="logo" className="header__avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
