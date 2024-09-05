import React from 'react'
import space from '../images/s.jpg'
function Profile() {
  return (
    <>

    <div className='relative'>
    <img src={space} className='w-screen h-screen object-cover' alt="space" />
    <div className='backdrop-blur-2xl h-3/4 w-3/4 absolute inset-0 mt-20 ml-40 rounded-md  '>
    <p className='items-start mt-10 mr-96'>Profile Picture</p>
     <div className=' h-36 w-36 border-slate-300 border md:ml-60 md:mt-10' ></div>
     <p className='mr-96 mt-5'>Name : jjjjjjjjjjjjjjj</p>
     <p className='mr-96 mt-2'>Email : jjjjjjjjjjjjjjj</p>
    </div>
    
    </div>
    </>
  )
}

export default Profile
