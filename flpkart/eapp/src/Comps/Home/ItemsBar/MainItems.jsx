
import React from 'react'
import Carousel from "nuka-carousel"



export default function MainItems() {



  return (
    <div className='  cursor-pointer'>
      <Carousel autoplay={true} withoutControls={false} renderCenterCenterControls={true} pauseOnHover={false} wrapAround={true} 
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide} className='h-[5.5rem] w-10 rounded-r-[5px] bg-white md:flex items-center justify-center hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="gray" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

          </button>
        )}

        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide} className='h-[5.5rem] w-10 rounded-l-[5px] bg-white md:flex items-center justify-center hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="gray" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

          </button>
        )}>

        <img onClick={(e) => alert('fuck')} className='w-full' src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/b91142ce378acb54.jpg?q=90" />
        <img className='w-full' src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/dd7f425c6a2fa49a.jpg?q=90" />
        <img className='w-full' src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/2dc3aafcc8afbaf8.jpg?q=90" />
        <img className='w-full' src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/04e7d780ead8b977.jpg?q=90" />
      </Carousel>
      <img className='w-full md:h-32 h-20 md:py-2 py-1 lg:object-contain' src="https://rukminim1.flixcart.com/fk-p-flap/1000/90/image/e3fab105530a540f.jpg?q=20" alt="" />
    </div>
    
  )
}
