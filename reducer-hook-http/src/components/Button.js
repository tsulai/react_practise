import React from 'react';

function Button({handleClick, children}) {
    console.log('Rendering button - ', children);
    //props မှာ children ဆိုတာ opening နဲ့ clsoing tag နှစ်ခုကြားက ဟာတွေ
    return (
        <div>
          <button onClick={handleClick}>
              {children}
        </button>  
        </div>
    );
}

export default React.memo(Button);