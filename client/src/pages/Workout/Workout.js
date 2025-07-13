import React from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const exercises = ['Bench Press', 'Overhead Press', 'Lateral Raise', 'Skull Crushers', 'Pull-ups', 'Inverted Rows', 'Bicep Curls', 'Squats', 'Lunges', 'Hamstring Curls', 'Quad Extensions'];

const Workout = () => {
  const location = useLocation()
  const navigation = useNavigate();
  const { startingExercise } = location.state || {};

  const [start, setStart] = useState(true);
  const [count, setCount] = useState(0);
  const [exercise, setExercise] = useState(startingExercise)
  const [setData, setSetData] = useState([
    { weight: '', reps: '' }
  ]);
  const [workoutLog, setWorkoutLog] = useState([]);
  const [showPicker, setShowPicker] = useState(false)
  const timerRef = useRef(null);
  const [finalTime, setFinalTime] = useState('');
  const [end, setEnd] = useState(false);
  const [viewLog, setViewLog] = useState(false);

  useEffect(() => {
    if(!startingExercise) {
      navigation('/freestyle');
    }
  }, [startingExercise, navigation]);

  useEffect(() => {
    if (start) {
      timerRef.current = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [start]);

  const formatTime = (seconds) => `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  const timeFormatted = formatTime(count);

  const startWorkout = () => setStart(true);


  const saveCurrentExercise = () => {
    if (!exercise) return false;

    for (let set of setData) {
      const weightFilled = set.weight && !isNaN(set.weight);
      const repsFilled = set.reps && !isNaN(set.reps);

      if ((weightFilled && !repsFilled) || (!weightFilled && repsFilled)) {
        alert("Please double check your sets. Each set must have BOTH weight and reps.");
        return false;
      }
    }

    const validSets = setData.filter(set =>
      set.weight && set.reps && !isNaN(set.weight) && !isNaN(set.reps)
    );

    if (validSets.length === 0) {
      alert("Please enter at least one complete set.");
      return false;
    }

    setWorkoutLog(log => [...log, { exercise, sets: validSets }]);
    return true;
  };

  const handleNextExercise = () => {
    const success = saveCurrentExercise();
    if (!success) return;

    setShowPicker(true);
  };

  const handleExerciseSelect = (startingExercise) => {
    setExercise(startingExercise);
    setSetData([{ weight: '', reps: '' }]);
    setShowPicker(false);
  }

  const updateSetData = (index, field, value) => {
    const newData = [...setData];
    newData[index][field] = value;
    setSetData(newData);
  };

  const addSet = () => setSetData([...setData, { weight: '', reps: '' }]);

  const removeSet = (index) => setSetData(setData.filter((_, i) => i !== index));

  const handleEndWorkout = async () => {
    const success = saveCurrentExercise();
    if (!success) return;

    clearInterval(timerRef.current);
    setFinalTime(formatTime(count));
    setEnd(true);

    const payload = {
      duration: count,
      exercises: workoutLog
    };

    try {
      await fetch('http://localhost:3000/workouts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      console.log('Workout saved.');
    } catch (error) {
      console.error('Error saving workout:', error)
    }
  }

  const handleViewExcercises = async () => {
    alert('view excercises')
  }

  const handleViewLog = async () => {
    setViewLog(!viewLog);
  }

  return (
    <div className='max-w-[375px] sm:max-w-[450px] md:max-w-[600px] mx-auto px-2 text-white'>
      <Link to={'/freestyle'} className='text-blue-500 underline inline-flex'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        Back
      </Link>

      {startingExercise && !end &&
        <div className="py-24 text-center">
          <h2 className="text-4xl font-semibold mb-4">Workout in progress</h2>
          <p className="text-xl text-gray-400 mb-8">Time: {timeFormatted}</p>
          <p className="text-2xl font-medium mb-4">{exercise}</p>

          <table className='bg-gray-900 rounded'>
            <thead>
              <tr>
                <th></th>
                <th>Set</th>
                <th>Weight</th>
                <th>Reps</th>
                <th>Actions</th>
              </tr>
            </thead>


            <tbody className='bg-gray-800'>
              {setData.map((set, i) => (
                <tr key={i}>
                  <td className="p-4">

                    <button onClick={() => removeSet(i)} className="text-red-500 p-2 rounded">x</button>
                  </td>
                  <td className="p-4">
                    {i + 1}

                  </td>
                  <td>
                    <input
                      type="number"
                      value={set.weight}
                      onChange={(e) => updateSetData(i, 'weight', e.target.value)}
                      className=" w-[100px] md:w-full text-right text-black p-1"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={set.reps}
                      onChange={(e) => updateSetData(i, 'reps', e.target.value)}
                      className="w-[100px] md:w-full text-right text-black p-1"
                    />
                  </td>
                  <td className="p-2">
                    <button onClick={addSet} className="bg-green-500 p-2 px-4 rounded mr-1">+</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {showPicker && (
            <div className="p-2 my-4">
              <h3 className="text-left font-bold">Choose Next Exercise</h3>
              {exercises.map((name, i) => (
                <button key={i} onClick={() => handleExerciseSelect(name)} className="bg-white text-black p-2 m-2 rounded">
                  {name}
                </button>
              ))}
            </div>
          )}

          <div className='flex flex-row gap-2 my-2 mt-32 text-center'>
            <div onClick={handleEndWorkout} className='flex-1 p-4 bg-red-400 rounded text-white'>Stop</div>
            <div onClick={handleViewExcercises} className='flex-1 p-4 bg-purple-400 rounded text-white'>Excercises</div>
            <div onClick={handleViewLog} className='flex-1 p-4 bg-blue-400 rounded text-white'>Logs</div>
            <div onClick={handleNextExercise} className='flex-1 p-4 bg-green-500 rounded text-white'>Next</div>
          </div>

          {viewLog && <div className="text-left text-sm mt-8  p-4 rounded">
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
          </div>}
        </div>
      }

      {end &&
        <div className="py-24 text-center">
          <h2 className="text-4xl font-semibold mb-4">Workout Complete</h2>
          <p className="text-xl text-gray-600 mb-8">Total Time: {finalTime}</p>

          <div className="text-left text-sm mt-8 bg-blue-400 p-4 rounded">
            <div className='flex justify-between'>

              <h3 className="font-bold text-2xl mb-2">Workout Log</h3>
              <p>Total Time: {finalTime}</p>
            </div>
            <ul>
              {workoutLog
                .map((entry, i) => (
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
        </div>
      }
    </div>
  )
}

export default Workout