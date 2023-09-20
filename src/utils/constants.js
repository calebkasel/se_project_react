import daySunny from "../images/day/sunny.svg";
import nightClear from "../images/night/clear.svg";
import dayCloudy from "../images/day/cloudy.svg";
import nightCloudy from "../images/night/cloudy.svg";
import dayFog from "../images/day/fog.svg";
import nightFog from "../images/night/fog.svg";
import dayRain from "../images/day/rain.svg";
import nightRain from "../images/night/rain.svg";
import daySnow from "../images/day/snow.svg";
import nightSnow from "../images/night/snow.svg";
import dayStorm from "../images/night/storm.svg";
import nightStorm from "../images/night/storm.svg";

export const defaultClothingItems = [
  {
    id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const weatherOptions = [
  { url: daySunny, day: true, type: "sunny" },
  { url: nightClear, day: false, type: "clear" },
  { url: dayCloudy, day: true, type: "cloudy" },
  { url: nightCloudy, day: false, type: "cloudy" },
  { url: dayFog, day: true, type: "fog" },
  { url: nightFog, day: false, type: "fog" },
  { url: dayRain, day: true, type: "rain" },
  { url: nightRain, day: false, type: "rain" },
  { url: daySnow, day: true, type: "snow" },
  { url: nightSnow, day: false, type: "snow" },
  { url: dayStorm, day: true, type: "storm" },
  { url: nightStorm, day: false, type: "storm" },
];

export const latitude = 44.9778;
export const longitude = -93.265;
export const apiKey = "3263eb750864808d2f8e0e2eb38770bb";

export const baseUrl =
  // "https://my-json-server.typicode.com/calebkasel/se_project_react";
  "http://localhost:3001";

export const headers = {
  authorization: "",
  "Content-Type": "application/json",
};
