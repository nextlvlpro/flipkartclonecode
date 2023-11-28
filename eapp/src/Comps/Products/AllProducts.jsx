
import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

export default function AllProducts() {
    const category = undefined
    const [loading, setLoding] = useState(true)
    const {id} =useParams()
    console.log({id});
    const [productsData, setProductsData] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])
   
    async function fetchdata() {
        let { data } = await axios.post('/allproducts',{category});
        setProductsData(data)
        setLoding(false)
        
    }

   

  return (
    <div className='flex bg-white flex-wrap gap-2 p-5 items-center justify-center'>
        {!!loading && (
            <div>Loading.....</div>
        )}
      {productsData?.map((products, i) => (
                    <div key={i} className=''>
                        <Link to={'/products/'+products._id} className='flex flex-col rounded-md gap-y-1 border px-4 py-4 items-center justify-center'>
                            <img className='md:h-[165px] md:w-[160px] h-[120px] w-[100%]' src={products.url} alt="" />
                            <div className='text-[15px] text-center'>
                                {[products.itemname.split('(')].map((itemname, i) => (<div key={i}>{itemname[0]}</div>))}
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
