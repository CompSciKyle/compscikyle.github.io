import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to='/' className='w-10 h-10 rounded-lg text-white justify-center flex font-medium text-lg shadow-md'>
        <p className='text-white'>Home</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to='/about' className={({isActive}) => isActive ? 'text-blue-500' : 'text-white'}>
            <p className='text-white'>About</p>
            </NavLink>
            <NavLink to='/projects' className={({isActive}) => isActive ? 'text-blue-500' : 'text-white'}>
            <p className='text-white'>Projects</p>
            </NavLink>
            <NavLink to='/contact' className={({isActive}) => isActive ? 'text-blue-500' : 'text-white'}>
            <p className='text-white'>Contact</p>
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar