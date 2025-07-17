import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ExercisePicker = ({ onSelect, onCancel }) => {
  const [exercises, setExercises] = useState([])
  const [selectExercise, setSelectExercise] = useState('');

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const res = await fetch('/db.json');
        const data = await res.json()

        const filtered = Array.isArray(data) 
        ? data.filter(entry => entry.category?.includes('exercise'))
        : data.exercises?.filter(entry => entry.category?.includes('exercise')) || []
        
        setExercises(filtered);
      } catch (err) {
        console.error('Failed to load exercises:', err)
      }
    }
    fetchExercises()
  }, [])

  return (
    <div className="p-2 my-4">
      <h3 className="text-left font-bold">Choose Next Exercise</h3>

      {exercises.map((entry, i) => (
        <p key={i}
          onClick={() => {
            setSelectExercise(entry.name);
            onSelect(entry.name);
          }}
          className={`p-2 bg-gray-700 flex justify-between hover:bg-gray-800 ${selectExercise === entry.name ? 'bg-gray-800 text-white' : 'bg-gray-700 text-white'}`}>
          {entry.name}
          <span className='inline-flex gap-2'>
            {selectExercise === entry.name && (
              <Link
                to='/workout'
                state={{ startingExercise: entry.name }}
                className='bg-black px-4 rounded'
              >
                Start
              </Link>)}
              {entry.image && (
                <img 
                src={entry.image}
                alt={entry.name} 
                className={`w-6 ${selectExercise === entry.name ? 'bg-green-400 rounded-full' : ''}`} />

              )}
          </span>
        </p>
      ))}

      <button onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default ExercisePicker