import { useContext, useEffect, useState } from "react"
import { LoggedInUserContext } from "../../../LoggedInUserContext"
import axios from "axios"

export default function Orders () {
    const [orders, setOrders] = useState(null)
    const [currentUserOrders, setcurrentUserOrders] = useState(null)
    const [finaldata, setFinaldata] = useState(null)
    const [itemschanged, setitemschanged] = useState(false)
   
    let itemlist = []

    const {currentUser} = useContext(LoggedInUserContext)
    useEffect(()=> {
        setitemschanged(false)
        if(currentUser) {
            axios.post('/order/allorder', {email: currentUser.email}).then(({data}) => {
                setOrders(data)
                data.forEach(element => {
                    if (!itemlist.includes(element.itemid)) {
                        itemlist.push(element.itemid)
                    }

                });

                if(itemlist.length >0 ) {
                    setcurrentUserOrders(itemlist)
                } else {
                    setcurrentUserOrders(null)
                }
                
            })
            
        }

    },[currentUser,itemschanged])

    useEffect(() => {
       
        if (currentUserOrders) {
            axios.post('/order/productsbyid', currentUserOrders).then(({ data }) => {

                setFinaldata(data)
                
            })
         console.log(finaldata);
        }

    }, [currentUserOrders])

    function removefromOrder (e) {
        
        const itemid = JSON.stringify(e.target.innerHTML).split('>')[1].split('<')[0];
       
        axios.post('/order/removefromorder', {itemid:itemid,user:currentUser.email}).then(({data}) => {

            if(data == 'done') {
                alert('Order Canceled')
                setitemschanged(true)
            }
            
            
        })

    }

    return (
        <div className='border border0red-500 text-black md:px-5 py-6 px-2 flex flex-col gap-3'>
            {!currentUserOrders  && (
                <div>
                    Nothing Here
                </div>
            )}
            {!!currentUserOrders && currentUserOrders.length > 0 && currentUserOrders?.map((items, i) => (
                <div key={i} className='flex flex-col border gap-1'>
                    <div className='flex bg-white '>
                        {finaldata?.map((dataitems, i) => (
                            <div key={i}>

                                {dataitems._id == items && (
                                    <div className='flex items-start gap-2 p-2 md:-w-[300px]'>
                                        <div>
                                            <div>
                                                <img src={dataitems.url} alt="" className='w-20 h-32' />
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                {dataitems.itemname}
                                            </div>
                                            <div>
                                            ₹ {dataitems.shownprice}
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </div>
                        ))}
                        <div className='md:ml-10 bg-gray-300 h-8 flex px-1 items-center justify-center mt-2 rounded'>
                            Quantity
                            {orders?.map((olditems, i) => (
                                <div key={i} className='ml-1'>
                                    {olditems.itemid == items && (
                                        olditems.itemquantity
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                    
                    <button onClick={removefromOrder} className='p-1 border text-center bg-red-500 text-white rounded'>
                        Cancel  Order<span className='hidden'>{items}</span>
                    </button>
                    </div>
                    
                </div>
                
            ))}
            
        </div>
    )
}