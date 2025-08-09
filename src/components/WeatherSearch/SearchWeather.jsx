import { useCallback , useContext } from "react";
import searchIcon from "../../assets/logo/searchIcon.svg";
import { WeatherContext } from "../WeatherContext/WeatherContext";
import { useModal } from "../ModalMessage/ModalMessage";
export const SearchWeather = () => {
      const { city, setCity, setWeather } = useContext(WeatherContext);
     const { showModal } = useModal();
    const fetchLocation = useCallback(async () => {
        try {
            if (!city.trim()) {
               showModal("Введіть назву міста")
                return;
            }
            const key = "c899df01a007e998373f0576e8f261c7";
            const responsive = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${key}`)
            const data = await responsive.json()
            console.log(data)
            setWeather(data)
        }
        catch (error) {
            console.log("Error", error.message)
        }
    }, [city , showModal])
    const handleInputWeather = (e) => {
        setCity(e.target.value)
    }
    return (
        <>
        <form className="form-weather" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Search location..." onChange={handleInputWeather} value={city} />
            <button type="button" onClick={fetchLocation} >
                <img src={searchIcon} alt="search-icon" className="search-icon" />
            </button>
        </form>
        </>
    )
}