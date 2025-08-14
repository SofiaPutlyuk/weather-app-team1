import { createContext, useState } from "react";

export const MenuContext=createContext(null)

export const MenuProvider=({children})=>{
    const [isOpenMenu,setOpen]=useState(false)

    const openMenu=()=>{
        setOpen(!isOpenMenu)
    }
    return(
        <MenuContext.Provider value={{isOpenMenu,openMenu}}>
            {children}
        </MenuContext.Provider>
    )
}
