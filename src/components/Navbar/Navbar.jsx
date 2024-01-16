import React from 'react'
import { FaSearch,FaShoppingCart } from "react-icons/fa";
import DarkMode from './DarkMode';
import { RiArrowDropDownLine } from "react-icons/ri";


const Menu = [
    {
        id:1,
        name:"Home",
        link:"/#"
    },
    {
        id:2,
        name:"Top Rated",
        link:"/#services"
    },
    {
        id:3,
        name:"Kids Wear",
        link:"/#"
    },
    {
        id:4,
        name:"Mens Wear",
        link:"/#"
    },
    {
        id:5,
        name:"Electronics",
        link:"/#"
    }
]

const DropdownMenu =[
    {
        id:1,
        name:"Trending Products",
        link:"/#"
    },
    {
        id:2,
        name:"Best Selling",
        link:"/#"
    },
    {
        id:3,
        name:"Top Rated",
        link:"/#"
    },
]

function Navbar({handleOrderPopup}) {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        <div className='bg-primary/40 py-2'>
            <div className='container flex justify-between items-center'>
                <div>
                    <a href="#" className='font-bold text-2xl sm:text-3xl'>Shopping</a>
                </div>

                <div className='flex justify-between items-center gap-4'>
                    <div className='group relative hidden sm:block'>
                        <input type="text" placeholder='Search' 
                        className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 
                        rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1
                        focus:border-primary dark:border-gray-500 dark:bg-gray-800'/>
                        <FaSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                    </div>
                    <button className='bg-gradient-to-r from-primary to-secondary transition-all duration-300 text-white
                    py-1 px-4 rounded-full flex gap-3 items-center group' onClick={()=>handleOrderPopup()}>

                        <span className='group-hover:block hidden transition-all duration-200'>Order</span>

                        <FaShoppingCart className='text-xl text-white drop-shadow-sm cursor-pointer'/>

                    </button>

                    <div>
                        <DarkMode/>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex justify-center'>
            <ul className='sm:flex hidden items-center gap-4'>
                {Menu.map((data)=> (
                    <li key={data.id}>
                        <a href={data.link} 
                            className='inline-block px-4 hover:text-primary duration-200'>
                            {data.name}
                        </a>
                    </li>
                ))}

                <li className='group relative curspr-pointer'>
                    <a href="#" className='flex items-center gap-[2px] py-2'>
                        Trending Products
                        <span>
                            <RiArrowDropDownLine className='transition-all duration-200 group-hover:rotate-180'/>
                        </span>
                    </a>
                    <div className='absolute hidden group-hover:block z-[9999] w-[200px] rounded-md bg-white p-2 text-black shadow-md'>
                        <ul>
                            {DropdownMenu.map((data)=>(
                                <li key={data.id}>
                                    <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar