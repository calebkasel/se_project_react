import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal__content modal__content-image" onClick={onClose}>
        <button className="modal__close-button modal__close-button-white"></button>
        <img
          className="modal__image-preview"
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <div className="modal__item-name">{selectedCard.name}</div>
        <div className="modal__weather-type">
          Weather Type: {selectedCard.weather}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
