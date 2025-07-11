import React from 'react'
import Select from './Select'
import { Link } from 'react-router-dom'

const Workout = ({from, split, bodyParts, image}) => {
  return (
    <div className='max-w-[375px] sm:max-w-[450px] md:max-w-[600px] mx-auto px-2 text-white'>
      <Link to={'/freestyle'} className='text-blue-500 underline inline-flex'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
Back</Link>
      <h2>
        {from}
      </h2>
      <p>Split: {split}</p>
      <p>Body Parts: {bodyParts}</p>
      <img src={image} className='w-20 bg-white'/>

      <div className='flex flex-row gap-2 my-2 text-center'>
        <div className='flex-1 p-4 bg-green-500 rounded text-white'>Start</div>
        <div className='flex-1 p-4 bg-blue-500 rounded text-white'>Plan</div>
      </div>
    </div>
  )
}

export default Workout