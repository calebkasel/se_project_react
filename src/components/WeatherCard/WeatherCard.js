import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";
  console.log(imageSrcUrl);

  return (
    <section className="weather" id="weather">
      <h2 className="weather__info">{weatherTemp}°F</h2>
      <img
        src={imageSrcUrl}
        alt="weather state"
        className="weather__image"
      ></img>
    </section>
  );
};

export default WeatherCard;
