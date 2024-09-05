import React from 'react'
import s from '../images/space3.jpg'
function Login() {
  return (
    <>
     <div className=' relative'>
   <img className='w-screen h-screen object-cover' src={s} alt='space image' />
   <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-85' ></div>
   <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className='h-96 w-96  flex items-center justify-center backdrop-blur-sm border rounded-sm'>
        <form>
            <h1 className='text-md mb-12'>Login</h1>
            <label className='text-white mt-2 mr-10'>E-mail</label>
            <input className='bg-transparent mt-2 border border-slate-400 rounded-sm'/><br/>
            <label className='text-white mt-2 mr-4'>Password</label>
            <input className='bg-transparent mt-2 border border-slate-400 rounded-sm'/><br/>
            <button className='bg-white text-black w-20 h-8 mt-10 rounded-sm'>Login</button>
        </form>
        </div>
    </div>
   </div>
    </>
  )
}

export default Login
