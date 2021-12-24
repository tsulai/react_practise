import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class PortalDemo extends Component {
    render() {
        return ReactDOM.createPortal (            
            <h1>Portal Demo</h1>,
            document.getElementById('portal-root')
            
        );
    }
}

export default PortalDemo;