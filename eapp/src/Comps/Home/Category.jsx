import React from 'react'
import { Link } from 'react-router-dom'


export default function Category() {
  return (
      <div className=' bg-white flex px-10 md:py-4 py-1 items-center justify-start lg:justify-center sm:gap-x-[3.4rem] gap-6 overflow-scroll no-scrollbar '>
        

         <Link to={'/catedoryproducts/mobiles&accessories'} className='flex flex-col items-center justify-center md:gap-2'>
          <div className='w-[63px] hover:cursor-pointer'>
              <img src="https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" alt="" />
          </div>
          <div className='font-semibold text-gray-900 text-[15px]'>
            Mobiles
          </div>
         </Link>

         <Link to={'/catedoryproducts/fashion'} className='flex flex-col items-center justify-center md:gap-2'>
          <div className='w-[63px] hover:cursor-pointer'>
              <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />
          </div>
          <div className='font-semibold text-gray-900 text-[15px]'>
            Fashion
          </div>
         </Link>

         <Link to={'/catedoryproducts/elctronics'} className='flex flex-col items-center justify-center md:gap-2'>
          <div className='w-[63px] hover:cursor-pointer'>
              <img src="https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100" alt="" />
          </div>
          <div className='font-semibold text-gray-900 text-[15px]'>
            Electronics
          </div>
         </Link>

         <Link to={'/catedoryproducts/home'} className='flex flex-col items-center justify-center md:gap-2'>
          <div className='w-[63px] hover:cursor-pointer'>
              <img src="https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100" alt="" />
          </div>
          <div className='font-semibold text-gray-900 text-[15px]'>
            Home & Furniture
          </div>
         </Link>

         <Link to={'/catedoryproducts/appliances'} className='flex flex-col items-center justify-center md:gap-2'>
          <div className='w-[63px] hover:cursor-pointer'>
              <img src="https://rukminim1.flixcart.com/flap/80/80/image/0ff199d1bd27eb98.png?q=100" alt="" />
          </div>
          <div className='font-semibold text-gray-900 text-[15px]'>
            Appliances
          </div>
         </Link>

         <Link to={'/catedoryproducts/travel'} className='flex flex-col items-center justify-center md:gap-2'>
          <div className='w-[63px] hover:cursor-pointer'>
              <img src="https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" alt="" />
          </div>
          <div className='font-semibold text-gray-900 text-[15px]'>
            Travel
          </div>
         </Link>
        
      </div>
    
  )
}
