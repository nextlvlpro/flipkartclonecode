import axios from 'axios'
import Carousel from "nuka-carousel"
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function () {
    const category = 'fashion'
    const [productsData, setProductsData] = useState([])
    useEffect(() => {
        fetchdata()

    }, [])
    useParams()
    async function fetchdata() {

        let { data } = await axios.post('/products/' + category);
        setProductsData(data)

    }

    return (
        <div className='py-1'>
            <div className='hidden md:flex flex-col bg-white py-5 '>
                <Link to={'/catedoryproducts/fashion'} className='font-semibold text-2xl mb-5 ml-10'>{category}</Link>
                <Carousel autoplay={true} withoutControls={false} pauseOnHover={true} wrapAround={true}
                    slidesToShow={5}
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
                    {productsData?.map((products, i) => (
                        <div key={i} className='ml-10 shrink-0'>
                            <Link to={'/products/' + products._id} className='flex flex-col rounded-md gap-y-1 border px-4 py-4 items-center justify-center mr-5 shrink-0'>
                                <img className='h-[165px] w-[160px]' src={products.url} alt="" />
                                <div className='text-[15px] text-center'>
                                    {[products.itemname.split('(')].map((itemname, i) => (<div key={i}>{itemname[0]}</div>))}
                                </div>
                                <div className='font-semibold text-center'>
                                    incl of offers
                                </div>
                            </Link>
                        </div>

                    ))}
                </Carousel>
            </div>


            <div className='hidden sm:flex md:hidden flex-col bg-white py-5 '>
            <Link to={'/catedoryproducts/fashion'} className='font-semibold text-2xl mb-5 ml-10'>{category}</Link>
                <Carousel autoplay={true} withoutControls={false} pauseOnHover={true} wrapAround={true}
                    slidesToShow={3}
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
                    {productsData?.map((products, i) => (
                        <div key={i} className='ml-10 shrink-0'>
                            <Link to={'/products/' + products._id} className='flex flex-col rounded-md gap-y-1 border px-4 py-4 items-center justify-center mr-5 shrink-0'>
                                <img className='h-[165px] w-[160px]' src={products.url} alt="" />
                                <div className='text-[15px] text-center'>
                                    {[products.itemname.split('(')].map((itemname, i) => (<div key={i}>{itemname[0]}</div>))}
                                </div>
                                <div className='font-semibold text-center'>
                                    incl of offers
                                </div>
                            </Link>
                        </div>

                    ))}
                </Carousel>
            </div>

            <div className='flex sm:hidden flex-col bg-white py-5 '>
            <Link to={'/catedoryproducts/fashion'} className='font-semibold text-2xl mb-5 ml-10'>{category}</Link>
                <Carousel autoplay={true} withoutControls={false} pauseOnHover={true} wrapAround={true}
                    slidesToShow={2}
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
                    {productsData?.map((products, i) => (
                        <div key={i} className='ml-10 shrink-0'>
                            <Link to={'/products/' + products._id} className='flex flex-col rounded-md gap-y-1 border px-4 py-4 items-center justify-center mr-5 shrink-0'>
                                <img className='h-[165px] w-[160px]' src={products.url} alt="" />
                                <div className='text-[15px] text-center'>
                                    {[products.itemname.split('(')].map((itemname, i) => (<div key={i}>{itemname[0]}</div>))}
                                </div>
                                <div className='font-semibold text-center'>
                                    incl of offers
                                </div>
                            </Link>
                        </div>

                    ))}
                </Carousel>
            </div>

        </div>
    )
}
