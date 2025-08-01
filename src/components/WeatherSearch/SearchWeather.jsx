import { useState, useCallback } from "react";
import searchIcon from "../../assets/logo/searchIcon.svg";
import { Carousel } from "../Carousel/Carousel";
export const SearchWeather = () => {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState(null)
    const fetchLocation = useCallback(async () => {
        try {
            if (!city.trim()) {
                alert("Введіть назву міста");
                return;
            }
            const key = "c899df01a007e998373f0576e8f261c7";
            const responsive = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${key}`)
            const data = await responsive.json()
            setWeather(data)
        }
        catch (error) {
            console.log("Error", error.message)
        }
    }, [city])
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
        <Carousel query={city} />
        </>
    )
}