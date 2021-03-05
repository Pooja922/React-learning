import React from "react";
import Person from "./Person";

function NameList(){
    const persons=[
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'angular'
        },
        {
            id:2,
            name:'Clark',
            age:35,
            skill:'reactjs'
        },
        {
            id:3,
            name:'Diana',
            age:25,
            skill:'vue'
        }

    ]
    const personList=persons.map(person=> <Person person={person} />)
    return(
        <div>
            {personList}
        </div>
    )
}

export default NameList