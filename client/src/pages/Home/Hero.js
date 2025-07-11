import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <Link to={'/workout'}>
      <div className='max-w-[375px] sm:max-w-[450px] md:max-w-[600px] mx-auto pt-16 rounded bg-blue-400'>
        <p className='text-4xl font-semibold text-center text-white mb-12'>Guided Workouts, Planning, Tracking, and Execution.</p>
        <div className='flex justify-end pb-2'>
          <p className='inline-flex py-1 px-4 mr-2 text-white font-semibold border-white border-[0px] rounded-full'>Start Workout

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Hero