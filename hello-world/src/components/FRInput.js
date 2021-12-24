import React from 'react';

// function FRInput(props) {
//     return (
//         <div>
//            <input type="text"></input> 
//         </div>
//     );
// }
//// Compare to Input.js - ဒီမှာက Component ကို အစကတည်းက forward Ref type လုပ်ထားလိုက်တော့ ယူသုံးတဲ့ parent component က ဒီကောင်ရဲ့ current ကို direct access လုပ်ခွင့်ရ 
//// === React.forwardRef ကို const မှာ assign လုပ်
//// React.forwardRefက component (arrow function) ကို parameter အဖြစ်လက်ခံ
//// when component is passed as the parameter to the createRef method, its receive "ref" attribute as its second parameter
const FRInput = React.forwardRef((props, ref) => {    
    return (
        <div>
            <input type="text" ref={ref}></input> 
        </div>
    );
   
})
export default FRInput;