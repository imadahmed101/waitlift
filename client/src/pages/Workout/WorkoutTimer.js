import React, {useEffect, useState, useRef} from 'react'

const WorkoutTimer = ({ isActive, onStop }) => {
    const [elapsed, setElapsed] = useState(0)
    const intervalRef = useRef(null)
    const startTimeRef = useRef(null)

    useEffect(() => {
        if (isActive) {
            if (!startTimeRef.current) {
                startTimeRef.current = Date.now();
            }

            intervalRef.current = setInterval(() => {
                setElapsed(Date.now() - startTimeRef.current)
            }, 1000);

        } else {
            clearInterval(intervalRef.current)
            if (onStop && startTimeRef.current) {
                onStop(Date.now() - startTimeRef.current)
            }
        }
        return () => clearInterval(intervalRef.current)
    }, [isActive]);

    const formatTime = (ms) => {
        const minutes = Math.floor(ms / 60000)
        const seconds = Math.floor((ms % 60000) /1000)
        return `${minutes}m ${seconds}s`
    }

  return (
    <div>
        <p>Workout Time: {formatTime(elapsed)}</p>
    </div>
  )
}

export default WorkoutTimer