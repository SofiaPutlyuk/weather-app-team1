import "./main.scss"
import Header from "./components/Header/Header";
import { SearchWeather } from "./components/WeatherSearch/SearchWeather";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { ModalProvider } from "./components/RegistrationForm/ContextClose&openModal";
import { ModalMessage } from "./components/ModalMessage/ModalMessage";
import {Cards } from "./components/Cards/Cards";
export const App = () => {
  return (
    <>
    <ModalProvider>
    <Header/>
    <ModalMessage>
      <RegistrationForm/>
    <SearchWeather />
    </ModalMessage>
    </ModalProvider>
    </>
  )
}
export default App;
