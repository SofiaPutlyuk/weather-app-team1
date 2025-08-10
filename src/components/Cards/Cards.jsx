import RefreshIcon from "../../assets/logo/refresh.svg";
import HeartIcon from "../../assets/logo/heart.svg";
import DeleteIcon from "../../assets/logo/delete.svg";
import { ForecastEight } from "../Forecast8day/ForecastEight";
import WeatherChart from "../WeatherChart/WeatherChart";
import { WeatherContext } from "../WeatherContext/WeatherContext";
import { FavouriteModal } from "./FavouriteCity";
import Loader from "../Loader/Loader";
import { GoHeartFill } from "react-icons/go";
import { useState, useContext } from "react";
export const Cards = () => {
  const { weather: info, setWeather } = useContext(WeatherContext);
  const [favoriteCities, setFavoriteCities] = useState(() => {
    return JSON.parse(localStorage.getItem("favoriteCities")) || [];
  });
  const [showFavoriteModal, setShowFavoriteModal] = useState(false);
  const [forecastView, setForecastView] = useState({
    showWeekly: false,
    showHourly: false,
    showAdditional: false
  });
  const [loadingIndex, setLoadingIndex] = useState(null);
  if (!info || !info.list || !info.list[0]) {
    return <Loader />;
  }
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const indexes = [0, 1, 3];
  const deleteCard = () => {
    const searchCard = document.querySelector(".weather-card")
    searchCard.classList.add("delete")
  }
  const handleWeeklyClick = () => {
    setForecastView({ showWeekly: true, showAdditional: false });
  };
  const handleHourlyForecast = () => {
    setForecastView(prev => ({ ...prev, showWeekly: false, showAdditional: false, showHourly: true }));
  }
  const handleSeeMore = () => {
    setForecastView({ showWeekly: true, showAdditional: true });
  }

  const toggleFavoriteCity = (city) => {
    setFavoriteCities(prev => {
      let updated;
      const exists = prev.some(c => c.id === city.id);
      if (exists) {
        updated = prev.filter(c => c.id !== city.id);
      } else {
        updated = [...prev, city];
      }
      localStorage.setItem("favoriteCities", JSON.stringify(updated));
      return updated;
    });
  };
  const openFavoriteModal = () => {
    setShowFavoriteModal(true);
  };

  const closeFavoriteModal = () => {
    setShowFavoriteModal(false);
  };
  const refresh = async (cityName, index) => {
    try {
      setLoadingIndex(index);
      const API_KEY = "c899df01a007e998373f0576e8f261c7";
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`)
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      console.log("Error", error)
    } finally {
      setLoadingIndex(null);
    }
  }
  return (
    <>
      <div className="cards-container">
        {indexes.map((i) => {
          const infoTime = info.list[i];
          const data = new Date(infoTime.dt_txt);
          const dataHour = data.getHours();
          const getData = data.getDate();
          const getMonth = data.getMonth() + 1;
          const getYear = data.getFullYear();
          const getDay = data.getDay();
          const nameDay = days[getDay];
          return (
            <div className={`weather-card ${loadingIndex === i ? "loading" : ""}`} key={i}>
              <div>
                <p>{info.city.country}</p>
                <p>{info.city.name}</p>
              </div>
              <p className="text-hour">{dataHour}:00</p>
              <div>
                <button className="btn-forecast-time" onClick={handleHourlyForecast}>Hourly forecast</button>
                <button className="btn-forecast-time" onClick={handleWeeklyClick}>Weekly forecast</button>
              </div>
              <div>
                <p>{getData}.{getMonth}.{getYear}</p>
                <hr />
                <p>{nameDay}</p>
              </div>
              <img src={`https://openweathermap.org/img/wn/${infoTime.weather[0].icon}@2x.png`} alt="weather icon" />
              <p>{parseInt(infoTime.main.temp)}°C</p>
              <div className="container-button-forecast">
                <button onClick={() => refresh(info.city.name, i)}>
                  {loadingIndex === i ? <Loader /> : <img src={RefreshIcon} alt="icon-refresh" />}
                </button>
                <button onClick={() => toggleFavoriteCity({ id: info.list[i].dt, name: info.city.name })}>
                   {favoriteCities.some(c => c.id === info.list[i].dt)  ? (
                    <GoHeartFill style={{ color: "red" , width:24 , height:24 }} />
                  ) : (
                    <img src={HeartIcon} alt="not favorite" />
                  )}
                </button>
                <button onClick={handleSeeMore}>
                  See more
                </button>
                <button onClick={deleteCard}>
                  <img src={DeleteIcon} alt="icon-delete" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
        <button onClick={openFavoriteModal}  className="buttonFavourite">
          <GoHeartFill /> Мої улюблені міста
        </button>
      {forecastView.showWeekly && <ForecastEight infoDay={info} handleShowAdditional={forecastView.showAdditional} />}
      {forecastView.showHourly && (
        <WeatherChart infoChart={info} />
      )}
      {showFavoriteModal && (
        <FavouriteModal cities={favoriteCities} onClose={closeFavoriteModal} />
      )}
    </>
  );
};