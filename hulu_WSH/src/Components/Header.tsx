import React from 'react'
import logo from '../assets/Images/logo.png'

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
    <div>
        <img src={logo} className="w-[65px]"/>
        <ul>
            {menu.map((item)=>(
                <li className='text-gray-400 text-[18px]
                font-medium cursor-pointer'>{item.name}</li>
            ))}
        </ul>


    </div>
  )
}

export default Header