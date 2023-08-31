import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card__element">
      <img
        className="card__image"
        src={item.link}
        alt={item.name}
        onClick={() => onSelectCard(item)}
      />
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
