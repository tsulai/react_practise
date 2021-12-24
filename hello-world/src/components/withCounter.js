import React from 'react'
//// === Higher Order Components - accept Original Component as param
//// concept is this -> const EnhancedComponent = higherOrderComponent(Origianl Component)
///// -> const updatedComponent = higherOrderComponent(Origianl Component)
const withCounter = (WrappedComponent, incrementCounter) =>{
    // hoc က လုပ်မှာက new component 
    // class naming convention က capital နဲ့ WithCounter
    class WithCounter extends React.Component{
        constructor(props) {
            super(props);
            this.state={
              count: 0  
            }
        }
        incrementCount = () =>{
            //// === setState ကို func argument နဲ့ pass - အဲ့ func က prevState ကို para အဖြစ်လက်ခံပြီး retunr new state
            this.setState(prevState => {
                return { count: prevState.count + incrementCounter}
            })
        }
        render(){
            //// props is passed to the hoc not the component which is <WrappedComponet>
            console.log(this.props.name);
            return <WrappedComponent 
            count={this.state.count} 
            incrementCount={this.incrementCount} 
            // pass down the remaining props to the component using spread operator 
            {...this.props}
            />
        }
    }
    // arrow function က return ပြန်မှာက enhanced component
    return WithCounter
}
export default withCounter