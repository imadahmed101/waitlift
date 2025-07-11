import React from 'react'
import Select from './Select'
import Hero from './Hero'
import Info from './Info'
import Workout from './Workout'
import Filler from './Filler'

const Home = () => {
  return (
    <div className='px-2'>
      <Select/>
      <Info/>
      {/* <Hero/>
      <Workout/> 
      <Filler/>
      */}
    </div>
  )
}

export default Home