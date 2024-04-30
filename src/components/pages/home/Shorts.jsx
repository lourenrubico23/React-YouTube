import React from 'react'
import { shortsvid } from './data'
import { baseImgUrl } from '../../helpers/functions-general'
import { SiYoutubeshorts } from 'react-icons/si'

const Shorts = () => {
  return (
    <>
    
    <div className='my-8'>
        <h2 className='flex gap-3 items-center text-xl font-bold'><SiYoutubeshorts className='text-2xl text-red-600'/>Shorts</h2>
    </div>
    <div className='shorts grid grid-cols-6 gap-4'>
        
        {shortsvid.map((item, key) => (
        <a> 
            <div className="cards cursor-pointer">
                <div className="video-thumbnail relative" >
                    <div className="thumbnail" key={key}>
                        <img src={`${baseImgUrl}/shorts/${item.img1}`} alt="" className='rounded-xl object-cover'/>
                        <video className='video' autoPlay loop muted>
                            <source src={`${baseImgUrl}/shorts/${item.video}`} type='video/mp4'/>
                        </video>
                    </div>
                </div>

                <div className="title flex flex-col items-start mt-3">
                    <div>
                        <h3 className='text-[1rem] font-semibold line-clamp-2 text-left leading-6'>{item.title}</h3>
                        <div className='views flex items-center'>
                            <small className='flex'>{item.views} views</small>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </a>
         ))}
      
    </div>
    </>
  )
}

export default Shorts  