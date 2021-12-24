import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
      this.state ={
          hasError: false
      }  
    }
    //// === error ဖမ်းဖို့
    static getDerivedStateFromError(error){
        return{
            hasError: true
        }
    }
    //// === React က အစကတည်းက erro ကို detail ပြပြီးသားမို့ ဒါက မလိုဘူး
    componentDidCatch(error,info){
        console.log(error);
        console.log(info);
    }

    render() {//// === error ဖမ်းမိရင် ပြမယ့် ui
        if (this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;