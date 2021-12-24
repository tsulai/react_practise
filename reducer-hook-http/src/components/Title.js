import React from 'react';

function Title(props) {
    console.log('Render Title');
    return (
        <div>
            <h2>useCallBack Hook</h2>
        </div>
    );
}

export default React.memo(Title);