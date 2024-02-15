import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({
  day,
  type,
  weatherTemp = "",
  currentTemperatureUnit = "",
}) => {
  const imageSrc = weatherOptions.find((item) => {
    return item.type === type && item.day === day;
  });

  const imageSrcUrl = imageSrc.url || "";

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
