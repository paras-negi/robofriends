import React from 'react';
//import {render} from '@testing-library/react';

class ErrorBoundry extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                hasError: false
            }
       }
    
//React 16
UNSAFE_componentDidCatch(error, info) {
    this.ListeningStateChangedEvent({hasError:true})
}

render(){
        if(this.state.hasError){
            return <h1>Oops! That's not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;