import React from 'react';
import Person from './Person';

function NameList(props) {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const nameList = names.map((name,index) => <h2 key={index}>{name}</h2>)
    const persons = [{
        id: 1,
        name: 'Bruce',
        age: 28,
        skill: 'React'
    },
    {
        id: 2,
        name: 'Clark',
        age: 25,
        skill: 'JSX' 
    },
    {
        id: 3,
        name: 'Diana',
        age: 27,
        skill: 'Vue'
    }
]

    const personList =  persons.map(person => <Person key={person.id}  person={person} />)
    return   <div>{nameList}</div>
   
}

export default NameList;