import React from 'react'
import chall1 from './../assets/chall1.png'
import MC from './../assets/mclogo.svg'
import chall2 from '../assets/chall2.jpg'
import Arrow from './../assets/arrow.svg'

const dev = () => {
  
  return (
    <div className='flex flex-col items-center w-screen h-screen gap-10 p-5 text-white bg-black '>
      <img src={MC} className=' h-14' />
      <div className='text-center '><h1 className='mb-5 text-3xl font-bold '>Hey <span className=' text-accent'>Developer</span></h1>
      <h1 className='text-xl '>In this challenges you are going to <span className=' text-secondary'>code</span>  an HTML/CSS page from the </h1> <h1 className='text-xl '> picture we provide without viewing any preview AKA  in the <span className=' text-secondary'>DARK!!</span>  </h1></div>
      
      <div className='grid gap-10 pb-10 xl:grid-cols-2 sm:grid-cols-1'>
        
        <div className='flex flex-col items-center gap-2 px-4 py-3 rounded-lg bg-error'>
          <div className='flex items-center justify-center h-48 w-72'><img src={chall1} className='h-40 rounded-md ' /></div>
            <h1 className='text-2xl font-bold text-white '>Challenge 01</h1>
            <h1 className='text-gray-400 '>Code in the dark</h1>
            <div>
            <a href='chall1/index.html' className='flex items-center justify-center px-5 py-3 text-white bg-black rounded-md hover:brightness-75'>
            Start challenge
            <img src={Arrow} className='inline-block w-4 ' />
            </a>
          </div>
        </div>
        
        <div className='flex flex-col items-center gap-2 px-4 py-3 rounded-lg bg-error'>
          <div className='flex items-center justify-center h-48 w-72'><img src={chall2} className='h-40 rounded-md w-60' /></div>
            <h1 className='text-2xl font-bold text-white '>Challenge 02</h1>
            <h1 className='text-gray-400 '>Code in the dark</h1>
            <div>
            <a href='chall2/index.html' className='flex items-center justify-center px-5 py-3 text-white bg-black rounded-md hover:brightness-75'>
            Start challenge
            <img src={Arrow} className='inline-block w-4 ' />
            </a>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default dev
