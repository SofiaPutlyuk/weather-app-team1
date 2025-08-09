import {createContext,useState } from "react";

export const ContextLoader=createContext(null)

export const ProviderLoader=({children})=>{
    const [showLoader,setShowLoader]=useState(true)
    
    return(
        <ContextLoader.Provider value={{showLoader,setShowLoader}}>
            {children}
        </ContextLoader.Provider>
    )
}
    
