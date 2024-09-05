import React, { useState } from 'react'
import Navbar from './Navbar'
import s from '../images/maharaj.jpg'
import s2 from '../images/maharaja.jpg'
function Feed() {

  const [getusers, setGetUsers ] = useState('');
  const [getPostDatas, setGetPostDatas] = useState('');

  const [loading, setLoading] = useState(false);
  return (
    <>
    <Navbar/>
    <div className='relative'>
    <img src={s} alt="" className='w-screen h-auto md:block hidden' />
    <img src={s2} alt="" className='w-screen h-screen md:hidden' />

      <div className='absolute inset-0'>
      <div className='items-center justify-center md:flex md:justify-evenly md:gap-5 ' >
      <div className=' h-60 text-xs md:text-base rounded-sm w-72 mt-14 backdrop-blur-lg  md:h-96 md:w-2/5 ml-10'><p className='mt-5'>Topic</p><div className='bg-slate-800 h-0.5 mt-5 w-72 md:w-full'></div>
          <p className='mt-7 md:ml-4 md:mr-4 ml-1 mr-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis qui dolorem dolores, voluptas sit reiciendis. Optio quis at, quam in dignissimos esse laboriosam suscipit! Amet asperiores cumque facilis magni maiores.</p>
      </div>
      <div className='backdrop-blur-lg h-44 rounded-sm w-72 md:mt-14   md:h-96 md:w-2/5 ml-10'><p className='mt-5'>Image</p><div className='bg-slate-800 h-0.5 mt-5 w-72 md:w-full'></div></div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Feed
