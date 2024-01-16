import React from 'react'
import { FaStar } from "react-icons/fa";


const ProductsData = [
    {
        id:1,
        img:"https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/%E0%B8%AB%E0%B8%A5%E0%B8%B8%E0%B8%A2%E0%B8%AA%E0%B9%8C-%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B8%95%E0%B8%AD%E0%B8%87-%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B4%E0%B9%89%E0%B8%95%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B8%84%E0%B8%AD%E0%B8%95%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%88%E0%B9%87%E0%B8%84%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%94-%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%9C%E0%B9%89%E0%B8%B2--HQS02WFSL205_PM2_Front%20view.png?wid=1090&hei=1090",
        title:"Casual Wear",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, necessitatibus."
    },
    {
        id:2,
        img:"https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/%E0%B8%AB%E0%B8%A5%E0%B8%B8%E0%B8%A2%E0%B8%AA%E0%B9%8C-%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B8%95%E0%B8%AD%E0%B8%87-%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B4%E0%B9%89%E0%B8%95%E0%B9%81%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B8%84%E0%B8%AD%E0%B8%95%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%9F%E0%B8%B4%E0%B8%81-%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%9C%E0%B9%89%E0%B8%B2--HPS36WAAV321_PM2_Front%20view.png?wid=1090&hei=1090",
        title:"Printed Shirt",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, necessitatibus."
    },
    {
        id:3,
        img:"https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/%E0%B8%AB%E0%B8%A5%E0%B8%B8%E0%B8%A2%E0%B8%AA%E0%B9%8C-%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B8%95%E0%B8%AD%E0%B8%87-%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD-camisole-%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B9%80%E0%B8%94%E0%B8%99%E0%B8%B4%E0%B8%A1%E0%B8%9F%E0%B8%AD%E0%B8%81-%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%9C%E0%B9%89%E0%B8%B2--FPTO39BEA610_PM2_Front%20view.png?wid=1090&hei=1090",
        title:"Women Shirt",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, necessitatibus."
    },
]

function TopProduct() {
  return (
    <div className='dark:bg-gray-950'>
        <div className='container'>
            <div className='text-left mb-24 pt-10'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold dark:text-white'>Best Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, a.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                {ProductsData.map((data)=>(
                    <div 
                            data-aos="zoom-in"
                            className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary
                                    hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                        <div className='h-[100px]'>
                            <img src={data.img} alt="" className='max-w-[180px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'/>
                        </div>

                        <div className='p-4 text-center'>
                            <div className='flex w-full items-center justify-center gap-1'>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                            </div>
                            <h1 className='text-xl font-bold'>{data.title}</h1>
                            <p className='text-gray-500 group-hover:text-white duration-300 text:sm line-clamp-2'>{data.description}</p>
                            <button className='bg-primary hover:scale-105  duration-300 text-white  py-1 px-4 rounded-full  mt-4 group-hover:bg-white
                                                group-hover:text-primary'>
                                Order Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TopProduct