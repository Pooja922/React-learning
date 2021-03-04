import React from 'react'

/*function Greet(){
    return <h1>Hello Pooja</h1>
}                                                                               //for default exports

//export const Greet=() => <h1>Hello Pooja</h1>                                 //named export
export default Greet /*                                                         //default export

 /*const Greet=props=>{
     console.log(props)                                                         //using props
     return <h1>Hello {props.name} a.k.a {props.heroName}</h1>
 }*/

const Greet=({name,heroName})=>{
    return <h1>Hello {name} a.k.a {heroName}</h1>                               //destructuring using parameters
}

 export default Greet