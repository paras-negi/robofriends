import React from 'react';

const Searchbox= ({searchField, searchChange}) => {
    return(
        <div className= 'pa2'>
        <input type= 'search' 
        placeholder= 'search robots' 
        className= 'pa3 ba b---green bg-lightes-blue'
        onChange = 'searchChange'
        />
        </div>
    );
}

export default Searchbox;