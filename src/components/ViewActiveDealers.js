import React, { useState, useEffect } from 'react';
import UpdateDealership from './UpdateDealership'; 
import ViewActiveDealersContent from './ViewActiveDealersContent';

export default function ViewActiveDealers(props){
 
    const [updateView,setUpdateView] = useState(<div></div>);

    function showUpdateDealerView(d){
        setUpdateView(<UpdateDealership dealer={d}/>); 
        setShowListView('none');
        setShowUpdateView('block'); 
    }
    
    const [showListView,setShowListView] = useState('block'); 
    const [showUpdateView,setShowUpdateView] = useState('none'); 

    return(
        <div>
            <div style={{display:showListView}}>
                <ViewActiveDealersContent dealers={props.dealers} showUpdateDealerView={showUpdateDealerView}/>
            </div>
            <div style={{display:showUpdateView}}>
                {updateView}
            </div>
        </div>
    )
}