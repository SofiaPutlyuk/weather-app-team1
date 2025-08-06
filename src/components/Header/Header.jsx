import logo from "../../assets/logo/logoForecast.svg";
import userIcon from "../../assets/logo/user.svg";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ModalContext } from "../RegistrationForm/ContextClose&openModal";
const Header = () => {
  const { valueOpenModal, isRegistration, isLogin, userLogin } =
    useContext(ModalContext);
  const [isOpen, setIsOpen] = useState(false);
  const [registrationUsers, setRegistrationUsers] = useState([]);
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("Users")) || [];
    console.log("Users:", users);
    localStorage.setItem("Users", JSON.stringify(users));
    setRegistrationUsers(users);
  }, [isLogin, isRegistration]);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const logout = () => {
    userLogin(false);
  };
  return (
    <>
      <header className="header">
        <div className="header_wrapper">
          <img src={logo} alt="logo" className="header_wrapper_logo" />
          <nav className="header_wrapper_nav">
            <a href="#">Who we are</a>
            <a href="#">Contacts</a>
            <a href="#">Menu</a>
          </nav>
          <div className="header_wrapper_userContainer">
            {!isLogin && (
              <button type="button" className="header_wrapper_userContainer_buttonSignup" onClick={() => valueOpenModal(true)}>
                Sign Up
              </button>
            )}
            {isLogin && (
              <button type="button" className="header_wrapper_userContainer_buttonSignout" onClick={logout}>
                Sign Out
              </button>
            )}
            {isLogin && registrationUsers.length > 0 && (
              <h1 className="header_wrapper_userContainer_name">
                {registrationUsers[registrationUsers.length - 1]?.Username}
              </h1>
            )}
            <img className="header_wrapper_userContainer_avatar" src={userIcon} alt="userIcon"/>
            <p onClick={handleClick} className="header_wrapper_userContainer_burgerMunuTitle">
              Menu
            </p>
            <IoIosArrowDown size={14} className="header_wrapper_userContainer_burgerMunuArrow"/>
          </div>
        </div>
      </header>
      <section
        className="mobileHeader"
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <div className="mobileHeader_wrapper">
          <nav className="mobileHeader_wrapper_nav">
            <a href="#">Who we are</a>
            <a href="#">Contacts</a>
            <a href="#">Menu</a>
          </nav>
          <div className="mobileHeader_wrapper_userContainer">
            <div className="mobileHeader_wrapperr_userContainer_avatar">
              <img className="mobileHeader_wrapper_userContainer_avatar" src={userIcon} alt=""/>
            </div>
            <p className="mobileHelper_wrapper_userContainer_name"></p>
            {!isLogin && (
              <button type="button" className="mobileHeader_wrapper_userContainer_button">
                Sign Up
              </button>
            )}
            {isLogin && (
              <button type="button" className="mobileHeader_wrapper_userContainer_button">
                Sign Out
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
