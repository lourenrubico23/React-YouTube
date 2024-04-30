import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'
import { GoDotFill } from 'react-icons/go'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { gamingvid } from './data'

const Gaming = () => {
  return (
    <div className='all grid grid-cols-4 gap-4'>
       {gamingvid.map((item, key) => (
        <a> 
            <div className="cards cursor-pointer">
                <div className="video-thumbnail relative" >
                    <div className="thumbnail" key={key}>
                        <img src={`${baseImgUrl}/gaming/${item.img1}`} alt="" className='rounded-xl object-cover'/>
                        <video className='video' autoPlay loop muted>
                            <source src={`${baseImgUrl}/gaming/${item.video}`} type='video/mp4'/>
                        </video>
                    </div>
                    <small className='bg-stone-700 p-1 rounded-md absolute bottom-2 right-2 text-white bg-opacity-70'>{item.duration}</small>
                </div>

                <div className="title grid grid-cols-[.3fr,2fr,.1fr] items-start mt-3">
                    <img src={`${baseImgUrl}/gaming/${item.img2}`} alt="" className='rounded-full object-cover w-[2.5rem] '/>
                    <div>
                        <h3 className='text-[1rem] font-semibold line-clamp-2 text-left leading-6'>{item.title}</h3>
                        <div className="content flex items-start">
                            <p>{item.channel}</p>
                        </div>
                        <div className='views flex items-center'>
                            <small className='flex'>{item.views} views</small>
                            <GoDotFill className='text-[.5rem] m-1 '/>
                            <small>{item.hours} ago</small> 
                        </div>
                    </div>
                    <BsThreeDotsVertical className='text-xl'/>
                </div>
                
                
            </div>
        </a>
         ))}
    </div>
  )
}

export default Gaming
