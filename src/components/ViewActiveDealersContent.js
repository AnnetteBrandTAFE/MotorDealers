import React, { useState, useEffect } from 'react';
import DisplayDealer from "./DisplayDealer";

export default function ViewActiveDealersContent(props) {

    return (
        <div>
            <h1>List of active Motor Dealers</h1>
            <h3>There are <b> {props.dealers.length} </b>active motor dealers</h3>
            <br />
            {props.dealers.map((d) => <DisplayDealer dealer={d} key={d.id} showUpdateDealerView={props.showUpdateDealerView} />)}         
        </div>
    )
}