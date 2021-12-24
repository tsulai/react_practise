import React from 'react'

const Hello =()=> {
    //// === these are jsx componet form 
    // return(
    //     <div className='dummyClass'>
    //         <h1>Hello Vishwas</h1>
    //     </div>
    // )
    //// === without using jsx
    //return React.createElement('div', null, '<h1>Hello Vishwas</h1>')
    //return React.createElement('div', null, 'h1','Hello Vishwas')
    return React.createElement(
        'div', 
        {id : 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Vishwas')
    )
}

export default Hello