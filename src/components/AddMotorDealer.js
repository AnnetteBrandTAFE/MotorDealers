import React, { useState } from 'react';

export default function AddMotorDealer(props) {

    const [name, setName] = useState('');
    const [street, setStreet] = useState('');
    const [suburb, setSuburb] = useState('');
    const [state, setState] = useState('');
    const [postcode, setPostcode] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [dpName, setDpName] = useState('');
    const [dpPhone, setDpPhone] = useState('');
    const [dpEmail, setDpEmail] = useState('');
    const [saName, setSaName] = useState('');
    const [saPhone, setSaPhone] = useState('');
    const [saEmail, setSaEmail] = useState('');

    function sendAddDealerRequest(e) {
        e.preventDefault();
        let d = {
            name,
            street,
            suburb,
            state,
            postcode,
            phone,
            email,
            dpName,
            dpPhone,
            dpEmail,
            saName,
            saPhone,
            saEmail
        };

        fetch('http://localhost:4000/api/motorDealers', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(d),
        })
            .then((response) => response.json())
            .then((json) => {
               
                if (json.status === 200) {
                    props.addDealer(json.motorDealers);
                }
                else {
                    alert("There was an error");
                }
            })
        
    }

    return (
        <div>
            <h1>Add a New Motor Dealer</h1>
            <form id="addNewMotorDealer">
                <h2> Dealerships Details</h2>
                <div >
                    <label htmlFor="Dealership name">Please enter the Dealership name:</label>
                    <input placeholder="Dealership Name" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div >
                    <label htmlFor="Dealership address">Please enter the Dealership address:</label>
                    <input placeholder="e.g. 123 Bond Street" onChange={(e) => setStreet(e.target.value)} value={street} />
                </div>
                <div >
                    <label htmlFor="Dealership Suburb">Suburb: </label>
                    <input onChange={(e) => setSuburb(e.target.value)} value={suburb} />
                </div>
                <div >
                    <label htmlFor="Dealership State">State: </label>
                    <input onChange={(e) => setState(e.target.value)} value={state} />
                </div>
                <div >
                    <label htmlFor="Dealership Postcode">Postcode: </label>
                    <input onChange={(e) => setPostcode(e.target.value)} value={postcode} />
                </div>
                <div >
                    <label htmlFor="Dealership Contact">Please enter the Dealership phone number:</label>
                    <input onChange={(e) => setPhone(e.target.value)} value={phone} />
                </div>
                <div >
                    <label htmlFor="Dealership email">Please enter the Dealership email address:</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <h2> Dealer Principals Details</h2>
                <div >
                    <label htmlFor="DP name">Please enter the Dealer Principals Full Name:</label>
                    <input placeholder="e.John Doe" onChange={(e) => setDpName(e.target.value)} value={dpName} />
                </div>
                <div >
                    <label htmlFor="DP Contact">Please enter the Dealer Principals direct contact number:</label>
                    <input onChange={(e) => setDpPhone(e.target.value)} value={dpPhone} />
                </div>
                <div >
                    <label htmlFor="DP Email">Please enter the Dealer Principals direct email address:</label>
                    <input type="email" onChange={(e) => setDpEmail(e.target.value)} value={dpEmail} />
                </div>
                <h2> Security Admin Details</h2>
                <div >
                    <label htmlFor="SA Name">Please enter the Security Admin's Full Name:</label>
                    <input placeholder="e.g. Jane Doe" onChange={(e) => setSaName(e.target.value)} value={saName} />
                </div>
                <div >
                    <label htmlFor="SA Contact">Please enter the the Security Admin's direct contact number:</label>
                    <input onChange={(e) => setSaPhone(e.target.value)} value={saPhone} />
                </div>
                <div >
                    <label htmlFor="SA Email">Please enter the Security Admin's  direct email address:</label>
                    <input type="email" onChange={(e) => setSaEmail(e.target.value)} value={saEmail} />
                </div>
                <button onClick={sendAddDealerRequest}>Click To Add New Motor Dealer</button>
            </form>
        </div>
    )
}