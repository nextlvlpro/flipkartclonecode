import React from 'react'
import Category from './Category'
import MainItems from './ItemsBar/MainItems'
import ItemBar from './ItemsBar/ItemBar'



export default function () {
  return (
    <div className='mx-4 border my-2 flex flex-col gap-4'>
      <Category />
      <MainItems/>
      <ItemBar />
    </div>
  )
}
