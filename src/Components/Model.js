import React from 'react'
import {BsChevronDown} from 'react-icons/bs'
const Model = () => {
  return (
    <div>
        <div className='absolute inset-x-0 top-[15%] text-center '>
            <h1 className='text-4xl font-bold'>Model 3</h1>
            <p className='underline underline-offset-4 p-2 text-sm'><a href='https://www.tesla.com/drive'>Schedule a Test Drive</a></p>
        </div>
        <div className='flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]'>
           <a href='https://www.tesla.com/model3/design#overview'> <button className='bg-[#171a20] rounded-md w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-white'>Custom Order</button></a>
           <a href='https://www.tesla.com/inventory/new/m3'> <button  className='bg-[#f4f4f4] rounded-md w-96 lg:w-64 h-10 lg:mx-4 mt-2 '>Existing Inventory</button></a>
        </div>
        <div className='flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]'>
            <BsChevronDown size={25}/>
        </div>
    </div>
  )
}

export default Model