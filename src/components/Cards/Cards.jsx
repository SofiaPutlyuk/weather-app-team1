import RefreshIcon from "../../assets/logo/refresh.svg";
import HeartIcon from "../../assets/logo/heart.svg";
import DeleteIcon from "../../assets/logo/delete.svg";
export const Cards = ({ info }) => {
  if (!info || !info.list || !info.list[0]) {
    return console.log("Loading");
  }
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const indexes = [0, 1, 3];
   const deleteCard = () => {
    const searchCard = document.querySelector(".weather-card")
    searchCard.classList.add("delete")
   }
  return (
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
          <div className="weather-card" key={i}>
            <div>
              <p>{info.city.country}</p>
              <p>{info.city.name}</p>
            </div>
            <p className="text-hour">{dataHour}:00</p>
            <div>
              <button className="btn-forecast-time">Hourly forecast</button>
              <button className="btn-forecast-time">Weekly forecast</button>
            </div>
            <div>
              <p>{getData}.{getMonth}.{getYear}</p>
              <hr />
              <p>{nameDay}</p>
            </div>
            <img src={`https://openweathermap.org/img/wn/${infoTime.weather[0].icon}@2x.png`} alt="weather icon" />
            <p>{parseInt(infoTime.main.temp)}°C</p>
            <div className="container-button-forecast">
              <button>
                <img src={RefreshIcon} alt="icon-refresh"/>
              </button>
              <button>
                <img src={HeartIcon} alt="icon-heart"/>
              </button>
              <button>
                See more
              </button>
              <button onClick={deleteCard}>
                 <img src={DeleteIcon} alt="icon-delete"/>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};