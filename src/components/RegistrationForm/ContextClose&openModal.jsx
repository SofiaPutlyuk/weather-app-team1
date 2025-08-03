import { createContext } from "react";
import { useState } from "react";
export const ModalContext=createContext(null)
export const ModalProvider=({children})=>{
    const [openModal,setOpenModal]=useState(false)
    const [isLogin,setLogin]=useState(false)
    const [authorization,setAuthorization]=useState(false)
    const [isRegistration,setIsRegistration]=useState(false)
    const valueOpenModal=()=>{
        setOpenModal(!openModal)
    }
    const userLogin=()=>{
        setLogin(!isLogin)
    }
    const ValueOpenLoginForm=()=>{
        setAuthorization(!authorization)
    }
    const RegistrationUser = ()=>{
        setIsRegistration(!isRegistration)
    }
    return(
        <ModalContext.Provider value={{openModal,valueOpenModal,userLogin,isLogin,ValueOpenLoginForm,authorization,RegistrationUser,isRegistration}}>
        {children}
        </ModalContext.Provider>
    )
}