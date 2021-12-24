import {useEffect} from 'react';
//React import လုပ်စရာမလို as we dun use jsx render
function useDocumentTitle(count) {
    useEffect(()=>{
        document.title = `You clicked ${count} times` 
    },[count])
}
//testing common function - its works!
export function useOther(){
    return true
}
export default useDocumentTitle;
