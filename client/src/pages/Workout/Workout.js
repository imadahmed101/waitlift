import React, { useState, useEffect, useRef } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import ExerciseForm from './ExerciseForm'
import ExercisePicker from './ExercisePicker'
import WorkoutTimer from './WorkoutTimer'

const Workout = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const { startingExercise } = location.state || {};

  const [exercise, setExercise] = useState(startingExercise)
  const [setData, setSetData] = useState([{ weight: '', reps: '' }]);

  const [workoutLog, setWorkoutLog] = useState([])
  const [showLog, setShowLog] = useState(false)
  const [showPicker, setShowPicker] = useState(false)
  const [hideForm, setHideForm] = useState(false)

  const [isTimerActive, setIsTimerActive] = useState(true)
  const [workoutDuration, setWorkoutDuration] = useState(null)

  useEffect(() => {
    if (!startingExercise) {
      navigate('/freestyle');
    }
  }, [startingExercise, navigate]);

  useEffect (() => {
    if (workoutDuration !== null) {
      alert("Workout complete!")
      setHideForm(true)
    }
  }, [workoutDuration])

  const handleUpdateSet = (index, field, value) => {
    const newData = [...setData];
    newData[index][field] = value;
    setSetData(newData);
  }

  const handleAddSet = () => {
    setSetData([...setData, { weight: '', reps: '' }]);
  }

  const handleRemoveSet = (index) => {
    setSetData(setData.filter((_, i) => i !== index));
  }

  const saveCurrentExercise = () => {
    if (!exercise) return false;
    const validSets = setData.filter(
      (set) =>
        set.weight &&
        set.reps &&
        !isNaN(set.weight) &&
        !isNaN(set.reps)
    )

    if (validSets.length === 0) {
      const confirmSkip = window.confirm("No valid sets for this exercise. Skip logging and continue?")
      return confirmSkip;
    }

    setWorkoutLog((prevLog) => [
      ...prevLog,
      { exercise, sets: validSets }
    ]);

    return true;
  }

  const handleNextExercise = () => {
    const success = saveCurrentExercise();
    if (success) {
      setSetData([{ weight: '', reps: '' }])
      setShowPicker(true)
    }
  }


  const handleToggleLog = () => {
    setShowLog(!showLog)
  }

  const handleStopWorkout = () => {
    const success = saveCurrentExercise()
    if (success) {
      setIsTimerActive(false)
      setShowLog(true)
    }
  }

  const handleExerciseSelect = (selectedExercise) => {
    setExercise(selectedExercise)
    setSetData([{ weight: '', reps: '' }])
    setShowPicker(false)
  }

  return (
    <div className='max-w-[375px] sm:max-w-[450px] md:max-w-[600px] mx-auto px-2 text-white'>
      <Link to={'/freestyle'} className='text-blue-500 underline inline-flex'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        Back
      </Link>

      <div className="py-24 text-center">
        {!hideForm && (
          <div>
            <h1 className="text-4xl font-semibold mb-4">Workout</h1>
            <p className="text-2xl font-medium mb-4">Current Exercise: {exercise}</p>

            <WorkoutTimer
              isActive={isTimerActive}
              onStop={(duration) => setWorkoutDuration(duration)}
            />

            <ExerciseForm
              setData={setData}
              onUpdateSet={handleUpdateSet}
              onAddSet={handleAddSet}
              onRemoveSet={handleRemoveSet}
            />
          </div>
        )}

        {showPicker && (
          <ExercisePicker
            onSelect={handleExerciseSelect}
            onCancel={() => setShowPicker(false)}
          />
        )}


        {!hideForm && (
          <div className='flex flex-row gap-2 my-2 mt-2 text-center'>

            <div onClick={handleStopWorkout} className='flex-1 p-4 bg-red-500 rounded text-white'>Stop</div>
            {/* <div onClick={handleViewExcercises} className='flex-1 p-4 bg-purple-400 rounded text-white'>Excercises</div> */}
            <div onClick={handleToggleLog} className='flex-1 p-4 bg-blue-400 rounded text-white'>Logs</div>
            <div onClick={handleNextExercise} className='flex-1 p-4 bg-green-500 rounded text-white'>Next</div>
          </div>

        )}


        {showLog && workoutLog.length > 0 && (
          <div className="text-left text-sm mt-8  p-4 rounded">
            <h3 className="font-bold mb-2">Workout Log</h3>
            <ul>
              {workoutLog.map((entry, i) => (
                <li key={i} className="mb-2">
                  <strong>{entry.exercise}</strong>
                  <ul className="ml-4 list-disc">
                    {entry.sets.map((set, j) => (
                      <li key={j}>Set {j + 1}: {set.weight} lbs × {set.reps} reps</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>


          </div>
        )}

        {workoutDuration !== null && (
          <div>
            Total Duration: {Math.floor(workoutDuration / 60000)}m {Math.floor((workoutDuration % 60000)/1000)}s
            </div>
        )}
      </div>

    </div>
  )
}

export default Workout