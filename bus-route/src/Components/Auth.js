import React, { useContext, useState } from "react"


const Authcontext=React.createContext()
export default function Auth(props) {
    const[user,setUser]=useState(null)
   const Login=(user)=>{
    setUser(user)
   }
  return (
    <div>
         <Authcontext.Provider value={{user,Login}}>
                {props.children}
            </Authcontext.Provider>
    </div>
  )
}
export function useAuth(){
    return useContext(Authcontext)
}