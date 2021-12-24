import React, { Component } from 'react';
import PureComp from './PureComp'
import RegularComp from './RegularComp'
import MemoComp from './Memocomp'

class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name : 'Vishwa'
        }
    }
    componentDidMount ()  {
        setInterval(()=>{
            this.setState({name: 'Vishwa'})
        },2000)
    }
    
    render() {
        console.log('******************* Parent Component ************************');
        return (
            <div>
                ParentComp
                <MemoComp name={this.state.name}/>
                {/* <PureComp name ={this.state.name} />
                <RegularComp name = {this.state.name} /> */}
            </div>
        );
    }
}

export default ParentComp;