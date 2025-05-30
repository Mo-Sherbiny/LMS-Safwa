import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20
    px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>

        <h1 className='md:text-home-heading-large text-home-heading-small relative
        font-bold text-gray-800 max-w-3xl mx-auto'>Empower Your Future With The Courses
        Designed To <span className='text-blue-600'>Transform Your Career.</span>
        <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0'/>
        </h1>

        <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Unlock Your Potential with Our Comprehensive Online Courses,
          We Bring The Power of Education to Your Hands,Empowering You to Achieve Your Goals.</p>

          <p className='md:hidden text-gray-500 max-w-sm mx-auto'>We Bring Together
            World-Class Instructors To Help You Achieve Your Professional Goals.</p>
            <SearchBar/>
    </div>
  )
}

export default Hero
