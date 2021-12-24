import React from 'react';
import './App.css';
import ArrayReduce from './components/ArrayReduce';
import ClassCounter from './components/ClassCounter';
import ClassCounterOne from './components/ClassCounterOne';
import ClassMouse from './components/ClassMouse';
import ComponentC from './components/ComponentC';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <ArrayReduce />
      {/* <UserContext.Provider  value = {"Vishwa"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentC />
        </ChannelContext.Provider>        
      </UserContext.Provider> */}
      
      {/*<DataFetching />
      <IntervalClassCounter />
      <IntervalHookCounter />
       <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}
       {/*<ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/*<HookCounterFour />
      <HookCounterThree />
      <HookCounterTwo />
      <HookCounter />
       <ClassCounter /> */}
      
    </div>
  );
}

export default App;
