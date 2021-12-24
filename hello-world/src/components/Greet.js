import React from 'react'

//// === traditional func
// function Greet(){
//     return <h1>Hello Vishwas</h1>
// }

//// === es6 func
// const Greet = (props) => {
//     console.log(props)    
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
//         </div>
    
//     )
// }
//// === Destructuring props type 1
// const Greet = ({name, heroName}) => {
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
            
//         </div>
    
//     )
// }
//// === Destructuring props type 2
const Greet = (props) => {
    const {name, heroName} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            
        </div>
    
    )
}
export default Greet