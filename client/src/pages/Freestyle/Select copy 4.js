  import { useState } from 'react'
  import { Link } from 'react-router-dom'
  import Workout from './Workout'
  import db from '../../db.json'

  const Select = () => {
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(true);
    const [four, setFour] = useState(false);
    const [five, setFive] = useState(false);
    const [bodySplit, setBodySplit] = useState('');
    const [bodySplitPush, setBodySplitPush] = useState(false);
    const [bodySplitPull, setBodySplitPull] = useState(false);
    const [bodySplitLegs, setBodySplitLegs] = useState(false);
    const [bodyPart, setBodyPart] = useState('')

    const func1 = (name) => {
      alert(name)
    }

    return (
      <div>

        <div className='flex flex-col gap-4 max-w-[375px] sm:max-w-[450px] md:max-w-[600px] mx-auto'>
          <div className='bg-blue-500 py-20 text-center text-white rounded'>
            <Link to='/workout' className='text-4xl font-semibold'>
              Start Now
            </Link>
          </div>


          <div>
            <div onClick={() => setThree((prev) => !prev)} className='pt-16 rounded bg-green-400'>

              <p className='text-4xl font-semibold text-center text-white mb-14'>Excercise</p>
              <div className='flex justify-between pb-2'>
                <p className='inline-flex py-1 px-4 text-sm ml-2 text-white'>Mandatory</p>
                <p className='inline-flex py-1 px-4 mr-2 text-white font-semibold border-white border-[0px] rounded-full'>Select Excercise

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
              <p key={i} className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>{entry.name}
                <img src={entry.image} className='w-6' />
              </p>
            ))}
            </div>

          {/* {three &&
            <div className='text-white flex flex-col gap-2'>

              {db
              .filter(entry => entry.category.includes('excercise'))
              .map((entry, i) => (
              <p key={i} className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>{entry.name}
                <img src={entry.image} className='w-6' />
              </p>
            ))}
              <p className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>Bench Press
                <div className='inline-flex'>
                <img src='/images/bench-press.png' className='w-6' />
                  <p className='px-2 ml-2 bg-gray-700 rounded-full text-gray-400'>?</p>
                </div>
              </p>
              <p className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>Push Up
                <img src="/images/pushups.png" className='w-6' />
              </p>
              <p className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>Squat
                <img src='/images/squats.png' className='w-6' />
              </p>
              <p className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>Over Head Press
                <img src='/images/arm.png' className='w-6' />
              </p>
              <p className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>Pull Up
                <img src='/images/pullups.png' className='w-6' />
              </p>
              <p className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>Chin Up
                <img src='/images/pullups.png' className='w-6' />
              </p>
              <p className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>Lunges
                <img src='/images/stretching.png' className='w-6' />
              </p>
              <p className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>Calf Raise
                <img src='/images/calves.png' className='w-6' />
              </p>
              <p className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>Bicep Curl
                <img src='/images/arm.png' className='w-6' />
              </p>
              <p className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>Hammer Curl
                <img src='/images/arm.png' className='w-6' />
              </p>
              <p className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>Tricep Extension
                <img src='/images/triceps.png' className='w-6' />
              </p>
              <p onClick={() => setFive((prev) => !prev)} className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>Skull Crushers
                <img src='/images/triceps.png' className='w-6' />
              </p>
              {five && <div>
                <h3>Skull Crushers</h3>
                <p>Split: Push</p>
                <p>Body Parts: Triceps</p>
                <div className='flex flex-row gap-2 my-2 text-center'>
                  <p className='flex-1 p-2 bg-green-500'>Start</p>
                  <p className='flex-1 p-2 bg-blue-500'>Info</p>
                </div>
              </div>
              }
              <Link to={'/workout'} state={{ from: "Incline Bench Press", split: "Push", bodyParts: "Chest, Shoulders, Triceps", image: "/images/incline.png" }} className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>
                <p>Incline Bench Press
                </p>
                <img src='/images/incline.png' className='w-6' />
              </Link>
              <Link to={'/workout'} state={{ from: "Lateral Raise", split: "Push", bodyParts: "Shoulders", image: "/images/arm.png" }} className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>
                <p>Lateral Raise
                </p>
                <img src='/images/arm.png' className='w-6' />
              </Link>

              <p onClick={() => func1('Shrugs')} className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>Shrugs
                <img src='/images/traps.png' className='w-6' />
              </p>
              <p onClick={() => func1('Inverted Rows')} className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>Inverted Row
                <img src='/images/row.png' className='w-6' />
              </p>
              <p onClick={() => setFour((prev) => !prev)} className='p-2 bg-gray-700 hover:bg-gray-800 inline-flex justify-between'>Reverse Curl
                <img src='/images/arm.png' className='w-6' />
              </p>
              {four && <div>
                <h3>Reverse Curl</h3>
                <p>Split: Pull</p>
                <p>Body Parts: Forearms, Brachiorradialis, Biceps, Triceps</p>
                <div className='flex flex-row gap-2 my-2 text-center'>
                  <p className='flex-1 p-2 bg-green-500'>Start</p>
                  <p className='flex-1 p-2 bg-blue-500'>Info</p>
                </div>
              </div>}
            </div>
          } */}
        </div>
      </div>
    )
  }

  export default Select