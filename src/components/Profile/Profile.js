import React from "react";
import "./Profile.css";
import ClothingSection from "../ClothingSection/ClothingSection";
import Sidebar from "../Sidebar/Sidebar";


const Profile = ({ onCreateModal, clothingItems, onSelectCard }) => {
  return(
    <section className="profile">
      <div className="profile__sidebar">
        <Sidebar />
      </div>
      <ClothingSection
        onCreateModal={onCreateModal}
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
      />
    </section>
  );
};

export default Profile;