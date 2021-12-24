import React from 'react';
//// === Props မှာ တွန့်ကွင်းပါ ပါ for array obj - If not, not working

function Person({person}) {
    return (
        <div>
            <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}.</h2>
        </div>
    );
}

export default Person;