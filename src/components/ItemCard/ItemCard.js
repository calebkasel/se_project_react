import "./ItemCard.css";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = item?.likes.some((_id) => _id === currentUser?._id);

  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button-active" : "card__like-button-inactive"
  }`;

  const handleCardLikeClick = (item) => {
    onCardLike(item, isLiked, currentUser);
  };

  return (
    <div className="card__element">
      <img
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={() => onSelectCard(item)}
      />
      <div className="card__title">
        <h2 className="card__name">{item.name}</h2>
        <button
          className={itemLikeButtonClassName}
          type="button"
          onClick={() => handleCardLikeClick(item)}
        ></button>
      </div>
    </div>
  );
};

export default ItemCard;
