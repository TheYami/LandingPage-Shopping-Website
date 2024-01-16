import React, { useEffect, useState } from 'react'
import { MdLightMode,MdNightlight  } from "react-icons/md";


function DarkMode() {

    const [theme,setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")

    const element = document.documentElement

    useEffect(() =>{
        if(theme === "dark"){
            element.classList.add("dark")
            localStorage.setItem("theme","dark")
        }else{
            element.classList.remove("dark")
            localStorage.setItem("theme","light")
        }
    },[theme])
  return (
    <div className='bg-gradient-to-r from-primary to-secondary transition-all duration-300 text-white
    py-1 px-4 rounded-full flex gap-3 items-center group'>
        <MdLightMode 
        onClick={()=>{setTheme(theme === "light"? 'dark' : 'light')}}
        className='text-xl text-white drop-shadow-sm cursor-pointer dark:hidden transition-all duration-200'/>
        <MdNightlight 
        onClick={()=>{setTheme(theme === "dark"?"light":"dark")}}
        className='text-xl text-white drop-shadow-sm cursor-pointer hidden dark:block transition-all duration-200'/>
    </div>
  )
}

export default DarkMode