import React from 'react'
import EventHandling from './EventHandling'
import StateChange from './StateChange'
import Counter from './Counter'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bmi from './Bmi';

function App() {
  return (
    <div>

      <EventHandling/>
      <StateChange/>
      <Counter/>
      <Bmi/>

    </div>
  )
}

export default App
