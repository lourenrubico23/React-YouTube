import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { baseImgUrl } from '../../helpers/functions-general'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { videos } from './data'

const Playlist = () => {
  return (
    <div className='all grid grid-cols-4 gap-4'>

       {videos.map((item, key) => (
        <button>
            <div className="cards">
                <div className="image " key={key}>
                    <img src={`${baseImgUrl}/playlist/${item.img1}`} alt="" className='rounded-xl object-cover relative'/>
                    <small className='bg-stone-700 p-1 rounded-md absolute -translate-y-9 translate-x-20 ml-[2.5rem] text-white bg-opacity-70'>{item.duration}</small>
                </div>
                <div className="title grid grid-cols-[.3fr,2fr,.1fr] items-center mt-3">
                    <img src={`${baseImgUrl}/playlist/${item.img2}`} alt="" className='rounded-full object-cover w-[2.5rem] '/>
                    <h3 className='text-[1rem] font-semibold line-clamp-2'>{item.title}</h3>
                    <BsThreeDotsVertical className='text-xl'/>
                </div>
                <div className="content flex items-start ml-14">
                    <p>{item.channel}</p>
                </div>
                <div className='views flex items-center ml-14'>
                    <small className='flex'>{item.views} views</small>
                    <GoDotFill className='text-[.5rem] m-1 '/>
                    <small>{item.hours} ago</small> 
                </div>
            </div>
        </button>
         ))}
    </div>
  )
}

export default Playlist
