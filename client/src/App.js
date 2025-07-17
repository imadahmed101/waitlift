import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Freestyle from './pages/Freestyle/Freestyle'
import Planned from './pages/Planned/Planned'
import Randomizer from './pages/Randomizer/Randomizer'
import Workout from './pages/Workout/Workout'
import Error from './pages/Error'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/freestyle' element={<Freestyle/>}/>
        <Route path='/planned' element={<Planned/>}/>
        <Route path='/randomizer' element={<Randomizer/>}/>
        <Route path='/workout' element={<Workout/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
