import React, { useState } from 'react'
import s from '../images/space3.jpg'
import axios from 'axios'
function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSub = async(e) =>{
    e.preventDefault();
   try {
    const postuser = await axios.post('http://localhost:3000/signup', {username , email, password})
    console.log(postuser.data);
   } catch (error) {
    if (error.response){
      console.log(`Error: ${error.response.data}`);
      console.log(error.response.status)
    }
    else if(error.request){
      console.log(`Request Error: ${error.request}`);
    }
    else{
      console.log(`Error: ${error.message}`);
    }
   }
  }
  return (
    <>
   <div className=' relative'>
   <img className='w-screen h-screen object-cover' src={s} alt='space image' />
   <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-85' ></div>
   <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className='h-96 w-96 backdrop-blur-sm flex items-center justify-center   border rounded-sm'>
        <form onSubmit={handleSub}>
            <h1 className='text-md mb-14'>Signup</h1>
            <label className='text-white mr-10'>Name</label>
            <input type='text' onChange={(e)=>setUsername(e.target.value)} className='bg-transparent border border-slate-400 rounded-sm'/><br/>
            <label  className='text-white mt-2 mr-10'>E-mail</label>
            <input onChange={(e)=>setEmail(e.target.value)} type='email' className='bg-transparent mt-2 border border-slate-400 rounded-sm'/><br/>
            <label className='text-white mt-2 mr-4'>Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} type='text' className='bg-transparent mt-2 border border-slate-400 rounded-sm'/><br/>
            <button className='bg-white text-black w-20 h-8 mt-8 rounded-sm'>Signup</button>
        </form>
      </div>
    </div>
   </div>
   
    </>
  )
}

export default Signup
