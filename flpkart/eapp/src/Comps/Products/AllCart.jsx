import React, { useContext, useEffect, useState } from 'react'
import { LoggedInUserContext } from '../../LoggedInUserContext'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function () {
    const { currentUser,setCartChanged } = useContext(LoggedInUserContext)
    let [finaldata, setFinaldata] = useState(null)
    const [oldcurrentuseritems, setoldcurrentuseritems] = useState(null)
    const [currentUseritems, setcurrentUseritems] = useState(null)
    const [itemschanged, setitemschanged] = useState(false)
    const navigate = useNavigate('')


    let itemlist = []



    useEffect(() => {
        setitemschanged(false)

        if (currentUser) {


            axios.post('/cart/allcart', { userid: currentUser.email }).then(({ data }) => {
                setoldcurrentuseritems(data)
                data.forEach(element => {
                    if (!itemlist.includes(element.itemid)) {
                        itemlist.push(element.itemid)
                    }

                });
            

                if (itemlist.length > 0) {
                    setcurrentUseritems(itemlist)
                } else {
                    setcurrentUseritems(null)
                }
                
                

            })
        }

    }, [currentUser, itemschanged])


    useEffect(() => {

        if (currentUseritems) {
            axios.post('/cart/productsbyid', currentUseritems).then(({ data }) => {
                
                setFinaldata(data)

            })
        }

    }, [currentUseritems])

    function removefromcart(e) {

        const itemid = JSON.stringify(e.target.innerHTML).split('>')[1].split('<')[0];

        axios.post('/cart/removefromcart', { itemid: itemid, user: currentUser.email }).then(({ data }) => {

            if (data == 'done') {
                setitemschanged(true)
                setCartChanged(true)
            }


        })
        

    }

    return (
        <div className='border border0red-500 text-black md:px-5 py-6 px-2 flex flex-col gap-3'>
            {!currentUseritems && (
                <div>
                    Nothing Here
                </div>
            )}
            {!!currentUseritems && currentUseritems.length > 0 && currentUseritems?.map((items, i) => (
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
                            {oldcurrentuseritems?.map((olditems, i) => (
                                <div key={i} className='ml-1'>
                                    {olditems.itemid == items && (
                                        olditems.itemquantity
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center gap-2'>
                        <Link to={'/buysingleproduct/' + items} className='p-1 border text-center bg-[#FB641B] text-white rounded'>
                            Buy now
                        </Link>
                        <Link to={'/cart/' + items} className='p-1 border text-center bg-[#2874F0] text-white rounded'>
                            Edit
                        </Link>
                        <button onClick={removefromcart} className='p-1 border text-center bg-red-500 text-white rounded'>
                            Remove<span className='hidden'>{items}</span>
                        </button>
                    </div>

                </div>

            ))}

        </div>
    )
}
