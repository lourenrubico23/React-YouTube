import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'
import { CiMenuBurger, CiSearch } from 'react-icons/ci'
import { FaSearch } from 'react-icons/fa'
import { ImMic } from 'react-icons/im'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaRegCircleUser } from 'react-icons/fa6'

const Header = () => {
  return (
    <div>
      <header className='header py-3 px-10 bg-primary '>
        <div className="header__wrapper max-w-[1440px] grid grid-cols-[.1fr,1fr,1fr,1fr,1fr] items-center">
                <CiMenuBurger className='text-[1.2rem]'/>
                <img src={`${baseImgUrl}/youtubelogo.svg`} alt="" className='w-[140px] h-[25px] object-fit'/>
          
            
            <div className='header__search relative overflow-hidden z-[1] mx-auto mr-2'>
                <input type="text" className='outline-none focus:border-searchbtn w-[40rem] border rounded-[5rem] border-stone-300 px-4 py-2 bg-transparent placeholder:opacity-50' placeholder='Search...' />
                <button className='absolute top-3 right-0 bg-gray-200 p-5 -translate-y-[1.4rem] z-[-1]'><CiSearch className='text-2xl'/></button>
            </div>

            <div>
                <ImMic className='text-[2.5rem] bg-gray-200 rounded-full p-2 hover:bg-gray-300 ml-[20rem]'/>
            </div>
            

            <div className='items-end flex items-center'>
                <BsThreeDotsVertical className='ml-[10rem]'/>
                <div className='btn'>
                    <button className=' border rounded-full text-searchbtn items-center flex gap-2 px-3 py-2 hover:bg-lightblue'><FaRegCircleUser className='text-xl'/>Sign In</button>
                </div>
                
            </div>
            
        </div>

      </header>
    </div>
  )
}

export default Header
