import "./main.scss"
import Header from "./components/Header/Header";
import { SearchWeather } from "./components/WeatherSearch/SearchWeather";
export const App = () => {
  return (
    <>
    <Header/>
    <SearchWeather />
    </>
  )
}
export default App;
