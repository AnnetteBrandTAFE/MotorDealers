import React, { useState, useEffect } from 'react';
import ViewActiveDealers from './ViewActiveDealers';
import AddMotorDealer from './AddMotorDealer';
//import UpdateDealership from './UpdateDealership';




export default function App() {

  const [dealers, setDealers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/motorDealers')
      .then(response => response.json())
      .then(data => setDealers(data));
  }, []);

  const [view,setView] = useState(0);

  let views = [
    <ViewActiveDealers setView={setView} dealers={dealers} />,
    <AddMotorDealer addDealer={addDealer} />,
   //<UpdateDealership updateDealership={updateDealership} />
  ];

  function addDealer(d) {
    //add the new dealer to the collection
    setDealers([...dealers, d]);
    //display the list view again
    setView(0); 
  }

  // function updateDealer(d){
  //   //update the dealers info into the collection
  // }

  return (
    <div style={{ border: '1px solid black', padding: '5px', margin: '5px' }}>
      <h1>Dealer Vehicle Registration Scheme (DVRS) agreement</h1>
      <button onClick={()=>setView(1)}>Add Dealer</button>
      {views[view]}
    </div>
  );
}



