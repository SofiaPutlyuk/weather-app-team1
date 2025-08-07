import { useCallback, useEffect, useState } from "react"
import { SectionAdditional } from "../SectionAdditional/SectionAdditional";
export const ForecastEight = ({ infoDay , handleShowAdditional }) => {
    const key = "2097ff4876214395bdf130955250508";
    const [forecast, setForecast] = useState([]);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    console.log(forecast);
    const fetchForecastDay = useCallback(async () => {
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${infoDay.city.coord.lat},${infoDay.city.coord.lon}&days=8&aqi=no&alerts=no`);
            const data = await response.json()
            console.log(data)
            setForecast(data.forecast.forecastday);
        } catch (error) {
            console.log(error)
        }
    }, [infoDay])
    useEffect(() => {
        fetchForecastDay()
    }, [fetchForecastDay])
    return (
        <>
        <div className="container-background-forecast">
            <p className="title-weekly-forecast hideBig">Weekly forecast</p>
            <p className="title-weekly-forecast hide">8-day forecast</p>
            <div className="wrapper-forecast-eight">
                {forecast.map((item, index) => {
                    const date = new Date(item.date);
                    const data = days[date.getDay()];
                    const day = date.getDate();
                    const month = months[date.getMonth()];
                    const getIcon = item.day.condition.icon;
                    const getIconDescription = item.day.condition.text;
                    const getNightTemperature = parseInt(item.hour[0].temp_c)
                    const getDayTemperature = parseInt(item.hour[12].temp_c)
                    return (
                        <div key={index} className="forecast-card">
                            <p>{data}, {month} {day}</p>
                            <div >
                                <img src={getIcon} alt={getIconDescription} />
                                <p>{getDayTemperature}/{getNightTemperature}℃</p>
                            </div>
                            <p>{getIconDescription}</p>
                        </div>
                    )
                })}
            </div>
        </div>
         {handleShowAdditional && <SectionAdditional infoDay={forecast} />}
</>
    )
}