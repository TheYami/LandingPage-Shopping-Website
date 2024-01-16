import React from 'react'
import { IoMdClose } from "react-icons/io";


function Popup({orderPopup,setOrderPopup}) {
  return (
    <div>
        {
            orderPopup && (
                <div className='popup'>
                    <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
                        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                        bg-white p-4 shadow-md dark:bg-gray-900 rounded-md duration-300 w-[300px]' >
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h1 className='dark:text-white'>Order Now</h1>
                                </div>
                                <div>
                                    <IoMdClose className='text-2xl cursor-pointer' onClick={()=>setOrderPopup(false)}/>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <input type="text" placeholder='Name' className='w-full rounded-full border border-gray-300 dark:border-gray-500
                                dark:bg-gray-800 px-2 py-1 mb-4'/>
                                
                                <input type="Email" placeholder='Email' className='w-full rounded-full border border-gray-300 dark:border-gray-500
                                dark:bg-gray-800 px-2 py-1 mb-4'/>
                                
                                <input type="text" placeholder='Address' className='w-full rounded-full border border-gray-300 dark:border-gray-500
                                dark:bg-gray-800 px-2 py-1 mb-4'/>

                                <div className='flex justify-center'>
                                    <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300'>
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Popup