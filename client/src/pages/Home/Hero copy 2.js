import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
<Link to={'/workout'}>
    <div className='w-[375px] mx-auto m-2 py-16 rounded bg-blue-400'>
        <p className='text-2xl font-semibold text-center mb-8'>Guided Workouts, Planning, Tracking, and Execution.</p>
        <div className='flex justify-center'>
        <p className='p-4 bg-black text-white font-semibold rounded'>Start Workout</p>
        </div>
    </div>
    </Link>
    </div>
  )
}

export default Hero