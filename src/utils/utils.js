export const getWeatherType = (weatherTemp, currentTemperatureUnit) => {
  if (currentTemperatureUnit === "F") {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  } else {
    if (weatherTemp >= 30) {
      return "hot";
    } else if (weatherTemp >= 19 && weatherTemp <= 29) {
      return "warm";
    } else if (weatherTemp <= 18) {
      return "cold";
    }
  }
};

export const checkResponse = (res) => {
  if (res.ok) {
    Promise.resolve("Promise Resolved");
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};
