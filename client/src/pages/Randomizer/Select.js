import {useState} from 'react'

const Select = () => {
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    return (
        <div>
            {/* <h3 className='text-xl'>Choose First Excercise:</h3> */}
            {/* <p className='text-sm text-gray-600'>Select a workout split or specific muscle group you want to work out.</p> */}

            <div onClick={()=>setOne(true)} className='flex flex-row gap-2 mb-2'>
                <p className='bg-gray-700 text-white rounded-full py-1 px-4'>Full Body</p>
                <p className='bg-gray-700 text-white rounded-full py-1 px-4'>Push</p>
                <p className='bg-gray-700 text-white rounded-full py-1 px-4'>Pull</p>
                <p className='bg-gray-700 text-white rounded-full py-1 px-4'>Legs</p>
                <p className='bg-gray-500 text-white rounded-full py-1 px-4'>Skip</p>
            </div>
            <hr className='my-2'/>

            {one && <div onClick={()=>setTwo(true)} className='flex flex-row gap-2'>
                <p className='bg-gray-700 text-white rounded-full px-4 py-1'>Shoulders</p>
                <p className='bg-gray-700 text-white rounded-full px-4 py-1'>Arms</p>
                <p className='bg-gray-700 text-white rounded-full px-4 py-1'>Chest</p>
                <p className='bg-gray-700 text-white rounded-full px-4 py-1'>Back</p>
                <p className='bg-gray-700 text-white rounded-full px-4 py-1'>Lats</p>
                <p className='bg-gray-700 text-white rounded-full px-4 py-1'>Traps</p>
                <p className='bg-gray-700 text-white rounded-full px-4 py-1'>Abs</p>
                <p className='bg-gray-700 text-white rounded-full px-4 py-1'>Quads</p>
                <p className='bg-gray-700 text-white rounded-full px-4 py-1'>Hams</p>
                <p className='bg-gray-700 text-white rounded-full px-4 py-1'>Calfs</p>
                <p className='bg-gray-500 text-white rounded-full px-4 py-1'>Skip</p>
            </div>}
            <hr className='my-2'/>

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