import React from 'react'

function EventHandling() {

    function noParamFunction(){

        console.log('no param function called')

    }

    function paramFunction(message){

        console.log(message)

    }

    function paramFunction(message){

        console.log(message)

    }

  return (
    <div>
        <button onClick={noParamFunction}>No params Function</button>
        
        <button onClick={()=>paramFunction('parameter function called')}>With Param Function</button>

        <button onClick={event=>EventFunction(event)}>Even Function</button>

    </div>
  )
}

export default EventHandling