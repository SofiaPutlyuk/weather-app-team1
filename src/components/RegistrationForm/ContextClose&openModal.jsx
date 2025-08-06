import { createContext } from "react";
import { useState } from "react";
export const ModalContext = createContext(null)
export const ModalProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false)
    const [isLogin, setLogin] = useState(false)
    const [authorization, setAuthorization] = useState(false)
    const [isRegistration, setIsRegistration] = useState(false)
    const valueOpenModal = (value) => {
        if (typeof value === "boolean") {
            setOpenModal(value)
        } else {
            setOpenModal(!openModal)
        }

    }
    const userLogin = (value) => {
        if (typeof value === "boolean") {
            setLogin(value)
        } else {
            setLogin(!isLogin)
        }
    }
    const ValueOpenLoginForm = (value) => {
        if (typeof value === "boolean") {
            setAuthorization(value)
        } else {
            setAuthorization(!authorization)
        }
    }
    const RegistrationUser = (value) => {
        if (typeof value === "boolean") {
            setIsRegistration(value)
        }
        setIsRegistration(!isRegistration)
    }
    return (
        <ModalContext.Provider value={{ openModal, valueOpenModal, userLogin, isLogin, ValueOpenLoginForm, authorization, RegistrationUser, isRegistration }}>
            {children}
        </ModalContext.Provider>
    )
}