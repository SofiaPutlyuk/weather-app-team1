import "./main.scss"
import Header from "./components/Header/Header";
import { SearchWeather } from "./components/WeatherSearch/SearchWeather";
import { ModalMessage } from "./components/ModalMessage/ModalMessage";
export const App = () => {
  return (
    <>
    <Header/>
    <ModalMessage>
    <SearchWeather />
    </ModalMessage>
    </>
  )
}
export default App;
