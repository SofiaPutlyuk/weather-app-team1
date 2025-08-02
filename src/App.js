import "./main.scss"
import Header from "./components/Header/Header";
import { SearchWeather } from "./components/WeatherSearch/SearchWeather";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { ModalProvider } from "./components/RegistrationForm/ContextClose&openModal";
import { ModalMessage } from "./components/ModalMessage/ModalMessage";
import LoginForm from "./components/LoginForm/LoginForm";
export const App = () => {
  return (
    <>
    <ModalProvider>
    <Header/>
    <ModalMessage>
      <RegistrationForm/>
      <LoginForm/>
    <SearchWeather />
    </ModalMessage>
    </ModalProvider>
    </>
  )
}
export default App;
