import React from 'react'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <Link to={'/about'}>
      <div className='max-w-[375px] sm:max-w-[450px] md:max-w-[600px] mx-auto mb-4 mt-2 pt-16 rounded bg-red-400'>
      <img src='/images/info2.png' className='mx-auto'/>

        <p className='text-4xl font-semibold text-center text-white mb-12'>How to use this app?</p>
        <div className='flex justify-end pb-2'>
          <p className='inline-flex py-1 px-4 mr-2 text-white font-semibold border-white border-[0px] rounded-full'>Learn More

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Info