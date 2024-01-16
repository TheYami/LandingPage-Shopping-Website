import React from 'react'
import { FaInstagram,FaFacebookSquare,FaLinkedin,FaMobileAlt } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';



const FooterLink = [
    {
        title:"Home",
        link:"/#"
    },
    {
        title:"About",
        link:"/#about"
    },
    {
        title:"Contact",
        link:"/#contact"
    },
    {
        title:"Blog",
        link:"/#blog"
    },
]

function Footer() {
  return (
    <div className='text-white bg-blue-900 '>
        <div className='container' data-aos="zoom-in">
            <div className='grid md:grid-cols-3 pb-33 pt-5'>
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                        Shopping
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic dolorem cum harum facilis aut? Ullam.
                    </p>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLink.map((data,index)=>(
                                        <li key={index} className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                                            {data.title}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLink.map((data,index)=>(
                                        <li key={index} className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                                            {data.title}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className='flex mt-6 gap-3'>
                            <a href="#">
                                <FaInstagram className='text-3xl'/>
                            </a>
                            <a href="#">
                                <FaFacebookSquare className='text-3xl'/>
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl'/>
                            </a>
                        </div>

                        <div className='mt-6'>
                            <div className='flex items-center gap-3 '>
                                <MdEmail/>
                                <p>Shopping@gmail.com</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <FaMobileAlt/>
                                <p>098-765-4321</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer