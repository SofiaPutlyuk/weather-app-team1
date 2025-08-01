import "./main.scss"
import Header from "./components/Header/Header";
import { SearchWeather } from "./components/WeatherSearch/SearchWeather";
// import { Carousel } from "./components/Carousel/Carousel";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { ModalProvider } from "./components/RegistrationForm/ContextClose&openModal";
export const App = () => {
  return (
    <>
    <ModalProvider>
      <Header/>
      <RegistrationForm/>
    </ModalProvider>
    <SearchWeather />
    {/* <Carousel /> */}
    </>
  )
}
export default App;
