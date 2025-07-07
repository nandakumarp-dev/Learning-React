import React, { useState } from 'react'

function Bmi() {

    let [result,changeResult]= useState('0')

    let [height,changeHeight]= useState('')

    let [weight,changeWeight]= useState('')


  return (
    <div class="card mt-3" style={{width:"300px", padding:"20px"}}>

        <h4>BMI:{result}</h4>

        <label class="form-label" htmlFor='height'>Height : </label>
        <input onChange={(event)=>changeHeight(event.target.value)} value={height} class="form-control" placeholder="enter your height in cm" type="text" />

        <label class="form-label mt-2" htmlFor='weight'>Weight : </label>
        <input onChange={(event)=>changeWeight(event.target.value)} value={weight} class="form-control" placeholder="enter your weight in kg" type="text" />

        <button onClick={()=>changeResult(weight/((height/100)**2))} class="btn btn-primary mt-3">Calculate</button>

    </div>
  )
}

export default Bmi