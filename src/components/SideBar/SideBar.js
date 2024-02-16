import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const SideBar = ({ onEditProfileModal, onLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="profile__sidebar">
      <div className="profile__sidebar-user">
        <img
          className="profile__avatar"
          src={currentUser.avatar}
          alt="avatar"
        ></img>
        <div className="profile__name">{currentUser.name}</div>
      </div>
      <div className="profile__sidebar-manager">
        <button
          className="profile__sidebar-edit"
          type="button"
          onClick={onEditProfileModal}
        >
          Edit Profile Data
        </button>
        <button
          className="profile__sidebar-logout"
          type="button"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
