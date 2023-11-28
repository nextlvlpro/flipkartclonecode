import React, { useContext, useState } from 'react'
import { Dropdown } from 'flowbite-react';
import logo from './photos/logoMobile.png'

import logoMobile from './photos/logoMobile.png'
import { Link } from 'react-router-dom'
import { LoggedInUserContext } from '../../LoggedInUserContext'
import axios from 'axios'

export default function Navbar2() {
  const { currentUser, cartQuantity,setcartQuantity,cartChanged, setCartChanged } = useContext(LoggedInUserContext)
  const [searchVlaue, setSearchValue] = useState('')
  const [searchData, setSearchdata] = useState(null)

  function search(e) {
    setSearchValue(e.target.value)
    if (e.target.value) {
      document.querySelector('.searchbox').classList.remove('hidden')
      document.querySelector('.searchbox').classList.add('flex')
    } else {
      document.querySelector('.searchbox').classList.remove('flex')
      document.querySelector('.searchbox').classList.add('hidden')
    }

    if(e.target.value) {
      axios.post('/allproducts/search', { searchvalue: searchVlaue }).then(({ data }) => {
        if (data) {
          if (data.length > 0) {
            setSearchdata(data)
          } else {
            setSearchdata(null);
          }
        } else {
          setSearchdata(null)
        }
  
      })
    }
    

  }

  function searchmobile(e) {
    setSearchValue(e.target.value)
    if (e.target.value) {
      document.querySelector('.searchbox2').classList.remove('hidden')
      document.querySelector('.searchbox2').classList.add('flex')
    } else {
      document.querySelector('.searchbox2').classList.remove('flex')
      document.querySelector('.searchbox2').classList.add('hidden')
    }

    axios.post('/allproducts/search', { searchvalue: searchVlaue }).then(({ data }) => {
      if (data) {
        if (data.length > 0) {
          setSearchdata(data)
        } else {
          setSearchdata(null);
        }
      } else {
        setSearchdata(null)
      }

    })

  }

  function hidesearchbox() {
    document.querySelector('.searchbox').classList.remove('flex')
    document.querySelector('.searchbox').classList.add('hidden')
  }

  function hidesearchboxmobile() {
    document.querySelector('.searchbox2').classList.remove('flex')
    document.querySelector('.searchbox2').classList.add('hidden')
  }
  return (
    <div className=' bg-[#2874F0]  w-full'>
      <div className='md:flex hidden items-center justify-center px-7 py-3 m-auto'>

        <div className='flex w-[60%] items-center justify-center gap-7'>
          <div className='logo flex flex-col items-end'>
            <Link to={'/'} className='flex w-[100px]'>
              <img src={logo} alt="Flipkart" title="Flipkart" />
            </Link>
          </div>

          <div className='flex flex-col items-center justify-center ml-3 w-7/12'>
            <div className='flex w-full items-center justify-center outline-none'>
              <div className='bg-[#F0F5FF] h-[2.4rem] flex justify-center items-center rounded-l-md px-2 text-gray-500 font-medium -mr-1 z-[998]'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 16L21 21" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <input value={searchVlaue} onChange={search} type="text" className='bg-[#F0F5FF] h-10 w-full py-1 outline-none rounded-r-md text-[18px]' title="Search for Products, Brands and More" name="q" autoComplete="off" placeholder="Search for Products, Brands and More" />
            </div>


            <div className='searchbox p-2 max-h-[50vh] w-4/12 bg-white absolute rounded top-16 border z-[999] shadow-md shhadow-black hidden flex-col overflow-y-scroll no-scrollbar'>
              <button className='w-full text-center border p-2 rounded shadow-sm mb-3 shadow-black' onClick={hidesearchbox}>Close</button>
              {!searchData && (
                <div>
                  Not Found <br />
                  Type more words for results
                </div>
              )}
              <div>
                {searchData?.map((items, i) => (
                  <div key={i} className='flex flex-col gap-2 border p-1'>
                    <Link to={'/products/' + items._id} onClick={hidesearchbox} >{items.itemname}</Link>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=' w-[30%]  mr-4 text-white'>
          <div className='flex items-center justify-self-start gap-2'>
            <div className='flex items-center justify-center gap-2 cursor-pointer '>
              <div className='flex items-center justify-center gap-2 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                </svg>
                <span className='text-[17px] hidden lg:flex'>Become a Seller</span>
              </div>

            </div>
            <div className='flex items-center justify-center gap-2 cursor-pointer'>

              

              <Dropdown label={<>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg> {!currentUser && (<>Sign In</>)}
              </>
              } 
                arrowIcon={!!currentUser? true:false} placement="top" color='[#2874F0]'>
                  {!currentUser && (
                    <Dropdown.Item as={Link} to='/user/login'> Sign in</Dropdown.Item>
                  )}
                  {!!currentUser && (
                    <Dropdown.Item as={Link} to='/user/logout'> Sign Out</Dropdown.Item>
                  )}
                
                <Dropdown.Item as={Link} to='/'> Home</Dropdown.Item>
                <Dropdown.Item as={Link} to={!!currentUser? '/allcart':'/user/login'}> Cart</Dropdown.Item>
                <Dropdown.Item as={Link} to={!!currentUser? '/orders':'/user/login'}>My Orders</Dropdown.Item>
              </Dropdown>


            </div>
            <Link to={currentUser ? '/allcart' : '/user/login'} className='flex items-center justify-center gap-2 cursor-pointer'>
              <svg width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path>
              </svg>
              <span className='hidden lg:flex text-[18px]'>Cart </span>
              {!!currentUser && !!cartQuantity && cartQuantity?.length > 0 && (
                <div className='relative text-xs border rounded-full w-5 text-center h-5 -top-2 bg-red-500'>
                      {cartQuantity?.length}
                </div>
              )}


            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="white" className="w-7 h-7 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile */}
      {/*  */}
      <div className='w-full bg-[#2874F0] md:hidden flex items-center justify-center flex-col'>
        <div className='border-b pb-2 border-[#4587F2] w-full p-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center gap-3'>
              <div>
                <Dropdown label={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="White" className="w-6 h-6 -mr-5 -ml-3 -my-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>} 
                arrowIcon={false} placement="top" color='[#2874F0]'>
                <Dropdown.Item as={Link} to='/'> Home</Dropdown.Item>
                <Dropdown.Item as={Link} to={!!currentUser? '/allcart':'/user/login'}> Cart</Dropdown.Item>
                <Dropdown.Item as={Link} to={!!currentUser? '/orders':'/user/login'}>My Orders</Dropdown.Item>
                
              </Dropdown>
              </div>
              
              <Link to={'/'}>
                <img src={logoMobile} className=' w-[85px]' />
              </Link>
            </div>

            <div className='flex items-center justify-center gap-8'>
              <Link to={currentUser ? '/allcart' : '/user/login'} className='flex'>
                <svg width="16" height="16" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" fillRule="evenodd"><path d="m5.189 13.04c0 .996-.791 1.804-1.767 1.804-.976 0-1.767-.808-1.767-1.804 0-.996.791-1.804 1.767-1.804.976 0 1.767.808 1.767 1.804"></path><path d="m14.912 2.259h-14.298l2.247 6.917c.042.129.16.216.293.216h8.06c-.064.69-.629 1.841-1.702 1.841h-6.04l1.072 1.991h5.611c1.881 0 2.938-2.278 3.657-4.719.888-3.01 1.219-6.245 1.106-6.245"></path><path d="m.615 2.259l-.592-1.828c-.08-.207.069-.431.287-.431h1.482c.126 0 .24.079.287.198l.682 2.061c0 0-.63 1.642-1.942.066"></path><path d="m2.262.756c0 0 .498 1.503 2.234 1.503l-1.736.749-1.104-.749.607-1.503"></path><path d="m13.424 13.325c0 .837-.664 1.516-1.484 1.516-.82 0-1.484-.679-1.484-1.516 0-.837.664-1.516 1.484-1.516.82 0 1.484.679 1.484 1.516"></path></g></svg>
                {!!currentUser && !!cartQuantity && cartQuantity?.length > 0 && (
                <div className='relative text-xs border rounded-full w-5 text-center h-5 -top-2 bg-red-500'>
                      {cartQuantity?.length}
                </div>
              )}
              </Link>
              <div className='flex items-center justify-center'>

                <Link to={!currentUser ? '/user/login' : '/user/logout'} className='text-white'>
                  {!!currentUser ? <>
                    <svg width="20" height="20" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <g fill="#fff" fillRule="evenodd">
                        <path d="m5.948 6.447c0 1.861 1.552 3.369 3.467 3.369 1.914 0 3.466-1.509 3.466-3.369 0-1.862-1.552-3.37-3.466-3.37-1.915 0-3.467 1.509-3.467 3.37m8.289 5.682c-.121-.041-.245-.075-.37-.102 0 0-1.153-.456-4.367-.456-3.214 0-4.367.456-4.367.456-1.735.343-3.133 2.108-3.133 3.878v2.095h9.357c-.229-.525-.357-1.105-.357-1.714 0-2.01 1.377-3.689 3.237-4.157m.215 5.623l.55.555.532-.573 2.973-3.2c.282-.303.264-.778-.039-1.06-.303-.282-.778-.264-1.06.039l-2.406 2.486-.698-.528c-.292-.294-.766-.297-1.061-.005-.294.292-.297.766-.005 1.061l1.213 1.225" fill="#fff">
                        </path>
                      </g>
                    </svg>
                  </> : <>Login</>}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full p-2'>
          <input value={searchVlaue} onChange={searchmobile} type="text" className='bg-[#F0F5FF] p-2 h-10 w-full py-1 outline-none rounded-md text-[18px]' title="Search for Products, Brands and More" name="q" autoComplete="off" placeholder="Search for Products, Brands and More" />
          <div className='searchbox2 p-2 max-h-[50vh] w-[95%] bg-white absolute rounded top-32 border z-[999] shadow-md shhadow-black hidden flex-col overflow-y-scroll no-scrollbar'>
            <button className='w-full text-center border p-2 rounded shadow-sm mb-3 shadow-black' onClick={hidesearchboxmobile}>Close</button>
            {!searchData && (
              <div>
              Not Found <br />
              Type more words for results
            </div>
            )}
            <div>
              {searchData?.map((items, i) => (
                <div key={i} className='flex flex-col gap-y-1 border p-1'>
                  <Link to={'/products/' + items._id} onClick={hidesearchboxmobile} >{items.itemname}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
