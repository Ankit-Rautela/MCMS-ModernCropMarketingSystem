import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    // useNavigate is a hook use to redirect one page to another
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    })

    const collectData = async () => {
        console.log(name, email, password, phone, address);
        // Fetch is core module of javascript to intergrate API 
        // Fetch return promises and we know that if any function return promises then you can use async and await
        let result = await fetch("http://localhost:5000/register", {
            // TO save data we always use post method
            method: "post",
            // API only take object by JSON Stringify and it is a function
            body: JSON.stringify({ name, email, password, phone, address}),
            // only need one header
            headers: {
                'Content-Type': "application/json"
            },
        })
        // result is in readable string so we have to use json() function which return promises for that we use await
        result = await result.json();
        console.log(result);
        // LocalStorage
        localStorage.setItem("user", JSON.stringify(result));
        // Put Condition if result exits then navigate to home page
        if (result)
            navigate('/profile')
    }


    return (
        <div>
            <h2><b>Register as Farmer</b></h2>
            <form>
                <div className="form-group mt-2 shadow-sm p-4 mb-4 bg-white">
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter your name"
                        value={name} onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group mt-2 shadow-sm p-4 mb-4 bg-white">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your e-mail"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group mt-2 shadow-sm p-4 mb-4 bg-white">
                    <input type="number" className="form-control" id="exampleInputPhone1" aria-describedby="phoneHelp" placeholder="Enter your phone number"
                        value={phone} onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="form-group mt-2 shadow-sm p-4 mb-4 bg-white">
                    <input type="text" className="form-control" id="exampleInputAddress1" aria-describedby="addressHelp" placeholder="Enter your address"
                        value={address} onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="form-group mt-2 shadow p-4 mb-4 bg-white ">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button onClick={collectData} type="button" className="btn btn-primary mt-2">Sign Up</button>
            </form>

        </div>
    )
}
export default SignUp

// Local Storage
// When we receive data from API and we want to store data even after refesh page this can we achive by storing that data in local storage
// In Application section there is a another separate section for local storage
// Note: if we close the browser even after that our data is still in local storage for long time.


// Private Component
// if we want put some condition on comopents we can do with private components.