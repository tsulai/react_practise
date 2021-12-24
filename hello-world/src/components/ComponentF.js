import React, { Component } from 'react';
import { UserConsumer } from './userContext';

class ComponentF extends Component {
    render() {
        return (
            // arrow function require
            // get context value and return UI JSX
            <UserConsumer>
                {
                username => {
                    return <div>Hello {username}</div>
                }

                }
            </UserConsumer>
               
        );
    }
}

export default ComponentF;