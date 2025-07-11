import {useState} from 'react'
import { Link } from 'react-router-dom'

const Select = () => {
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    return (
        <div>

<div className='flex flex-col gap-4'>

<Link to={'/planned'}>
<div className='max-w-[375px] sm:max-w-[450px] md:max-w-[600px] mx-auto pt-16 rounded bg-blue-400'>

<p className='text-4xl font-semibold text-center text-white mb-14'>Body Split</p>
<div className='flex justify-end pb-2'>
  <p className='inline-flex py-1 px-4 mr-2 text-white font-semibold border-white border-[0px] rounded-full'>Select Body Split

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 ml-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
  </p>
</div>
</div>
</Link>

<Link to={'/freestyle'}>
<div className='max-w-[375px] sm:max-w-[450px] md:max-w-[600px] mx-auto pt-16 rounded bg-purple-400'>

<p className='text-4xl font-semibold text-center text-white mb-14'>Body Part</p>
<div className='flex justify-end pb-2'>
  <p className='inline-flex py-1 px-4 mr-2 text-white font-semibold border-white border-[0px] rounded-full'>Select Body Part

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 ml-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
  </p>
</div>
</div>
</Link>

<Link to={'/randomizer'}>
<div className='max-w-[375px] sm:max-w-[450px] md:max-w-[600px] mx-auto pt-16 rounded bg-green-400'>

<p className='text-4xl font-semibold text-center text-white mb-14'>Excercise</p>
{/* <p className='text-sm text-gray-200 mb-12'>Auto generate a new workout plan.</p> */}
<div className='flex justify-end pb-2'>
  <p className='inline-flex py-1 px-4 mr-2 text-white font-semibold border-white border-[0px] rounded-full'>Select Excercise

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 ml-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
  </p>
</div>
</div>
</Link>

</div>
            {/* <h3 className='text-xl'>Choose First Excercise:</h3> */}
            {/* <p className='text-sm text-gray-600'>Select a workout split or specific muscle group you want to work out.</p> */}

            <div onClick={()=>setOne(true)} className='hidden flex flex-row gap-2 mb-2'>
                <p className='bg-blue-600 text-white rounded p-8'>Push</p>
                <p className='bg-blue-600 text-white rounded p-8'>Pull</p>
                <p className='bg-blue-600 text-white rounded p-8'>Legs</p>
                <p className='bg-blue-400 text-white rounded p-8'>Skip</p>
            </div>

            {one && <div onClick={()=>setTwo(true)} className='flex flex-row gap-2'>
                <p className='bg-red-600 text-white rounded-full px-4 py-1'>Shoulders</p>
                <p className='bg-red-600 text-white rounded-full px-4 py-1'>Arms</p>
                <p className='bg-red-600 text-white rounded-full px-4 py-1'>Chest</p>
                <p className='bg-red-600 text-white rounded-full px-4 py-1'>Back</p>
                <p className='bg-red-600 text-white rounded-full px-4 py-1'>Lats</p>
                <p className='bg-red-600 text-white rounded-full px-4 py-1'>Traps</p>
                <p className='bg-red-600 text-white rounded-full px-4 py-1'>Abs</p>
                <p className='bg-red-600 text-white rounded-full px-4 py-1'>Quads</p>
                <p className='bg-red-600 text-white rounded-full px-4 py-1'>Hams</p>
                <p className='bg-red-600 text-white rounded-full px-4 py-1'>Calfs</p>
                <p className='bg-red-400 text-white rounded-full px-4 py-1'>Skip</p>
            </div>}

            {two && <div className='flex flex-row mt-2'>

                <div className='bg-gray-500 w-[250px]'>
                    <h3>Split</h3>
                    <p className='text-white rounded-full px-4 py-1'>Push</p>
                    <p className='text-white rounded-full px-4 py-1'>Pull</p>
                    <p className='text-white rounded-full px-4 py-1'>Legs</p>

                    <h3>Muscle</h3>
                    <p className='text-white rounded-full px-4 py-1'>Shoulders</p>
                    <p className='text-white rounded-full px-4 py-1'>Arms</p>
                    <p className='text-white rounded-full px-4 py-1'>Chest</p>
                    <p className='text-white rounded-full px-4 py-1'>Back</p>
                    <p className='text-white rounded-full px-4 py-1'>Lats</p>
                    <p className='text-white rounded-full px-4 py-1'>Traps</p>
                    <p className='text-white rounded-full px-4 py-1'>Abs</p>
                    <p className='text-white rounded-full px-4 py-1'>Quads</p>
                    <p className='text-white rounded-full px-4 py-1'>Hams</p>
                    <p className='text-white rounded-full px-4 py-1'>Calfs</p>

                </div>

                <div className='w-full flex flex-row flex-wrap gap-4 ml-4'>
                    <p className='w-[300px] p-4 bg-blue-400 text-white'>Bench Press</p>
                    <p className='w-[300px] p-4 bg-blue-400 text-white'>Over Head Press</p>
                    <p className='w-[300px] p-4 bg-blue-400 text-white'>Pull Up</p>
                    <p className='w-[300px] p-4 bg-blue-400 text-white'>Chin Up</p>
                    <p className='w-[300px] p-4 bg-blue-400 text-white'>Squat</p>
                    <p className='w-[300px] p-4 bg-blue-400 text-white'>Lunges</p>
                    <p className='w-[300px] p-4 bg-blue-400 text-white'>Lunges</p>
                    <p className='w-[300px] p-4 bg-blue-400 text-white'>Lunges</p>
                    <p className='w-[300px] p-4 bg-blue-400 text-white'>Lunges</p>
                    <p className='w-[300px] p-4 bg-blue-400 text-white'>Lunges</p>
                    <p className='w-[300px] p-4 bg-blue-400 text-white'>Lunges</p>
                    <p className='w-[300px] p-4 bg-blue-400 text-white'>Lunges</p>

                </div>

            </div>}

            {/* <div>
                <p>Bench Press</p>
                <p>Over Head Press</p>
                <p>Pull Up</p>
                <p>Chin Up</p>
                <p>Squat</p>
                <p>Lunges</p>
            </div> */}
        </div>
    )
}

export default Select