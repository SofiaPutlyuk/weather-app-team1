import "./main.scss";
import Header from "./components/Header/Header";
import { SearchWeather } from "./components/WeatherSearch/SearchWeather";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { ModalProvider } from "./components/RegistrationForm/ContextClose&openModal";
import { ModalMessage } from "./components/ModalMessage/ModalMessage";
import LoginForm from "./components/LoginForm/LoginForm";
import News from "./components/News/News";
import { Footer } from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { ProviderLoader } from "./components/Loader/ContextLoader";
import { ContextLoader } from "./components/Loader/ContextLoader";
import { useContext } from "react";
export const App = () => {
  const {showLoader}=useContext(ContextLoader)
  if(showLoader){
    return <Loader />
  }
  return (
    <>
      <ProviderLoader>
        <ModalProvider>
          <Header />
          <ModalMessage>
            <RegistrationForm />
            <LoginForm />
            <News />
            <SearchWeather />
            <Footer />
          </ModalMessage>
        </ModalProvider>
      </ProviderLoader>
    </>
  );
};
export default App;
