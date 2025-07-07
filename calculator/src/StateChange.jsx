import React, { useState } from 'react'


function StateChange() {

    let [content,changeContent] =useState('Hello World')

  return (

    <div>

        <h1 id = 'heading' >{content}</h1>
        <button onClick={()=>changeContent('Hai World')}> Change Text</button>

    </div>
  )
}

export default StateChange