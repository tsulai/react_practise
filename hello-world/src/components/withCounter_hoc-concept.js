import React from 'react'
//// === Higher Order Components - accept Original Component as param
//// concept is this -> const EnhancedComponent = higherOrderComponent(Origianl Component)
const UpdatedComponent = (OriginalComponent) =>{
    // hoc က လုပ်မှာက new component
    class NewComponent extends React.Component{
        constructor(props) {
            super(props);
            this.state={
              count: 0  
            }
        }
        incrementCount = () =>{
            //// === setState ကို func argument နဲ့ pass - အဲ့ func က prevState ကို para အဖြစ်လက်ခံပြီး retunr new state
            this.setState(prevState => {
                return { count: prevState.count + 1}
            })
        }
        render(){
            return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} />
        }
    }
    // arrow function က return ပြန်မှာက enhanced component
    return NewComponent
}
export default UpdatedComponent