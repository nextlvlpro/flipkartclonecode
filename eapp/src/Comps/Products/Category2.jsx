import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Category2() {
  return (
    <>
      <div className=' shadow-md bg-white flex px-10 md:py-2 py-1 md:items-center  md:justify-center sm:gap-x-[3.4rem] gap-6 overflow-scroll no-scrollbar '>
         

         <Link to={'/catedoryproducts/mobiles&accessories'} className='flex flex-col items-center justify-center md:gap-2'>
          
          <div className='font-semibold text-gray-900 text-[15px]'>
            Mobiles
          </div>
         </Link>

         <Link to={'/catedoryproducts/fashion'} className='flex flex-col items-center justify-center md:gap-2'>
          
          <div className='font-semibold text-gray-900 text-[15px]'>
            Fashion
          </div>
         </Link>

         <Link to={'/catedoryproducts/elctronics'} className='flex flex-col items-center justify-center md:gap-2'>
          
          <div className='font-semibold text-gray-900 text-[15px]'>
            Electronics
          </div>
         </Link>

        

         <Link to={'/catedoryproducts/appliances'} className='flex flex-col items-center justify-center md:gap-2'>
          
          <div className='font-semibold text-gray-900 text-[15px]'>
            Appliances
          </div>
         </Link>

        
      </div>
      <Outlet />
      </>
  )
}
