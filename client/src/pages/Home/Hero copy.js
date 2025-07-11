import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='py-[200px] bg-red-600 flex flex-col'>
        <p className='text-2xl font-semibold text-center mb-8'>Guided Workouts, Planning, Tracking, and Execution.</p>
        {/* <p className='text-2xl font-semibold text-center mb-8'>WaitLift guides you through your workout, helping you track it each step of the way.</p> */}
        <Link to={'/workout'} className='flex p-4 bg-black text-white font-semibold rounded mx-auto'>Start Workout</Link>

    </div>
  )
}

export default Hero