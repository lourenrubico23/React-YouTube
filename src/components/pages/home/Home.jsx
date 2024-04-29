import React from 'react'
import Header from '../../partials/header/Header'
import { MdHomeFilled, MdOutlineFeedback, MdOutlineSubscriptions } from 'react-icons/md'
import { SiYoutubegaming, SiYoutubekids, SiYoutubemusic, SiYoutubeshorts } from 'react-icons/si'
import { AiOutlinePlaySquare } from 'react-icons/ai'
import { VscHistory } from 'react-icons/vsc'
import { FaRegCircleUser } from 'react-icons/fa6'
import { FaFireAlt, FaYoutube } from 'react-icons/fa'
import { PiMusicNoteThin, PiTrophyThin } from 'react-icons/pi'
import { GiClapperboard, GiHanger } from 'react-icons/gi'
import { GrDocumentText, GrTrophy } from 'react-icons/gr'
import { IoAddCircleOutline, IoSettingsOutline } from 'react-icons/io5'
import { CiFlag1 } from 'react-icons/ci'
import { TfiHelpAlt } from 'react-icons/tfi'
import Playlist from './Playlist'

const Home = () => {
  const [menuTab, setMenuTab] = React.useState('all');
  const [isPlaylistShow, setPlaylistShow] = React.useState(false);

  const handleChangeMenu = (menu) => {
    setMenuTab(menu)
}
  return (
    <div>
      <Header/>
      <div className=''>
          <div className='grid grid-cols-[14%_1fr] my-3 gap-5'>
            <aside className='custom-scroll h-[860px] overflow-auto'> 
              <ul className='text-[1rem] border-b-[1px] border-gray-200 w-[220px] px-8'>
                  <li className='p-2 border border-transparent rounded-md hover:bg-gray-200'><button className='flex items-center gap-5  items-start '><MdHomeFilled className='text-2xl'/>Home</button></li>
                  <li className='p-2 border border-transparent rounded-md hover:bg-gray-200'><button className='flex items-center gap-5  items-start '><SiYoutubeshorts className='text-2xl'/>Shorts</button></li>
                  <li className='p-2 border border-transparent rounded-md hover:bg-gray-200 mb-2'><button className='flex items-center gap-5 items-start '><MdOutlineSubscriptions className='text-2xl'/>Subscriptions</button></li>
              </ul> 

              <ul className='text-[1rem] border-b-[1px] border-gray-200 w-[220px] mt-2 px-8'>
                  <li className='p-2 border border-transparent rounded-md hover:bg-gray-200'><button className='flex items-center gap-5  items-start '><AiOutlinePlaySquare className='text-2xl'/>You</button></li>
                  <li className='p-2 border border-transparent rounded-md hover:bg-gray-200 mb-2'><button className='flex items-center gap-5  items-start '><VscHistory className='text-2xl'/>History</button></li>
              </ul>

              <ul className='text-[1rem] border-b-[1px] border-gray-200 w-[220px] mt-2 px-8'>
                  <li><p className='text-[.8rem]'>Sign in to like videos, comment, and subscribe.</p></li>
                  <li className='p-2 mb-2'><button className=' border rounded-full text-searchbtn items-center flex gap-2 px-3 py-2 hover:bg-lightblue'><FaRegCircleUser className='text-xl'/>Sign In</button></li>
              </ul>

              <ul className='text-[1rem] border-b-[1px] border-gray-200 w-[220px] mt-2 px-8'>
                  <li><h4 className='text-[1.2rem] font-semibold'>Explore</h4></li>
                  <li className='p-2 border border-transparent rounded-md hover:bg-gray-200'><button className='flex items-center gap-5  items-start '><FaFireAlt className='text-2xl'/>Trending</button></li>
                  <li className='p-2 border border-transparent rounded-md hover:bg-gray-200'><button className='flex items-center gap-5  items-start '><PiMusicNoteThin className='text-2xl'/>Music</button></li>
                  <li className='p-2 border border-transparent rounded-md hover:bg-gray-200'><button className='flex items-center gap-5  items-start '><GiClapperboard className='text-2xl'/>Movies</button></li>
                  <li className='p-2 border border-transparent rounded-md hover:bg-gray-200'><button className='flex items-center gap-5  items-start '><SiYoutubegaming className='text-2xl'/>Gaming</button></li>
                  <li className='p-2 border border-transparent rounded-md hover:bg-gray-200'><button className='flex items-center gap-5  items-start '><GrDocumentText className='text-2xl'/>News</button></li>
                  <li className='p-2 border border-transparent rounded-md hover:bg-gray-200'><button className='flex items-center gap-5  items-start '><PiTrophyThin className='text-2xl'/>Sports</button></li>
                  <li className='p-2 border border-transparent rounded-md hover:bg-gray-200 mb-2'><button className='flex items-center gap-5  items-start '><GiHanger className='text-2xl'/>History</button></li>
              </ul>

              <ul className='text-[1rem] border-b-[1px] border-gray-200 w-[220px] mt-2 px-8'>
                  <li className='p-2 w-[11rem] border border-transparent rounded-md hover:bg-gray-200 mb-2'><button className='flex items-center gap-1 items-start '><IoAddCircleOutline className='text-2xl'/>Browse Channels</button></li>
              </ul>

              <ul className='text-[1rem] border-b-[1px] border-gray-200 w-[220px] mt-2 px-8'>
                  <li><h4 className='text-[1.2rem] w-[11rem] font-semibold'>More from YouTube</h4></li>
                  <li className='p-2 w-[11rem] border border-transparent rounded-md hover:bg-gray-200'><button className='flex items-center gap-2  items-start '><FaYoutube className='text-2xl text-red-600'/>Youtube Premium</button></li>
                  <li className='p-2 w-[11rem] border border-transparent rounded-md hover:bg-gray-200'><button className='flex items-center gap-2  items-start '><SiYoutubemusic className='text-2xl text-red-600'/>YouTube Music</button></li>
                  <li className='p-2 w-[11rem] border border-transparent rounded-md hover:bg-gray-200 mb-2'><button className='flex items-center gap-2  items-start '><SiYoutubekids className='text-2xl text-red-600'/>YouTube Kids</button></li>
              </ul> 
                  
              <ul className='text-[1rem] border-b-[1px] border-gray-200 w-[220px] mt-2 px-8'>
                  <li className='p-2 border border-transparent rounded-md hover:bg-gray-200'><button className='flex items-center gap-5  items-start '><IoSettingsOutline className='text-2xl'/>Settings</button></li>
                  <li className='p-2 border border-transparent rounded-md hover:bg-gray-200'><button className='flex items-center gap-3  items-start '><CiFlag1 className='text-2xl'/>Report History</button></li>
                  <li className='p-2 border border-transparent rounded-md hover:bg-gray-200'><button className='flex items-center gap-5  items-start '><TfiHelpAlt className='text-2xl'/>Help</button></li>
                  <li className='p-2 w-[11rem] border border-transparent rounded-md hover:bg-gray-200 mb-2'><button className='flex items-center gap-3  items-start '><MdOutlineFeedback className='text-2xl'/>Send feedback</button></li>
              </ul>

              <ul className='text-[.7rem] text-gray-600 gap-3 w-[220px] px-8'>
                <li>
                  <button>
                    <p>About</p>
                  </button>
                  <button>
                    <p>Press</p>
                  </button>
                  <button>
                    <p>Copyright</p>
                  </button>
                  <button>
                    <p>Contact us</p>
                  </button>
                  <button>
                    <p>Creators</p>
                  </button>
                  <button>
                    <p>Advertise</p>
                  </button>
                  <button className='mb-5'>
                    <p>Developers</p>
                  </button>
                </li>
                
                <li>
                  <button>
                    <p>Terms Privacy</p>
                  </button>
                </li>
                <li>
                  <button>
                    <p>Policy & Safety</p>
                  </button>
                </li>
                <li>
                  <button>
                    <p>How YouTube works</p>
                  </button>
                </li>
                <li>
                  <button>
                    <p>Test new features</p>
                  </button>
                </li>
                <li>
                  <p>&copy; 2024 Google LLC</p>
                </li>
              </ul>
              
            </aside>


            <div className='nav__tabs'>
              <ul className='text-md font-semibold flex gap-4 my-3'>
                <li><button className={`py-1 px-3 bg-gray-200 rounded-md ${menuTab==="all" ? "bg-black text-white" : "" }`} onClick={() => handleChangeMenu("all")}>All</button></li>
                <li><button className={`py-1 px-3 bg-gray-200 rounded-md ${menuTab==="gaming" ? "bg-black text-white" : "" }`} onClick={() => handleChangeMenu("gaming")}>Gaming</button></li>
                <li><button className={`py-1 px-3 bg-gray-200 rounded-md ${menuTab==="music" ? "bg-black text-white" : "" }`} onClick={() => handleChangeMenu("music")}>Music</button></li>
                <li><button className="py-1 px-3 bg-gray-200 rounded-md">Playlist</button></li>
                <li><button className="py-1 px-3 bg-gray-200 rounded-md">NBA</button></li>
                <li><button className="py-1 px-3 bg-gray-200 rounded-md">Live</button></li>
                <li><button className="py-1 px-3 bg-gray-200 rounded-md">Action</button></li>
                <li><button className="py-1 px-3 bg-gray-200 rounded-md">Vacations</button></li>
                <li><button className="py-1 px-3 bg-gray-200 rounded-md">Championships</button></li>
                <li><button className="py-1 px-3 bg-gray-200 rounded-md">Dramedy</button></li>
                <li><button className="py-1 px-3 bg-gray-200 rounded-md">Roblox</button></li>
                <li><button className="py-1 px-3 bg-gray-200 rounded-md">Baking</button></li>
                <li><button className="py-1 px-3 bg-gray-200 rounded-md">Animated Films</button></li>
              </ul>

              <div className='mt-10 pr-8'>
                {menuTab === "all" && <Playlist setPlaylistShow={setPlaylistShow}/>}
              </div>
              
            </div>


            
          
            
          

          </div>


          
      </div>
      
    </div>
  )
}

export default Home
