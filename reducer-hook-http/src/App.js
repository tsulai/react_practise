import logo from './logo.svg';
import './App.css';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingOnePractise from './components/DataFetchingOnePractise';
import DataFetchingTwo from './components/DataFetchingTwo';
import DataFetchingTwoPractise from './components/DataFetchingTwoPractise';
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';

function App() {
  return (
    <div className="App">
      <ClassTimer />
      <HookTimer />
      {/* <FocusInput /> */}
      {/* <Counter/> */}
      {/* <ParentComponent /> */}
      {/* <DataFetchingTwoPractise /> */}
      {/* <DataFetchingTwo /> */}
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingOnePractise /> */}
    </div>
  );
}

export default App;
