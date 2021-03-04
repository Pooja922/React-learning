import React from 'react'

/*function Greet(){
    return <h1>Hello Pooja</h1>
} //for default exports

//export const Greet=() => <h1>Hello Pooja</h1> //named export
export default Greet //default export  */   
 const Greet=props=>{
     console.log(props)
     return <h1>Hello {props.name} a.k.a {props.heroName}</h1>
 }
 
 export default Greet