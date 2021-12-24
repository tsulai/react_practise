import React, {useState} from 'react';
import useDocumentTitle from './useDocumentTitle';

function DocTitleOne(props) {
    const [count, setCount] = useState(0)

   useDocumentTitle(count)
    
    return (
        <div>
            <button onClick={()=> setCount(count + 1)}>Click {count} times</button>
        </div>
    );
}

export default DocTitleOne;