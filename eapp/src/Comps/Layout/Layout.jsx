import React, { useEffect, useState } from 'react'

import { Outlet, useParams } from 'react-router-dom'
import Navbar2 from './Navbar2'

export default function Layout() {


    return (
        <div className='bg-[#F1F2F4]'>
            <Navbar2 />
            <Outlet />
        </div>
    )
}
