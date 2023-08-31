import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import {
  getForecastWeather,
  parseWeatherData,
  parseLocationData,
} from "../../utils/weatherApi";
import { useState, useEffect } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weatherLocation, setWeatherLocation] = useState("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        const location = parseLocationData(data);
        setTemp(temperature);
        setWeatherLocation(location);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!activeModal) {
      return;
    }
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div>
      <Header
        onCreateModal={handleCreateModal}
        weatherLocation={weatherLocation}
      />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          title="New Garment"
          buttonText="Add Garment"
          onClose={handleCloseModal}
        >
          <div className="modal__text-inputs">
            <label className="modal__label">
              Name
              <input
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
                className="modal__input"
              />
            </label>
            <label className="modal__label">
              Image
              <input
                type="url"
                name="link"
                minLength="1"
                maxLength="200"
                className="modal__input"
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
              />
              <label>Hot</label>
            </div>
            <div>
              <input
                className="modal__radio-button"
                type="radio"
                id="warm"
                value="warm"
                name="radio-weather-button"
              />
              <label>Warm</label>
            </div>
            <div>
              <input
                className="modal__radio-button"
                type="radio"
                id="cold"
                value="cold"
                name="radio-weather-button"
              />
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
