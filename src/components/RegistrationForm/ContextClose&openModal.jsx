import { createContext } from "react";
import { useState } from "react";
export const ModalContext=createContext(null)
export const ModalProvider=({children})=>{
    const [openModal,setOpenModal]=useState(false)
    const [openLoginForm,setOpenLoginForm]=useState(false)
    const valueOpenModal=()=>{
        setOpenModal(!openModal)
    }
    const valueOpenLoginForm=()=>{
        setOpenLoginForm(!openLoginForm)
    }
    return(
        <ModalContext.Provider value={{openModal,valueOpenModal,openLoginForm,valueOpenLoginForm,openLoginForm}}>
        {children}
        </ModalContext.Provider>
    )
}