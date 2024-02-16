import "./WeatherCard.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react"
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({
  day,
  type,
  weatherTemp = ""
}) => {
  const imageSrc = weatherOptions.find((item) => {
    return item.type === type && item.day === day;
  });

  const imageSrcUrl = imageSrc.url || "";

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather" id="weather">
      <h2 className="weather__info">
        {weatherTemp}°{currentTemperatureUnit}
      </h2>
      <img src={imageSrcUrl} alt="weather state" className="weather__image" />
    </section>
  );
};

export default WeatherCard;
