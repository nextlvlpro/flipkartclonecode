import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoggedInUserContext } from '../../LoggedInUserContext'

export default function () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate('')
  const {currentUser} = useContext(LoggedInUserContext)
  function handleRegister(e) {
    e.preventDefault()

    axios.post('/newuser/register', {name, email,password}).then((res) => {
      if(res.data == 'done') {
        navigate('/')
      }
    })
  }

 

  return (
    <>
      <div className='flex md:flex-row flex-col items-center justify-center max-w-[650px] m-auto md:h-[65vh]'>
        <div className='flex flex-col md:h-[60vh] bg-[#2874F0] md:max-w-[45%] w-full py-10 px-5'>
          <div className='text-white font-semibold text-3xl max-w-[400px]'>
            Looks like you're 
          </div>
          <div className='text-white font-semibold text-3xl pt-3'>
          new here!
          </div>
          <div className=' text-neutral-300 text-lg max-w-[300px] pt-5'>
            Sign up with your Email to get started
          </div>
        </div>
        <div className='border border-red-500 md:h-[60vh] md:w-[60%] w-full pt-10 px-5 pb-5 bg-white'>
            <form className=' flex flex-col'>
            <input type="text" 
              className='w-full mb-3 pt-2 px-2 pb-1 outline-none border-b border-gray-300 focus:border-blue-500 focus:placeholder:text-xs placeholder:align-top' 
              placeholder='Your Name'
              value={name}
              onChange={(e) => {setName(e.target.value)}}
              />
              <input type="email" 
              className='w-full mb-3 pt-2 px-2 pb-1 outline-none border-b border-gray-300 focus:border-blue-500 focus:placeholder:text-xs placeholder:align-top' 
              placeholder='Enter Email'
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
              />
              <input type="password" 
              className='w-full mb-3 pt-2 px-2 pb-1 outline-none border-b border-gray-300 focus:border-blue-500 focus:placeholder:text-xs placeholder:align-top' 
              placeholder='*******' 
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
              />
              <div className='max-w-sm'>
                <p className='text-[0.8rem] text-gray-500'> By continuing, you agree to Flipkart's <span className='text-blue-700'>Terms of Use</span> and <span className='text-blue-700'>Privacy Policy.</span></p>
              </div>
              <button type='sybmit' 
              onClick={handleRegister} 
              className='w-full border py-3 bg-[#fb641b] text-white' >
                Register
              </button>
              <Link to={'/user/login'} className='text-center py-3 text m-auto text-blue-600 font-semibold shadow-md w-full hover:shadow-lg'>Existing User? Log in</Link>
            </form>
            
        </div>
      </div>
    </>
  )
}
