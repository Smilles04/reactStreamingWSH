import React from 'react'
import logo from '../assets/Images/logo.png'
import {IoSearch} from "react-icons/io5";

function Header() {
    const menu=[
            {
                id:1,
                name:'Home'
            },
            {
                id:2,
                name:'Movies'
            },
            {
                id:3,
                name:'TV'
            },
            {
                id:4,
                name:'Sports'
            },
            {
                id:5,
                name:'News'
            },
            {
                id:6,
                name:'Hubs'
            },
    ]

  return (
    <div className='flex'>
        <img src={logo} className="w-[65px]"/>
        <ul className='flex gap-8'>
            {menu.map((item)=>(
                <li className='text-gray-400 text-[18px]
                font-medium cursor-pointer hover:bg-gray-700
                hover:text-white px-3 pb-2 py-1
                rounded-md transition-all duration-500 ease-in-out '>{item.name}</li>
            ))}
        </ul>
        <div>
            <IoSearch className='text-[35px] text-gray-300
            hover:bg-gray-700 px-[3px] pb-[2px] py-[2px]
            rounded-md hover:text-white transition-all duration-500 ease-in-out'/>
        </div>


    </div>
  )
}

export default Header