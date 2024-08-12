import { useState } from "react"
import { UserContex } from "../Context/Useercontext"



export const UserProvider =({children}) =>{
    const [addSection,setAddSection] =useState([])
    return(
        <UserContex.Provider value={{addSection}}>
            {children}
        </UserContex.Provider>
    )
}