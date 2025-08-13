import { createContext } from "react";
import { useState } from "react";

export const WhoWeAreContext=createContext(null)

export const WhoWeAreProvider=({children})=>{
    const [isShowModalWhoWeAre,setShowModalWhoWeAre]=useState(false)
    const WhoWeAreCloseModal=()=>{
        setShowModalWhoWeAre(!isShowModalWhoWeAre)
    }
    return(
        <WhoWeAreContext.Provider value={{isShowModalWhoWeAre,WhoWeAreCloseModal}}>
            {children}
        </WhoWeAreContext.Provider>
    )
}