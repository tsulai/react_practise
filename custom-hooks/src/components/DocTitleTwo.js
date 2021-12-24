import React, {useState} from 'react';
import useDocumentTitle, { useOther } from './useDocumentTitle';

function DocTitleTwo(props) {
    const [count, setCount] = useState(0)

   useDocumentTitle(count)
    
    return (
        <div>
            <button onClick={()=> setCount(count + 1)}>Click {count} times</button>
            {/* testing common func: */}
            {/* {useOther()? 'true' : 'false'} */}
        </div>
    );
}

export default DocTitleTwo;