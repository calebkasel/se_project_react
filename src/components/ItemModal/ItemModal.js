import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemModal = ({ selectedCard, onClose, onDeleteItem }) => {
  const currentUser = useContext(CurrentUserContext);
  const token = localStorage.getItem("jwt");

  const isOwner = selectedCard.owner === currentUser._id;

  const itemDeleteButtonClassName = `${isOwner ? "modal__delete-button_visible" : "modal__delete-button_hidden"}`

  const handleDeleteItemSubmit = () => {
    onDeleteItem(selectedCard._id, token);
  };

  return (
    <div className={`modal`}>
      <div className="modal__content modal__content-image" onClick={onClose}>
        <button
          className="modal__close-button modal__close-button-white"
          onClick={onClose}
          type="button"
        ></button>
        <img
          className="modal__image-preview"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__item-name">{selectedCard.name}</div>
        <div className="modal__weather-type">
          Weather Type: {selectedCard.weather}
        </div>
        <button
          type="button"
          className={itemDeleteButtonClassName}
          onClick={handleDeleteItemSubmit}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
