import "./main.css"
import Header from "./components/Header/Header";
import "../src/components/Header/_header.scss"
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
export const App = () => {
  return (
    <>
    <Header/>
    <RegistrationForm/>
    </>
  )
}
export default App;
