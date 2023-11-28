import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export const LoggedInUserContext = createContext({})

export default function LoggedInUserContextProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null)
    const [ready, setReady] = useState(false)
    const [cartChanged, setCartChanged] = useState(false)
    const [cartQuantity, setcartQuantity] = useState(null)
  
    
    useEffect(()=>{
         if(!currentUser) {
            axios.get('/currentuser').then(({data}) => {
                setCurrentUser(data)
                setReady(true)
            }) 
         }

         if(currentUser) {
          setReady(true)
         }
    },[])

   useEffect(()=> {
    
    if(currentUser) {
      setCartChanged(false)
      axios.post('/cart/cartcount', {userid:currentUser.email}).then(({data}) => {
        if(data) {
          setcartQuantity(data)
          
        } else {
          setcartQuantity(null);
        }
      
      })
    }

      
   },[currentUser, cartChanged])

  return (
    <LoggedInUserContext.Provider value={{currentUser, setCurrentUser,ready,cartChanged, setCartChanged, cartQuantity}}>
        {children}
    </LoggedInUserContext.Provider>
  )
}
