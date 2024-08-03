import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import About_us from './About_us'
import Leadership from './Leadership'
import Mentor from './Mentor'
import Contact from './Contact';
import Donation from './Donation'
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<About_us/>} path='/about'></Route>
        <Route element={<Leadership/>} path='/leadership'></Route>
        <Route element={<Mentor/>} path='/mentor'></Route>
        <Route element={<Contact/>} path='/contact'></Route>
        <Route element={<Donation/>} path='/donation'></Route>
      </Routes>
    </div>
  )
}

export default App