import { useState } from "react"
import { UserContex } from "../Context/Useercontext"



export const UserProvider =({children}) =>{
    const [addSection,setAddSection] =useState([])
    let addUser =(user)=>{
         setAddSection ([...addSection,user])
    }
   
    return(
        <UserContex.Provider value={{addSection,addUser}}>
            {children}
        </UserContex.Provider>
    )
}