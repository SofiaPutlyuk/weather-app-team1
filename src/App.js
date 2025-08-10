import "./main.scss";
import Header from "./components/Header/Header";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { ModalProvider } from "./components/RegistrationForm/ContextClose&openModal";
import { ModalMessage } from "./components/ModalMessage/ModalMessage";
import LoginForm from "./components/LoginForm/LoginForm";
import Banner from "./components/Banner/Banner";
import News from "./components/News/News";
import Loader from "./components/Loader/Loader";
import { ProviderLoader } from "./components/Loader/ContextLoader";
import { ContextLoader } from "./components/Loader/ContextLoader";
import { WeatherContext } from "./components/WeatherContext/WeatherContext";
import {Carousel } from "./components/Carousel/Carousel";
import {Cards} from "./components/Cards/Cards";
import { GameCloud } from "./components/GameCloud/GameCloud";
import { useContext, useState } from "react";
import { Footer } from "./components/Footer/Footer";
export const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const { showLoader } = useContext(ContextLoader)
  if (showLoader) {
    return <Loader />
  }
  return (
    <>
    <div className="container">
      <ProviderLoader>
        <ModalProvider>
          <Header />
          <ModalMessage>
            <RegistrationForm />
            <LoginForm />
            <WeatherContext.Provider value={{ city, setCity, weather, setWeather }}>
             <Banner />
              <Cards />
              <GameCloud />
              <News />
              <Carousel />
            </WeatherContext.Provider>
            <Footer />
          </ModalMessage>
        </ModalProvider>
      </ProviderLoader>
      </div>
    </>
  );
};
export default App;
