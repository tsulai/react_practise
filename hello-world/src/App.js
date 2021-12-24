import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Hello from './components/Hello'
import Counter_tuto11 from './components/Counter_tuto11'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import './appStyles.css'
import Styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifeCycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter from './components/Counter'
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';


function App() {
  return (
    <div className="App">
      <UserProvider value ="Su Lai">
        <ComponentC />
      </UserProvider>
      {/* <Counter>
        {(count, incrementCount)=>(
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter> 
       {(count, incrementCount)=>(
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? "Vishwa" : "Guest"} /> */}
      {/*<ClickCounter name="Vishwa" />
      <HoverCounter />
       Error ဖြစ်ရင် <ErrorBoundry> ...</ErrorBoundry> ထဲကဟာတွေ မပြဘူး၊ out of ErrorBoundry တွေတော့ဆက်ပြမယ် */}
      {/* တစ်ခုမှားတာနဲ့ ကျန်၂ခု ပါ မပြဘူး၊ same <ErrorBoundry> ထဲမှာမို့ */}
      {/* <ErrorBoundry>
        <Hero heroName='Batman'/>
        <Hero heroName='Superman'/>
        <Hero heroName='Joker'/>
      </ErrorBoundry> */}
      {/* component 1ခုခြင်းစီကို wrap လုပ်တာပိုကောင်း */}
      {/* <ErrorBoundry>
        <Hero heroName='Batman'/>
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName='Superman'/>
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName='Joker'/>
      </ErrorBoundry> */}

      {/*<PortalDemo />
      <FRParentInput />
      <FocusInput />
      <RefsDemo />
      <ParentComp />
      <Table />
      <FragmentDemo />
      <LifecycleA />
       <Form />
      <h1 className="error">Error</h1>
      <h1 className={Styles.success}>Success</h1>
      <Inline/>
      <StyleSheet primary={true} />
      <NameList />
      <UserGreeting />
      <ParentComponent />       
      <Greet name="Clark" heroName="Superman">
         <button name="Action">Action</button>
      </Greet>
      <Welcome name="Bruce" heroName="Batman"/> 
        <Greet name="Bruce" heroName="Batman">
         <p>This is children props</p>
        </Greet>
       
       <Greet name="Diana" heroName="Wonder Woman"/> 
       <Welcome name="Bruce" heroName="Batman"/> 
       <Message/>
       <Counter_tuto11 addValue="10"/>
       <FunctionClick/>
       <ClassClick />
       <EventBind/>*/}
    </div>
  );
}

export default App;
