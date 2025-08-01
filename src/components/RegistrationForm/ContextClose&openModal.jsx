import { createContext } from "react";
import { useState } from "react";
export const ModalContext=createContext(null)
export const ModalProvider=({children})=>{
    const [openModal,setOpenModal]=useState(false)
    const valueOpenModal=()=>{
        setOpenModal(!openModal)
    }
    return(
        <ModalContext.Provider value={{openModal,valueOpenModal}}>
        {children}
        </ModalContext.Provider>
    )
}