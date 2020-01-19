import React from 'react';

const Scroll = (props) =>{
    return (
        <div style= {{overFlowY:'scroll', border:'3px solid black', height:'1850px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;