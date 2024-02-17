import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen, onClick }) => {
  const token = localStorage.getItem("jwt");

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [imageUrl, setImageUrl] = useState("");
  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const [weatherType, setWeatherType] = useState("");
  const handleWeatherTypeChange = (e) => {
    setWeatherType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weatherType, token });
  };

  useEffect(() => {
    if (!isOpen) {
      setName("");
      setImageUrl("");
      setWeatherType("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add Garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClick={onClick}
    >
      <div className="modal__text-inputs">
        <label className="modal__label">
          Name
          <input
            type="text"
            name={name}
            minLength="1"
            maxLength="30"
            className="modal__input"
            onChange={handleNameChange}
          />
        </label>
        <label className="modal__label">
          Image
          <input
            type="url"
            name={imageUrl}
            minLength="1"
            maxLength="200"
            className="modal__input"
            onChange={handleUrlChange}
          />
        </label>
      </div>
      <p className="modal__select-weather">Select the weather type:</p>
      <div className="modal__radio-inputs">
        <div>
          <input
            className="modal__radio-button"
            type="radio"
            id="hot"
            value="hot"
            name="radio-weather-button"
            onChange={handleWeatherTypeChange}
          />
          <label className="modal__radio-button-label" htmlFor="hot">
            Hot
          </label>
        </div>
        <div>
          <input
            className="modal__radio-button"
            type="radio"
            id="warm"
            value="warm"
            name="radio-weather-button"
            onChange={handleWeatherTypeChange}
          />
          <label className="modal__radio-button-label" htmlFor="warm">
            Warm
          </label>
        </div>
        <div>
          <input
            className="modal__radio-button"
            type="radio"
            id="cold"
            value="cold"
            name="radio-weather-button"
            onChange={handleWeatherTypeChange}
          />
          <label className="modal__radio-button-label" htmlFor="cold">
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
