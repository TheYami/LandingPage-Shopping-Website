import React from 'react'
import { GrSecure } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayment, MdShoppingBag } from "react-icons/md";





function Banner() {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0 dark:bg-gray-950 duration-200'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                <div data-aos="zoom-in">
                    <img src="https://st4.depositphotos.com/12982378/30288/i/600/depositphotos_302880426-stock-photo-smiling-woman-sunglasses-holding-shopping.jpg" alt="" 
                        className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-lg'
                    />
                </div>

                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                    <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold dark:text-white'>
                        Winter sale upto 50% off
                    </h1>
                    <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5 dark:text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo voluptate laudantium amet soluta pariatur cum repellendus quasi omnis aliquam.
                    </p>
                    <div className='flex flex-col gap-4'>
                        <div data-aos="fade-up" className='flex items-center gap-4'>
                            <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 darl:bg-violet-400'/>
                            <p className='dark:text-white'>Quality Products</p>
                        </div>
                        <div data-aos="fade-up" className='flex items-center gap-4'>
                            <TbTruckDelivery className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 darl:bg-violet-400'/>
                            <p className='dark:text-white'>Fast Delivery</p>
                        </div>
                        <div data-aos="fade-up" className='flex items-center gap-4'>
                            <MdPayment className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 darl:bg-violet-400'/>
                            <p className='dark:text-white'>Easy Payment method</p>
                        </div>
                        <div data-aos="fade-up" className='flex items-center gap-4'>
                            < MdShoppingBag className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 darl:bg-violet-400'/>
                            <p className='dark:text-white'>Get Offers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner