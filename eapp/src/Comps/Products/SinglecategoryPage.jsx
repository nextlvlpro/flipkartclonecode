import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function SinglecategoryPage() {
    const [loading, setLoding] = useState(true)
    const { id } = useParams()
    console.log(id);

    const [categoryData, setcategoryData] = useState('')
    useEffect(() => {
        axios.post('/products/' + id).then((data) => {
            
            setcategoryData(data)
            setLoding(false)
        })
    }, [id])

    return (
        <div className='flex bg-white flex-wrap gap-2 p-5 items-center justify-center'>
            {!!loading && (
                <div>Loading......</div>
            )}
            {categoryData.data?.map((products, i) => (
                <div key={i} className=''>
                    <Link to={'/products/' + products._id} className='flex flex-col rounded-md gap-y-1  px-4 py-4 items-center justify-center'>
                        <img className='md:h-[165px] md:w-[160px] h-[120px] w-[100%]' src={products.url} alt="" />
                        <div className='text-[15px] text-center'>
                            {[products.itemname.split('(')].map((itemname, i) => (<div key={i}>{itemname[0]}</div>))}
                        </div>
                        <div className='bg-[#388E3C] text-white text-[12px] p-1 w-[40px] text-center rounded-md flex items-center justify-center gap-[2px]'>
                            <span> {products.ratings}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <div className='font-semibold text-center flex items-center justify-center'>
                                <span className=''>₹{products.shownprice} </span>
                                <span className='mx-2 text-gray-400'>₹{products.falseprice} </span>
                                <span className='text-green-600 text-xs'>{((1-(products.shownprice/products.falseprice))*100).toFixed(0)}% off</span>
                            </div>
                        </div>

                        <div className='font-semibold text-center'>
                            incl of offers
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}
