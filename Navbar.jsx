import React from 'react'
import menu from '../images/menu.png'
import {Link} from 'react-router-dom'
import Signup from './Signup'
import i1 from '../images/home.png'
import i2 from '../images/feed.png'
import i3 from '../images/post.png'
import i4 from '../images/heart.png'
import i5 from '../images/user.png'
export default function Navbar() {
  return (
   <>
   <div className=' h-24 md:h-20 w-screen '>
    <div className='md:flex md:justify-between  px-4 py-2 md:ml-9 '>
     <div className='font-bold md:text-2xl text-blue-900 mt-3 text-sm md:mt-4 '>T-BLOGS</div>

   <div className='flex justify-between md:hidden mt-2'> <img src={i1} alt='' className='h-8 w-8' />
          <Link to='/'><img src={i2} alt='' className='h-7 w-7' /></Link>
          <Link to='/feed'><img src={i3} alt='' className='h-7 w-7' /></Link>
          <Link to='/post'><img src={i4} alt='' className='h-7 w-7' /></Link>
                          <img src={i5} alt='' className='h-7 w-7' />
   </div>

     <ul className=' mr-9 md:flex md:gap-6 md:mt-5'>
     <li className='text-blue-900  md:block hidden  '><Link to="/"><p className='sm:text-center '>HOME</p></Link></li>
     <li className='text-blue-900  md:block hidden   '><Link to='/post'><p className='sm:text-center'>CREATE POST</p></Link></li>
     <li className='text-blue-900  md:block hidden   '><Link to="/feed"><p className='sm:text-center'>GO TO FEED</p></Link></li>
     <li className='text-blue-900  md:block hidden   '><Link to='/profile'><p className='sm:text-center'>PROFILE</p></Link></li>
     </ul>
     <div className='flex gap-1  mt-2 md:mt-2 md:ml-4  md:mr-10'>
     <button className='bg-blue-900 w-14 h-8 md:w-20 mt-2 text-sm hover:bg-white  '><Link className='text-white hover:text-black' to="/sign">Signup</Link></button>
     <button className='bg-blue-900 w-12 h-8 md:w-16 mt-2 text-sm  hover:bg-white'><Link className='text-white hover:text-black' to="/login">Login</Link></button>
     </div>
    </div>
   </div>
   </>
  )
}
