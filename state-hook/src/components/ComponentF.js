import React from 'react';
import {UserContext, ChannelContext} from '../App'

function ComponentF(props) {
    return (
        <div>
            <UserContext.Consumer>
                {
                    username => {
                        return(
                        <ChannelContext.Consumer>
                            {
                                channel => {
                                    return <div>Hello {username}, from {channel}</div>
                                }
                            }
                        </ChannelContext.Consumer>   
                        )                     
                    }
                }
            </UserContext.Consumer>            
        </div>
    );
}

export default ComponentF;