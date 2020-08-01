import React from 'react';

export default function UpdateDealership(props){
    return (
        <div style={{ border: '3px solid #3333ff', padding: '5px', margin: '5px'}}>
            <form></form>
            <h3>Dealership details</h3>
            <p><b>id: </b>{props.dealer.id}</p>   
            <p><b>Dealership Name: </b>{props.dealer.name}</p>   
            <p><b>Dealership Address</b></p>
            <p><b>Street Name: </b>{props.dealer.address.street}</p>   
            <p><b>Suburb: </b>{props.dealer.address.suburb}</p>   
            <p><b>Postcode: </b>{props.dealer.address.postcode}</p>  
            <p><b>Dealership Contact Details</b></p> 
            <p><b>phone: </b>{props.dealer.phone}</p>   
            <p><b>email: </b>{props.dealer.email}</p> 
            <br/>
            <p><b>Dealership Principal's Details</b></p>  
            <p><b>Name: </b>{props.dealer.dealerPrincipal.dpName}</p>    
            <p><b>Phone: </b>{props.dealer.dealerPrincipal.dpPhone}</p> 
            <p><b>Email: </b>{props.dealer.dealerPrincipal.dpEmail}</p> 
            <br/>
            <p><b>Security Admin's Details</b></p>  
            <p><b>Name: </b>{props.dealer.securityAdmin.saName}</p>   
            <p><b>Phone: </b>{props.dealer.securityAdmin.saPhone}</p>   
            <p><b>Email: </b>{props.dealer.securityAdmin.saEmail}</p>  
            <button onClick={()=>props.showUpdateDealerView(props.dealer)}>Update</button> 
            </div>
)}