import React from 'react'
import {Link} from 'react-router-dom'

const Select = () => {
  return (
    <div className='flex flex-col max-w-[800px] mx-auto text-center'>
        <h2 className='mt-8 mb-2'>Select Your Workout</h2>
        <div className='flex flex-row gap-8 mx-auto'>
            <Link to={'/planned'} className='flex-1 bg-blue-500 p-4 text-white rounded'>
            <img src='/images/list.png' className='mx-auto'/>
            <h3 className='text-2xl mb-4'>Planned</h3>
                <p className='text-sm text-gray-300'>Specify excercises and build out whole workout plan.</p>
                </Link>
            <Link to={'/freestyle'} className='flex-1 bg-orange-500 p-4 text-white rounded'>
                <img src='/images/play.png' className='mx-auto'/>
            <h3 className='text-2xl mb-4'>Freestyle</h3>
            <p className='text-sm text-gray-300'>Start with one excercise and select more as you go.</p>
            </Link>
            <Link to={'/randomizer'} className='flex-1 bg-purple-500 p-4 text-white rounded'>
            <img src='/images/shuffle.png' className='mx-auto'/>
            <h3 className='text-2xl mb-4'>Randomizer</h3>
            <p className='text-sm text-gray-300'>Auto generated workouts for a fresh spin on your routine.</p>
            </Link>
        </div>
    </div>
  )
}

export default Select