import React, { useContext, useEffect, useState } from 'react'
import { LoggedInUserContext } from '../../../LoggedInUserContext'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function BuySingleProduct() {
  const { currentUser,setCartChanged } = useContext(LoggedInUserContext)
  const [singleProductData, setSingleProductData] = useState(null)
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  let [itemquantity, setitemquantity] = useState(1)
  const navigate = useNavigate('')

  const[isInCart, setIsInCart] = useState(false)

  useEffect(() => {
    axios.get('/singleprodcuts/' + id).then(({ data }) => {
      setSingleProductData(data)
      setLoading(false)
    })
  }, [id]);

  useEffect(() => {
      if(singleProductData) {
        axios.post('/cart/perticuleritem', {id, user:currentUser.email}).then(({data}) => {
          
          if(data) {
            setitemquantity(data.itemquantity)
          }
          
        })
      }
  },[singleProductData])


  function orders (e) {
    e.preventDefault()
      axios.post('/order/neworder',{id, user:currentUser.email, itemquantity}).then(({data}) => {
        if(data == 'done') {
          alert('Order Placed')
          setCartChanged(true)
            navigate('/orders')
        }
      })
    
  }


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
    e.preventDefault
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
    <div className='flex items-center justify-center mt-5'>
      {!!singleProductData && (
        <div className='flex flex-col p-3'>
          <div className='flex md:flex-row flex-col gap-x-3'>
            <img src={singleProductData.url} className='h-96 w-96' alt={singleProductData.itemname} />
            <div className='flex flex-col gap-y-3'>
              <div>
                {singleProductData.itemname}
              </div>
              <div>
                {singleProductData.specs.split(',').map((items,i) => (
                  <div key={i}>
                    {items}
                  </div>
                ))}
              </div>
              <div className='flex items-center justify-center gap-2'>
          <button onClick={handleitemvalueMinus} className=' px-2 rounded-full border border-gray-400 text-center'>-</button>
          <input className='w-[50px] text-center outline-none border border-gray-400' type="number" min={1} max={10} value={itemquantity} readOnly />
          <button onClick={handleitemvaluePlus} className=' px-2 rounded-full border text-center border-gray-400'>+</button>

          <button onClick={savetocart} className='p-1 border text-center bg-[#2874F0] text-white rounded'>
            Save for now
          </button>
         

        </div>
                  <button onClick={orders} className='bg-[#FB641B] px-2 py-4 text-white font-semibold text-xl rounded-sm'>
                    Buy ₹{Intl.NumberFormat('en-in').format(singleProductData.shownprice)}
                  </button>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}
