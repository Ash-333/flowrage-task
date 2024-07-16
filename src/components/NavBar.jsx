import React from 'react'

const NavBar = () => {
  return (
    <div className='w-screen flex items-center p-2 bg-slate-500 font-semibold text-white'>
        <h1 className='w-1/2'>Portfolio</h1>
        <ul className='flex items-center justify-between w-1/2'>
            <li className='hover:cursor-pointer'>Home</li>
            <li className='hover:cursor-pointer'>About me</li>
            <li className='hover:cursor-pointer'>Project</li>
            <li className='hover:cursor-pointer'>Contact me</li>
        </ul>
    </div>
  )
}

export default NavBar