import React from 'react'

function FunctionClick(){
    function clickHandler(){
        console.log('Button Clicked')
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>                       {/*do not use function call since the event already takes place*/}
        </div>

    )
}

export default FunctionClick