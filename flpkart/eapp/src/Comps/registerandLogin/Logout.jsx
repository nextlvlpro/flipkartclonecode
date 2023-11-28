import React, { useContext } from 'react'
import { LoggedInUserContext } from '../../LoggedInUserContext'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Logout() {
    const {currentUser,ready,setCurrentUser} = useContext(LoggedInUserContext)
    const navigate = useNavigate('')

    function logout (e) {
        

        axios.post('/user/logout').then((res) => {
           
                setCurrentUser(null)
                navigate('/')
            
            
        })
    }

  

  return (
    <div className='flex flex-col mt-10 items-center justify-center'>
        <div>Logged in as {currentUser?.name} {`(${currentUser?.email})`}
        
        </div>
      <button onClick={logout} className='p-2 bg-[#2874F0] rounded text-white mt-3'>Logout</button>
    </div>
  )
}
