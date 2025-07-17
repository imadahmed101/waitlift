import React from 'react'

const ExerciseForm = ({setData, onUpdateSet, onAddSet, onRemoveSet}) => {
  return (
    <table className='bg-gray-900 rounded'>
            <thead>
              <tr>
                <th>#</th>
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

                    <button onClick={() => onRemoveSet(i)} className="text-red-500 p-2 rounded">x</button>
                  </td>
                  <td className="p-4">
                    {i + 1}

                  </td>
                  <td>
                    <input
                      type="number"
                      value={set.weight}
                      onChange={(e) => onUpdateSet(i, 'weight', e.target.value)}
                      className=" w-[100px] md:w-full text-right text-black p-1"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={set.reps}
                      onChange={(e) => onUpdateSet(i, 'reps', e.target.value)}
                      className="w-[100px] md:w-full text-right text-black p-1"
                    />
                  </td>
                  <td className="p-2">
                    <button onClick={onAddSet} className="bg-green-500 p-2 px-4 rounded mr-1">+</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
  )
}

export default ExerciseForm