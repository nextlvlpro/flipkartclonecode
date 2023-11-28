import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoggedInUserContext } from '../../LoggedInUserContext'

export default function () {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { currentUser, setCurrentUser } = useContext(LoggedInUserContext)
  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()

    if (!email || !password) {
      return alert('fill every field')
    }
    try {
      const { data } = await axios.post('/user/login', { email, password })

      if (data.email == email) {
        setCurrentUser(data)
        alert('Logine Done')
        navigate(-1)
      }
      if(data == 'user does not Exists') {
        alert(data)
      }

    } catch (err) {
      alert("failed try Again")
    }


  }


  return (
    <>
      <div className='flex md:flex-row flex-col items-center justify-center max-w-[650px] m-auto md:h-[65vh]'>
        <div className='flex flex-col md:h-[60vh] bg-[#2874F0] md:max-w-[45%] py-10 px-5 w-full'>
          <div className='text-white font-semibold text-3xl md:max-w-[400px] w-full'>
            Login
          </div>
          <div className=' text-neutral-300 text-lg max-w-[300px] pt-5'>
            Get access to your Orders, Wishlist and Recommendations
          </div>
        </div>
        <div className=' md:h-[60vh] md:w-[60%] w-full pt-10 px-5 pb-5 bg-white'>
          <form className=' flex flex-col'>

            <input type="email"
              className='w-full mb-3 pt-2 px-2 pb-1 outline-none border-b border-gray-300 focus:border-blue-500 focus:placeholder:text-xs placeholder:align-top'
              placeholder='Enter Email'
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />
            <input type="password"
              className='w-full mb-3 pt-2 px-2 pb-1 outline-none border-b border-gray-300 focus:border-blue-500 focus:placeholder:text-xs placeholder:align-top'
              placeholder='*******'
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
            <div className='max-w-sm'>
              <p className='text-[0.8rem] text-gray-500'> By continuing, you agree to Flipkart's <span className='text-blue-700'>Terms of Use</span> and <span className='text-blue-700'>Privacy Policy.</span></p>
            </div>
            <button type='sybmit'
              onClick={handleLogin}
              className='w-full border py-3 bg-[#fb641b] text-white' >
              Login
            </button>
          </form>
          <Link to={'/newuser/register'} className='w-full grid self-auto text-center py-3 text m-auto text-blue-600 font-semibold'>New User? Sign Up</Link>
        </div>
      </div>
    </>
  )
}
