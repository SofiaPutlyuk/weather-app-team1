import "./main.scss"
import Header from "./components/Header/Header";
import { SearchWeather } from "./components/WeatherSearch/SearchWeather";
// import { Carousel } from "./components/Carousel/Carousel";
export const App = () => {
  return (
    <>
    <Header/>
    <SearchWeather />
    {/* <Carousel /> */}
    </>
  )
}
export default App;
