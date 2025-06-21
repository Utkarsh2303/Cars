import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

 
export default function Navbar() {

    const [open ,close] = useState(false)

    const togglemenu = ()=>{

        close(!open)


    }

    const Navmanu = [
        
        {href :"/Evolution", name:"Evolution"},
        {href :"/service-types", name:"Types"},
        {href :"/", name:"Home"},


    ]


  return (
    <nav className='flex justify-between text-white bg-black items-center h-20 px-10 fixed top-0 left-0  w-screen  z-50'>

        <div>
            <img className='h-20 w-70 ' src="https://res.cloudinary.com/dkd5a7u9g/image/upload/v1748509076/Screenshot_2025-05-29_142331_lpbli8.png" alt="" />
        </div>

        <ul  className=' hidden md:flex gap-50'>
            {
                Navmanu.map((item,key)=>(
                <li key={key}><Link to={item.href}>{item.name}</Link></li>

                ))
            }
           
        </ul>

       

        <div className='block md:hidden'  onClick={togglemenu}>
            { open ? <RxCross2/> :<FaBars/>}
        </div>

        { open && (

        <ul className=' md:hidden absolute bg-gray-700  top-10 w-full left-0 flex  flex-col  items-center gap-4'>
           {
            Navmanu.map((item,key)=>(
                
                <li  key={key}><a href={item.href}>{item.name}</a></li>

            ))
           }
        </ul>
            
        )


        }



    </nav>
    
  )
}
