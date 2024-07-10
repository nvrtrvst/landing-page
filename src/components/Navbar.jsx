import React from 'react'
import { navLink } from "../data/dummy"
import logo from "../asset/logo.svg"
import { Link } from 'react-scroll'
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-6 lg:px-8 py-4 w-full fixed top-0'>
      <div className='w-32'>
        <img src={logo} alt="logo" className='w-full h-full object-contain' />
      </div>
      <ul className='hidden md:flex'>
        <li className='flex gap-4'>
          {navLink.map((item) => {
            return (
              <Link to={item.id} key={item.id} className='hover:text-orange text-sm md:text-md'>{item.name}</Link>
            )
          }
          )}
        </li>
      </ul>
      <div className='flex items-center'>
        <button className='px-6 lg:px-8 py-2 bg-white outline-none hover:bg-orange hover:text-white rounded-full'>Sign In</button>
        <MdOutlineMenu className='text-2xl block md:hidden' />
      </div>
      <div className='flex flex-col gap-4 pt-5 px-5 md:hidden first-letter:absolute top-0 right-0 w-full h-screen bg-white'>
        <IoClose />
        <ul className=''>
          <li className='flex gap-y-4 flex-col'>
            {navLink.map((item) => {
              return (
                <Link to={item.id} key={item.id} className='hover:text-orange text-sm md:text-md'>{item.name}</Link>
              )
            }
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
