import ImageTemperature from "../../assets/images/temperature.png";
import ImageHumidity from "../../assets/images/humidity.png";
import ImagePressure from "../../assets/images/pressure.png";
import ImageWind from "../../assets/images/wind.png";
import ImageVisibility from "../../assets/images/visibility.png";
export const SectionAdditional = ({ infoDay }) => {
    if (!infoDay || !infoDay[0] || !infoDay[0].hour || !infoDay[0].hour[12]) {
        return null;
    }
    const visibility = parseInt(infoDay[0].hour[12].vis_km)
    const visibilityStatus = visibility >= 10 ? "Unlimited" : "Limited";
    const windKph = parseInt(infoDay[0].hour[12].wind_kph)
    const infoCards = [
        { id: 1, title: "Feels like", description: `${parseInt(infoDay[0].hour[12].feelslike_c)}℃`, image: ImageTemperature, alt: "image-temperature" },
        { id: 2, titleOne: "Min ℃", descriptionOne: `${parseInt(infoDay[0].day.mintemp_c)}℃`, titleTwo: "Max ℃", descriptionTwo: `${parseInt(infoDay[0].day.maxtemp_c)}℃` },
        { id: 3, title: "Humidity", description: `${parseInt(infoDay[0].day.avghumidity)}%`, image: ImageHumidity, alt: "image-humidity" },
        { id: 4, title: "Pressure", description: `${parseInt(infoDay[0].hour[12].pressure_mb)}Pa`, image: ImagePressure, alt: "image-pressure" },
        { id: 5, title: "Wind speed", description: `${parseInt(windKph / 3.6)}m/s`, image: ImageWind, alt: "image-wind" },
        { id: 6, title: "Visibility", description: `${visibilityStatus}`, image: ImageVisibility, alt: "image-visibility" }
    ]
    return (
        <div className="wrapper-additional-forecast">
            {infoCards.map((elem) => (
                <div id={elem.id}>
                    {elem.titleOne && elem.titleTwo ? (
                        <>
                            <p className="title-additional-forecast">{elem.titleOne}</p>
                            <p className="description-additional-forecast">{elem.descriptionOne}</p>
                            <p className="title-additional-forecast">{elem.titleTwo}</p>
                            <p className="description-additional-forecast">{elem.descriptionTwo}</p>
                        </>
                    ) : (
                        <>
                            <p className="title-additional-forecast">{elem.title}</p>
                            <p className="description-additional-forecast">{elem.description}</p>
                            <img src={elem.image} alt={elem.alt} className="image-additional-forecast"/>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}