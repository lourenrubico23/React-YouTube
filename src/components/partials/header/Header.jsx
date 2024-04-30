import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'
import { CiMenuBurger, CiSearch } from 'react-icons/ci'
import { FaSearch } from 'react-icons/fa'
import { ImMic } from 'react-icons/im'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaRegCircleUser } from 'react-icons/fa6'

const Header = () => {
  return (
      <header className='header py-3 px-10 bg-primary w-full'>
        <div className="header__wrapper flex items-center justify-between">
          <div className='flex items-center'>
            <CiMenuBurger className='text-[1.2rem]'/>
            <img src={`${baseImgUrl}/youtubelogo.svg`} alt="" className='w-[140px] h-[25px] object-fit'/>
          </div>
          <div className='flex items-center gap-4'>
            <div className='header__search flex items-center relative overflow-hidden z-[1] border rounded-[5rem]'>
              <input type="text" className='outline-none focus:border-searchbtn w-[40rem] border-stone-300 px-4 bg-transparent placeholder:opacity-50' placeholder='Search...' />
              <button className='bg-gray-200 p-3 '><CiSearch className='text-2xl'/></button>
            </div>
            <ImMic className='text-[3rem] bg-gray-200 rounded-full p-4 hover:bg-gray-300'/>
          </div>
            <div className='flex items-center'>
                <BsThreeDotsVertical className=''/>
                <div className='btn'>
                    <button className='border rounded-full text-searchbtn items-center flex gap-2 px-3 py-2 hover:bg-lightblue'><FaRegCircleUser className='text-xl'/>Sign In</button>
                </div>
            </div>
        </div>
      </header>
  )
}

export default Header