import { createContext } from "react";

export const WeatherContext = createContext({
  city: "",
  weather: null,
  setCity: () => {},
  setWeather: () => {},
});
