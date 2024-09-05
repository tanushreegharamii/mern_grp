import React, { useState } from 'react'
import s from '../images/space3.jpg'
import Navbar from './Navbar'
import axios from 'axios'
function Post() {
  const [post, setPost] = useState('')
  const [title, setTitle] = useState('')


  const postDatas = async(e) => {
    e.preventDefault();
    try {
      const postD = await axios.post('http://localhost:3000/postdata', {title, post})
      console.log(postD.data)
    } catch (error) {
      if (error.response){
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
      else if(error.request){
        console.log(error.request)
      }
      else{
        console.log('Error', error.message);
      }
    }
  }

  return (
    <>
  <Navbar/>
  <form onSubmit={postDatas} className=' relative'>
      <img src={s} alt="space image" className='w-full h-screen object-cover' />
     <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100' ></div>
    
     <div  className="absolute inset-0 flex items-center justify-center gap-4 text-white">
      <div className='h-96 w-96 backdrop-blur-sm rounded-sm'><p className='mt-10'>Input Your Thesis here</p><div className='border h-12 w-80 ml-8 mt-5'><input onChange={(e)=>setTitle(e.target.value)} className='w-80 h-11 opacity-30' ></input></div>
      <div className='border h-48 w-80 ml-8 mt-4'><input onChange={(e)=>setPost(e.target.value)} className='w-80 h-48 opacity-30'></input></div>
      </div>
      <div className='h-96 w-96 backdrop-blur-sm rounded-sm hidden md:block'><p className='mt-10'>Input Your Image here</p><div className='w-80 h-64 border mt-5 ml-8 ' ></div></div>
      <div className='w-16 h-96 backdrop-blur-sm rounded-sm'><button className='mt-44 '>POST</button></div>
     </div>
     
     </form>
    </>
  )
}

export default Post
