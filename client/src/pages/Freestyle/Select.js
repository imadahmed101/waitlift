import { useState } from 'react'
import { Link } from 'react-router-dom'
import Workout from './Workout'
import db from '../../db.json'

const Select = () => {
  const [selectExercise, setSelectExercise] = useState('');

  const handleSelect = (exercise) => {
    setSelectExercise(exercise);
  }

  return (
    <div>

      <div className='flex flex-col gap-4 max-w-[375px] sm:max-w-[450px] md:max-w-[600px] mx-auto'>
        <div>
          <div className='pt-16 rounded bg-green-400'>

            <p className='text-4xl font-semibold text-center text-white mb-14'>Exercise</p>
            <div className='flex justify-between pb-2'>
              <p className='inline-flex py-1 px-4 text-sm ml-2 text-white'>Mandatory</p>
              <p className='inline-flex py-1 px-4 mr-2 text-white font-semibold border-white border-[0px] rounded-full'>Select Exercise

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </p>
            </div>
          </div>
        </div>

        <div className='text-white flex flex-col gap-2'>

          {db
            .filter(entry => entry.category.includes('excercise'))
            .map((entry, i) => (
              <p key={i} onClick={() => handleSelect(entry.name)} className={`p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between ${selectExercise === entry.name ? 'bg-gray-800 text-white' : 'bg-gray-700 text-white'}`}>{entry.name}
              <div className='inline-flex gap-2'>

              {selectExercise === entry.name && <Link to='/workout' state={{startingExercise: entry.name}} className='bg-black px-4 rounded'>Start</Link>}
              {/* {selectExercise === entry.name && <button className='bg-black px-4 rounded'>Start</button>} */}
                <img src={entry.image} className={`w-6 ${selectExercise === entry.name ? 'bg-green-400 rounded-full' : ''}`} />
              </div>
              </p>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Select