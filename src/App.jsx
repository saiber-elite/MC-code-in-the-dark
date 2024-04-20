import React from 'react'
import { Link } from 'react-router-dom'
import DevLogo from './assets/dev.png'
// import DesignerLogo from './assets/designer.svg'
import Arrow from './assets/arrow.svg'
import MC from './assets/mclogo.svg'
const App = () => {
  return (
    <div className=' bg-black h-full text-white flex items-center justify-center flex-col gap-10'>
      <img src={MC} className=' mt-10' />
      <h1 className=' font-bold text-3xl text-center'>Welcome to <span className=' text-accent'>Code in the dark</span></h1>
      {/* <h1 className=' text-xl text-center'>Start by <span className=' text-secondary'>choosing</span> what are you</h1> */}
      <div className='flex items-center text-black pt-10'>
      
      <div className=' bg-error py-12 px-20 flex flex-col gap-8 rounded-xl'>
        <div className=' h-44'><img src={DevLogo} className=' w-40 '  /></div>
        
        <div>
        <Link to="/developer" className=' text-white bg-black flex items-center justify-center  py-2 rounded-md  hover:brightness-75'>
          Developer
        <img src={Arrow} className=' inline-block w-4' />
        </Link>
        </div>
        
      </div>
      
      {/* <div className=' bg-error py-12 px-20 flex flex-col gap-8 rounded-xl'>
        <div className=' h-44'><img src={DesignerLogo} className=' w-32' /></div>
        
        <div className=''>
        <Link to="/designer" className=' text-white bg-black flex items-center justify-center  py-1 rounded-md hover:brightness-75 '>
          Designer
        <img src={Arrow} className=' inline-block w-4' />
        </Link></div>
        
      </div> */}
        
      </div>
    </div>
  )
}

export default App
