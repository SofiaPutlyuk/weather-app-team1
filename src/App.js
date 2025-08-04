import "./main.scss"
import Header from "./components/Header/Header";
import { SearchWeather } from "./components/WeatherSearch/SearchWeather";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { ModalProvider } from "./components/RegistrationForm/ContextClose&openModal";
import { ModalMessage } from "./components/ModalMessage/ModalMessage";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner"
export const App = () => {
  return (
    <>
    <ModalProvider>
    <Header/>
    <Banner/>
    <ModalMessage>
      <RegistrationForm/>
    <SearchWeather />
    <Footer/>
    </ModalMessage>
    </ModalProvider>
    </>
  )
}
export default App;
