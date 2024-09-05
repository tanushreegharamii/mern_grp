import React from 'react'
import Navbar from './Components/Navbar';
import f2 from './images/space3.jpg'
import space from './images/jup2.jpg'
function Home() {
  return (
    <>
    <Navbar/>
    <div className="relative">
      < img className='w-screen hidden md:block' src={f2} alt='' />
      < img className='w-screen md:hidden h-screen' src={space} alt='' />
      <div className='absolute  bg-gradient-to-t from-black to-transparent inset-0'>
        <p className='text-xl mt-24 md:mt-52'>Hello, Welcome to T-Blogs</p>
      </div>
    </div>
    </>
  )
}
export default Home;