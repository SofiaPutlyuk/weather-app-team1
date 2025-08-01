import "./main.scss"
import Header from "./components/Header/Header";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { ModalProvider } from "./components/RegistrationForm/ContextClose&openModal";
export const App = () => {
  return (
    <>
    <ModalProvider>
      <Header/>
      <RegistrationForm/>
    </ModalProvider>
    </>
  )
}
export default App;
