import React, {useReducer} from 'react'
import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterTwoParctise from './components/CounterTwoParctise';
import CounterThree from './components/CounterThree';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
//3
export const CountContext = React.createContext()

//1
const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment': 
            return state + 1
        case 'decrement': 
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
function App() {
  //2
  const [count, dispatch] = useReducer(reducer, initialState)
  //App မှာ ဘာ action မှ dispatch မလုပ် - nested component တွေကမှ action တွေ dispatch မှာ
  //will use the context to provide the count value and dispatch methods and consume the same from nested component
  return (
    // 4
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div className="App">
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
        {/*<CounterTwo />
        <CounterOne /> */}
      </div>
    </CountContext.Provider>
  );
}

export default App;
