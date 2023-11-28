import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { LoggedInUserContext } from '../../LoggedInUserContext'

export default function Cart() {
  const { id } = useParams()
  const [singleProductData, setSingleProductData] = useState([])
  const [loading, setloading] = useState(true)
  const [itemquantity, setitemquantity] = useState(1)
  const navigate = useNavigate('')
  const { currentUser, ready, setCartChanged, } = useContext(LoggedInUserContext)

  useEffect(() => {

    axios.get('/singleprodcuts/' + id).then(({ data }) => {
      setSingleProductData(data)
      setloading(false)
    })
    
  }, [id]);


  function handleitemvalueMinus() {
    if (itemquantity > 1) {
      setitemquantity(itemquantity - 1)
    }
    return

  }
  function handleitemvaluePlus() {
    if (itemquantity < 10) {
      setitemquantity(itemquantity + 1)
    }
    return
  }

  function savetocart (e) {
    e.preventDefault()

    
     axios.post('/cart/savetocart', {itemid: id,
        userid:currentUser.email,
        itemquantity:itemquantity,}).then(({data}) => {
          
          if (data == 'done') {
            alert('item saved')
            setCartChanged(true)
          }
          if (data == 'updated') {
            alert('updated')
            setCartChanged(true)
          }
        })
        
        
  }




  return (
    <div className='w-full flex flex-col items-center justify-center mt-5'>
      <div className='w-full m-auto flex flex-col items-center  bg-white border border-red-500'>
        <div className=' md:w-[80%] w-full bg-white pl-8 pr-16 py-6 flex justify-between md:flex-row flex-col md:items-start items-center md:gap-0 gap-2'>
          <div className='flex gap-3'>
            <div className='flex shrink-0 flex-col items-center justify-center gap-2'>
              <div>
                <img className='w-18 h-32' src={singleProductData.url} alt="" />
              </div>

            </div>
            <div className='text-sm font-medium flex flex-col gap-2'>
              <div>
                {singleProductData.itemname}
              </div>
              <div className='font-normal'>
                {singleProductData.specs?.split(',')[0]}
              </div>
              <div className='font-normal'>
                Seller: {singleProductData.retailer}
              </div>
            </div>
          </div>
          <div className='text-sm'>
            Delivery by mon Nov 1
          </div>

        </div>
        <div className='flex items-center justify-center gap-2'>
          <button onClick={handleitemvalueMinus} className=' px-2 rounded-full border border-gray-400 text-center'>-</button>
          <input className='w-[50px] text-center outline-none border border-gray-400' type="number" min={1} max={10} value={itemquantity} readOnly />
          <button onClick={handleitemvaluePlus} className=' px-2 rounded-full border text-center border-gray-400'>+</button>

          <button onClick={savetocart} className='p-1 border text-center bg-[#2874F0] text-white rounded'>
            Save for now
          </button>
          <Link to={'/buysingleproduct/'+singleProductData._id} className='p-1 border text-center bg-[#FB641B] text-white rounded'>
            Buy now
          </Link>

        </div>
      </div>


    </div>
  )

}
