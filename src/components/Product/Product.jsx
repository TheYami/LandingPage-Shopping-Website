import React from 'react'
import { FaStar } from "react-icons/fa";



const ProductData = [
    {
        id:1,
        img:"https://i.ebayimg.com/images/g/s~8AAOSwd2RjLu7R/s-l500.png",
        title:"Women Ethnic",
        rating:"5.0",
        color:"White",
        aosDelay:"0"
    },
    {
        id:2,
        img:"https://www.westernshirts.com/media/catalog/product/cache/1/small_image/214x283/2fc3e608e6d3f2f4fa9df27d01d58311/0/3/03-050-0265-0670_re.jpg",
        title:"Women western",
        rating:4.5,
        color:"Red",
        aosDelay:"200"
    },
    {
        id:3,
        img:"https://www.statusanxiety.com/cdn/shop/files/status-anxiety-sunglasses-villain-brown-9-lifestyle-img.jpg?v=1697508586&width=480",
        title:"Goggles",
        rating:4.7,
        color:"Brown",
        aosDelay:"400"
    },
    {
        id:4,
        img:"https://down-th.img.susercontent.com/file/8dd5dd7f674098e2073b6e74b6cee873",
        title:"Printed T-Shirt",
        rating:4.4,
        color:"Yellow",
        aosDelay:"600"
    },
    {
        id:5,
        img:"https://st.mngbcn.com/rcs/pics/static/T5/fotos/outfit/S20/57022882_85-99999999_01.jpg?ts=1693566188201&imwidth=502&imdensity=2",
        title:"Fashion T-Shirt",
        rating:4.5,
        color:"Pink",
        aosDelay:"800"
    },
]

function Product() {
  return (
    <div className=' dark:bg-gray-950 dark:text-white duration-200 pb-12 pt-14' >
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, a.</p>
            </div>
            
            <div >
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {ProductData.map((data)=>(
                        <div 
                            data-aos="fade-up"
                            dara-aos-delay={data.aosDelay}
                            key={data.id} className='space-y-3'>
                                <img src={data.img} alt="" 
                                    className='w-[150px] h-[220px] object-cover rounded-md'
                                />
                                <div>
                                    <h3 className='font-semibold'>{data.title}</h3>
                                    <p className='text-sm text-gray-600'>{data.color}</p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-yellow-400'/>
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center' data-aos="fade-up">
                    <button className='text-center bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4  rounded-full mt-10'>View All</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product