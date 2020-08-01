import React from 'react';

export default function DeleteADealership(props){
    return(
        <div style={{border:'1px solid blue', padding:'5px', margin: '5px'}}>
            <h1>Delete A Dealership</h1>
            
            <button onClick={props.toggleView}>Switch View</button>
        </div>

    )
}