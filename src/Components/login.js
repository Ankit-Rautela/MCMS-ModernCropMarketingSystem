import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate("/")
        }
    })

    const handleLogin = async () => {
        console.warn(email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result)
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/profile")
        } else {
            alert("Please Enter Correct Details");
        }
    }
    return (
        <div>
            <h2><b>Login Page</b></h2>
            <form>
                <div className="form-group mt-2 shadow-sm p-4 mb-4 bg-white">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group mt-2 shadow p-4 mb-4 bg-white ">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button onClick={handleLogin} type="button" className="btn btn-primary mt-2">Log In</button>
            </form>
        </div>
    )
}

export default Login;