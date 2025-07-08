import React from 'react'
import EventHandling from './EventHandling'
import StateChange from './StateChange'
import Counter from './Counter'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bmi from './Bmi';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    // <div>
    //   <Header/>
    //   <EventHandling/>
    //   <StateChange/>
    //   <Counter/>
    //   <Bmi/>
    // </div>

    <BrowserRouter>
      <Header/>
      <Routes>

        <Route path="counter/" element={<Counter/>}></Route>
        <Route path="bmi/" element={<Bmi/>}></Route>
        <Route path="" element={<Home/>}></Route>
        <Route path="products/" element={<Products/>}></Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
