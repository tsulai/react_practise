import React from 'react';
//// === {} ဆို တစ်ခါတည်း props ကို destructure လုပ်လိုက်လို့ရ
function Memocomp({name}) {
    console.log('Rendering Memo Component');
    return (
        <div>
            {name}
        </div>
    );
}

export default React.memo(Memocomp);