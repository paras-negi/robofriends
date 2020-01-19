import React from 'react';
const arr=['Bobocho','Thukku', 'KalaPeela'];

class Test extends React.Component {

    constructor(props){
        super(props);
        this.state={
            i:0
        }
    }

    inc=()=>{ 
        this.setState({i:this.state.i+1});  
  
    if(this.state.i===2){
        this.setState({i:0});
    }
    }
         

    render(){ 
       return(
           <div onClick={this.inc}>
               {arr[this.state.i]}
           </div>
       ); 
    }

}
export default Test;