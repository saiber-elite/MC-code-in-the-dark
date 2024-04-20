import React from 'react'
import chall1 from './../assets/chall1.png'
import MC from './../assets/mclogo.svg'
import chall2 from '../assets/chall2.jpg'
import Arrow from './../assets/arrow.svg'

const dev = () => {
  
  return (
    <div className=' bg-black w-screen h-screen text-white p-5 flex items-center  flex-col gap-10 '>
      <img src={MC} className=' h-14' />
      <div className=' text-center'><h1 className=' font-bold text-3xl mb-5'>Hey <span className=' text-accent'>Developer</span></h1>
      <h1 className=' text-xl'>In this challenges you are going to <span className=' text-secondary'>code</span>  an HTML/CSS page from the </h1> <h1 className=' text-xl'> picture we provide without viewing any preview AKA  in the <span className=' text-secondary'>DARK!!</span>  </h1></div>
      
      <div className=' grid xl:grid-cols-2 gap-10 sm:grid-cols-1 pb-10'>
        
        <div className=' bg-error px-4 py-3 flex items-center flex-col gap-2 rounded-lg'>
          <div className=' w-72  h-48 flex  justify-center items-center'><img src={chall1} className=' rounded-md h-40' /></div>
            <h1 className=' text-white font-bold text-2xl'>Challenge 01</h1>
            <h1 className=' text-gray-400'>Code in the dark</h1>
            <div>
            <a href='chall1/index.html' className=' text-white bg-black flex items-center justify-center  py-3 px-5 rounded-md  hover:brightness-75 '>
            Start challenge
            <img src={Arrow} className=' inline-block w-4' />
            </a>
          </div>
        </div>
        
        <div className=' bg-error px-4 py-3 flex items-center flex-col gap-2 rounded-lg'>
          <div className=' w-72 h-48 flex justify-center items-center '><img src={chall2} className=' rounded-md h-40 w-60 ' /></div>
            <h1 className=' text-white font-bold text-2xl'>Challenge 02</h1>
            <h1 className=' text-gray-400'>Code in the dark</h1>
            <div>
            <a href='chall2/index.html' className=' text-white bg-black flex items-center justify-center  py-3 px-5 rounded-md  hover:brightness-75 '>
            Start challenge
            <img src={Arrow} className=' inline-block w-4' />
            </a>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default dev
