import React from 'react'

const Hello=() =>{
 /*   return(
        <div>
            <h1>Hello Pooja</h1>
        </div>
    )*/
    return React.createElement('div',{id:'hello',className:'class1'},React.createElement('h1',null,'Hello Pooja'));
}

export default Hello