import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: 'Vishwa'
        }
        console.log('LifeCycleB constructor')         
    }
    //// === static မပါရင် method ကို igonore လုပ်သွားမယ်
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleB componentDidMount');
    }
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate');
        return true
        //// === true ပြန်မှ နောက်ဟာကို ဆက်သွား
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate');
        return null 
    }
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate');
    }
    render() {
        console.log('LifeCycleB render');
        return (
            <div>
                LifeCycleB 
            </div>
        );
    }
}

export default LifeCycleB;