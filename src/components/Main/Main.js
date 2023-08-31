import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems, getWeatherType } from "../../utils/constants";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = getWeatherType(weatherTemp);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={false} type="storm" weatherTemp={weatherTemp} />
      <section className="card__section" id="card">
        <h2 className="card__section-title">
          Today is {weatherTemp}°F / You may want to wear:
        </h2>
        <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
