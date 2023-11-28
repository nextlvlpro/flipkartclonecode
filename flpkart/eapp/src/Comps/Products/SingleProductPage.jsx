import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { LoggedInUserContext } from '../../LoggedInUserContext'


export default function () {
  const { id } = useParams()
  const [singleProductData, setSingleProductData] = useState([])
  const [loading, setloading] = useState(true)
  const {currentUser} = useContext(LoggedInUserContext)
  useEffect(() => {
    axios.get('/singleprodcuts/' + id).then(({ data }) => {
      setSingleProductData(data)
      setloading(false)
    })

  }, [id])


  return (
    <>
    {!!loading && (
      <div>Loading.......</div>
    )}
    <div className='mt-1 md:flex hidden items-center justify-center'>
      <div className='w-[90%] px-3 py-4 bg-white'>
        <div className=' flex'>
          <div className='flex flex-col shrink-0  gap-2'>
            <div className='flex shrink-0  gap-2'>
            <div className='flex flex-col gap-[2px]' >
              <img className='w-16 h-16 border-[2px] border-gray-200 py-1 px-2 hover:border-[#2874F0] cursor-pointer' src={singleProductData.url} alt="mobilePhoto" />
              <img className='w-16 h-16 border-[2px] border-gray-200 py-1 px-2 hover:border-[#2874F0] cursor-pointer' src={singleProductData.url} alt="mobilePhoto" />
              <img className='w-16 h-16 border-[2px] border-gray-200 py-1 px-2 hover:border-[#2874F0] cursor-pointer' src={singleProductData.url} alt="mobilePhoto" />
              <img className='w-16 h-16 border-[2px] border-gray-200 py-1 px-2 hover:border-[#2874F0] cursor-pointer' src={singleProductData.url} alt="mobilePhoto" />
              <img className='w-16 h-16 border-[2px] border-gray-200 py-1 px-2 hover:border-[#2874F0] cursor-pointer' src={singleProductData.url} alt="mobilePhoto" />
              <img className='w-16 h-16 border-[2px] border-gray-200 py-1 px-2 hover:border-[#2874F0] cursor-pointer' src={singleProductData.url} alt="mobilePhoto" />
            </div>
            <div className='items-center justify-center mx-5'>
              <img className='py-3 w-96 border px-12' src={singleProductData.url} alt={singleProductData.itemname} />
            </div>
            </div>
            {/*  */}
            <div className='flex items-center justify-center'>
              <Link to={currentUser? '/cart/'+id : '/user/login'} className='border font-semibold text-lg text-white bg-[#FF9F00] px-12 py-4 flex items-center justify-center gap-2'>
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path  d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                <span>GO TO CART</span>
              </Link>
              <Link to={currentUser? '/buysingleproduct/'+id : '/user/login'} className='border font-semibold text-lg text-white bg-[#FB641B] px-12 py-4 flex items-center justify-center gap-2'>
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path  d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                <span>BUY NOW</span>
              </Link>
            </div>
          </div>

          <div className=' py-1 px-2 h-[100vh] overflow-y-scroll no-scrollbar'>
            <div className='flex flex-col gap-2'>
              {/*  */}
              <div className='text-gray-500 font-medium text-xs flex gap-x-3'>
                <Link to={'/'}>Home {`  >`}</Link> <Link to={'/products'}>products{`  >`}</Link> <Link to={'/catedoryproducts/' + singleProductData.category}>{singleProductData.category}{` >`}</Link>
              </div>
              {/*  */}

              <div className='text-md font-medium'>
                {singleProductData.itemname}
              </div>

              {/*  */}
              <div className='flex gap-2 items-center justify-normal'>
                <div className='bg-[#388E3C] text-white text-[12px] p-1 w-[40px] text-center rounded-md flex items-center justify-center gap-[2px]'>
                  <span> {singleProductData.ratings}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className='text-gray-600 font-medium text-sm'>
                  8,833 Ratings & 1,091 Reviews
                </div>
              </div>
              {/*  */}
              <div>
                <div className='text-green-700 font-medium text-sm'>
                  Extra ₹{singleProductData.falseprice - singleProductData.shownprice} off
                </div>
                <div>
                  <div className='flex items-baseline gap-3 p-0'>
                    <span className='font-medium text-3xl'>₹{Intl.NumberFormat('en-in').format(singleProductData.shownprice)}</span> <span className='text-gray-500 font-medium text-sm '>₹{Intl.NumberFormat('en-in').format(singleProductData.falseprice)}</span>
                  </div>
                  <div className='text-gray-700  text-sm'>
                    + ₹69 Secured Packaging Fee
                  </div>
                </div>
              </div>
              {/*  */}
              <div>
                <div className=' font-medium'>
                  Available offers
                </div>
                <div>
                  <div className='px-3 py-1 flex items-center gap-1'>
                    <img className='w-5' src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />
                    <span className='font-medium text-sm'>Bank Offer</span> <span className='text-sm'>10% off on Kotak Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above T&C</span>
                  </div>
                  <div className='px-3 py-1 flex items-center gap-1'>
                    <img className='w-5' src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />
                    <span className='font-medium text-sm'>Bank Offer</span> <span className='text-sm'>10% off on SBI Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above T&C</span>
                  </div>
                  <div className='px-3 py-1 flex items-center gap-1'>
                    <img className='w-5' src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />
                    <span className='font-medium text-sm'>Bank Offer</span> <span className='text-sm'>10% off on HDB Credit Card, up to ₹1250 on orders of ₹5,000 and above T&C</span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className='pt-3'>
                1 Year Domestic Warranty
              </div>
              {/*  */}

              <div className='flex flex-col mt-20 gap-5'>
                {/*  */}
                <div className=' flex items-center justify-start gap-20'>
                  <div className='font-medium text-gray-500 text-sm w-20'>
                    Highlights
                  </div>
                  <div>
                    <ul className=' list-disc'>
                      {singleProductData.specs?.split(',').map((item, i) => (
                        <li key={i} className='text-gray-500 text-left'><div className='text-black'>{item}</div></li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/*  */}
                <div className=' flex items-center justify-start gap-20'>
                  <div className='font-medium text-gray-500 text-sm w-20'>
                    seller
                  </div>
                  <div>
                    <ul className=' list-disc'>
                      {singleProductData.retailer?.split(',').map((item, i) => (
                        <li key={i} className='text-gray-500 text-left'><div className='text-black'>{item}</div></li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/*  */}
                {singleProductData.description && (
                    <div className='flex items-center justify-start gap-20'>
                    <div className='font-medium text-gray-500 text-sm w-20'>
                      Description
                    </div>
                    <div className='text-xs'>
                      {singleProductData.description}
                    </div>
                  </div>
                )}
                
                {/*  */}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>



    {/* Mobile View */}
    <div className='mt-1 md:hidden flex items-center justify-center'>
      
      <div className='px-3 py-4 bg-white'>
        <div className='flex flex-col'>
          <div className='flex flex-col shrink-0  gap-2'>
            <div className='flex flex-col shrink-0  gap-2'>
            <div className='items-center justify-center mx-5'>
              <img className='py-3 w-96 border px-12' src={singleProductData.url} alt={singleProductData.itemname} />
            </div>
            <div className='flex gap-[2px]' >
              <img className='w-16 h-16 border-[2px] border-gray-200 py-1 px-2 hover:border-[#2874F0] cursor-pointer' src={singleProductData.url} alt="mobilePhoto" />
              <img className='w-16 h-16 border-[2px] border-gray-200 py-1 px-2 hover:border-[#2874F0] cursor-pointer' src={singleProductData.url} alt="mobilePhoto" />
              <img className='w-16 h-16 border-[2px] border-gray-200 py-1 px-2 hover:border-[#2874F0] cursor-pointer' src={singleProductData.url} alt="mobilePhoto" />
              <img className='w-16 h-16 border-[2px] border-gray-200 py-1 px-2 hover:border-[#2874F0] cursor-pointer' src={singleProductData.url} alt="mobilePhoto" />
              <img className='w-16 h-16 border-[2px] border-gray-200 py-1 px-2 hover:border-[#2874F0] cursor-pointer' src={singleProductData.url} alt="mobilePhoto" />
              <img className='w-16 h-16 border-[2px] border-gray-200 py-1 px-2 hover:border-[#2874F0] cursor-pointer' src={singleProductData.url} alt="mobilePhoto" />
            </div>
            
            </div>
            {/*  */}
            <div className='flex  items-center justify-center'>
              <Link to={'/cart/'+id} className='border font-semibold text-lg text-white bg-[#FF9F00] px-2 py-1 flex items-center justify-center gap-2'>
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path  d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                <span>GO TO CART</span>
              </Link>
              <Link to={currentUser? '/buysingleproduct/'+id : '/user/login'}  className='border font-semibold text-lg text-white bg-[#FB641B] px-2 py-1 flex items-center justify-center gap-2'>
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path  d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                <span>BUY NOW</span>
              </Link>
            </div>
          </div>

          <div className=' py-1 px-2 h-[100vh] overflow-y-scroll no-scrollbar'>
            <div className='flex flex-col gap-2'>
              {/*  */}
              <div className='text-gray-500 font-medium text-xs flex gap-x-3'>
                <Link to={'/'}>Home {`  >`}</Link> <Link to={'/products'}>products{`  >`}</Link> <Link to={'/catedoryproducts/' + singleProductData.category}>{singleProductData.category}{` >`}</Link>
              </div>
              {/*  */}

              <div className='text-md font-medium'>
                {singleProductData.itemname}
              </div>

              {/*  */}
              <div className='flex gap-2 items-center justify-normal'>
                <div className='bg-[#388E3C] text-white text-[12px] p-1 w-[40px] text-center rounded-md flex items-center justify-center gap-1'>
                  <span> {singleProductData.ratings}  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className='text-gray-600 font-medium text-sm'>
                  8,833 Ratings & 1,091 Reviews
                </div>
              </div>
              {/*  */}
              <div>
                <div className='text-green-700 font-medium text-sm'>
                  Extra ₹{singleProductData.falseprice - singleProductData.shownprice} off
                </div>
                <div>
                  <div className='flex items-baseline gap-3 p-0'>
                    <span className='font-medium text-3xl'>₹{Intl.NumberFormat('en-in').format(singleProductData.shownprice)}</span> <span className='text-gray-500 font-medium text-sm '>₹{Intl.NumberFormat('en-in').format(singleProductData.falseprice)}</span>
                  </div>
                  <div className='text-gray-700  text-sm'>
                    + ₹69 Secured Packaging Fee
                  </div>
                </div>
              </div>
              {/*  */}
              <div>
                <div className=' font-medium'>
                  Available offers
                </div>
                <div>
                  <div className='px-3 py-1 flex items-center gap-1'>
                    <img className='w-5' src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />
                    <span className='font-medium text-sm'>Bank Offer</span> <span className='text-sm'>10% off on Kotak Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above T&C</span>
                  </div>
                  <div className='px-3 py-1 flex items-center gap-1'>
                    <img className='w-5' src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />
                    <span className='font-medium text-sm'>Bank Offer</span> <span className='text-sm'>10% off on SBI Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above T&C</span>
                  </div>
                  <div className='px-3 py-1 flex items-center gap-1'>
                    <img className='w-5' src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />
                    <span className='font-medium text-sm'>Bank Offer</span> <span className='text-sm'>10% off on HDB Credit Card, up to ₹1250 on orders of ₹5,000 and above T&C</span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className='pt-3'>
                1 Year Domestic Warranty
              </div>
              {/*  */}

              <div className='flex flex-col mt-20 gap-5'>
                {/*  */}
                <div className=' flex items-center justify-start gap-20'>
                  <div className='font-medium text-gray-500 text-sm w-20'>
                    Highlights
                  </div>
                  <div>
                    <ul className=' list-disc'>
                      {singleProductData.specs?.split(',').map((item, i) => (
                        <li key={i} className='text-gray-500 text-left'><div className='text-black'>{item}</div></li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/*  */}
                <div className=' flex items-center justify-start gap-20'>
                  <div className='font-medium text-gray-500 text-sm w-20'>
                    seller
                  </div>
                  <div>
                    <ul className=' list-disc'>
                      {singleProductData.retailer?.split(',').map((item, i) => (
                        <li key={i} className='text-gray-500 text-left'><div className='text-black'>{item}</div></li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/*  */}
                {singleProductData.description && (
                    <div className='flex items-center justify-start gap-20'>
                    <div className='font-medium text-gray-500 text-sm w-20'>
                      Description
                    </div>
                    <div className='text-xs'>
                      {singleProductData.description}
                    </div>
                  </div>
                )}
                
                {/*  */}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
