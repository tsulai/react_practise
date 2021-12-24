import React from 'react';

function Columns(props) {
    const items = []
    return (
        //// === React.Fragment က key တစ်ခုထဲကိုပဲ attribute အနေနဲ့လက်ခံတယ်
        <>
            {
                items.map (item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Vishwas</td>
        </>
    );
}

export default Columns;