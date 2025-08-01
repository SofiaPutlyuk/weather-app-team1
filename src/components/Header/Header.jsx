import logo from '../../assets/logo/logoForecast.svg';
import userIcon from "../../assets/logo/user.svg";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useContext } from 'react';
import { ModalContext } from '../RegistrationForm/ContextClose&openModal';
import { useRef } from 'react';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const {valueOpenModal}=useContext(ModalContext)
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
                        <button className="header_wrapper_userContainer_button" onClick={valueOpenModal}>Sign Up</button>
                        <img className="header_wrapper_userContainer_avatar" src={userIcon} alt="userIcon" />
                        <p onClick={handleClick} className="header_wrapper_userContainer_burgerMunuTitle" >Menu</p>
                        <IoIosArrowDown size={14} className="header_wrapper_userContainer_burgerMunuArrow" />
                    </div>
                </div>
            </header>
            <section className="mobileHeader" style={{ display: isOpen ? 'flex' : 'none' }}>
                <div className="mobileHeader_wrapper">
                    <nav className="mobileHeader_wrapper_nav">
                        <a href="#">Who we are</a>
                        <a href="#">Contacts</a>
                        <a href="#">Menu</a>
                    </nav>
                    <div className="mobileHeader_wrapper_userContainer">
                        <div className="mobileHeader_wrapperr_userContainer_avatar">
                            <img className="mobileHeader_wrapper_userContainer_avatar" src={userIcon} alt="" />
                        </div>
                        <button className="mobileHeader_wrapper_userContainer_button">Sign Up</button>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Header;
