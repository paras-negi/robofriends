import React from 'react';
import Card from '../components/Card';



const Cardlist = ( {robots} ) => {
    //if(true){
        //throw new Error('NOOOOO!');
    //}
    const cardComponent = robots.map((users, i) => {
        return(
        <Card key= {i} id= {robots[i].id} name= {robots[i].name} email= {robots[i].email}/>
        );
})
    return (
    <div>
    {cardComponent}
    </div>
    );
}

export default Cardlist;