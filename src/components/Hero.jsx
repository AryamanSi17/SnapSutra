import React from 'react'
import {logo} from '../assets'
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="sumz_logo" className='w-28 object-contain'/>
     
     <button 
     type='button'
     onClick={()=>window.open()}
     className='black_btn'
     > GitHub </button>
      </nav>
      <h1 className='head_text'>Summarize Articles with <br className='max md:hidden'/>
      <span className='orange_gradient'>OPEN AI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Our cutting-edge technology utilizes advanced natural language processing algorithms to deliver concise and accurate summaries, saving you valuable time and enhancing your productivity. Experience the convenience of our article summarization service and elevate your reading and research experience today!
      </h2>
    </header> 
    )
}

export default Hero