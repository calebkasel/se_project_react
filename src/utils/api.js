import { baseUrl } from "./constants";
import { checkResponse } from "./utils";

export const getClothingItems = () => {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

export const postNewClothingItem = (newItem) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newItem.name,
      weather: newItem.weather,
      link: newItem.link,
    }),
  }).then(checkResponse);
};

export const deleteClothingItems = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};