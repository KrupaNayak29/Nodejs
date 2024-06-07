import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from 'react-router-dom';
//import userEvent from "@testing-library/user-event";
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[address,setAddress]=useState("");
    const[error,setError]=React.useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/");
        }
    })
     
     function registerHandle(e)
     {
        if(name.length<3||password.length<6||email.length<10||address.length<15)
        {
            alert("please enter valid input")
        }
        else
        {
            alert("Sucessfully Registered")
        }
     }

     function nameHandler(e){
        let item=e.target.value;
        if(item.length<3)
        {
            setError(true);
        }
        else{
            setError(false);
        }
        setName(item)
     }

    function serveruser() {
        console.warn({ name, email, password,address });
        let data = { name, email, password ,address}
        fetch("http://localhost:9022/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.warn("result", result);
            localStorage.setItem("user", result);
            navigate("/");
        })
    }

    return (

        <div className="register">
            <h1>Register</h1>
            <form onSubmit={registerHandle}>
            <input className="inputbox" type="text" value={name} onChange={nameHandler} placeholder="Enter Name" />
            {error && !name&&<span className="invalid-input">Enter valid name</span>}
            <input className="inputbox" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            {error && !email&&<span className="invalid-input">Enter valid Email</span>}
            <input className="inputbox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            {error && !password&&<span className="invalid-input">Enter valid Password</span>}
            UserType : <input type="radio"/>Customer
            <input type="radio"/>Seller
            <input className="inputbox" type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Enter Address"/>
            {error && !address&&<span className="invalid-input">Enter valid Address</span>}
            <button onClick={serveruser} className="Appbutton" type="button">Sign Up</button>
            </form>
        </div>
    )
}
export default Signup;