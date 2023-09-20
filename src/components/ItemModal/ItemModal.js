import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, onDeleteItem }) => {
  const handleDeleteItemSubmit = () => {
    onDeleteItem(selectedCard.id);
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
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <div className="modal__item-name">{selectedCard.name}</div>
        <div className="modal__weather-type">
          Weather Type: {selectedCard.weather}
        </div>
        <button
          type="button"
          className="modal__delete-button"
          onClick={handleDeleteItemSubmit}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
