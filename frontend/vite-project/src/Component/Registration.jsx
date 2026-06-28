import React from "react";
import { useState } from "react";
import axios from 'axios'
const Registration = (()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword]  = useState("")

    const registration = async()=>{
        try{
            const res = await axios.post("http://localhost:5000/api/auth/registration", {name, email, password})
            localStorage.setItem("token", res.data.token)
            alert("Registration Successful...")
        }catch(err){
            alert(err.response.data.message)
        }
    }
    return(
        <div className="main" style={{ height:"100vh", width:"100vw", backgroundColor:"pink" }}>
            <h1>Registration Page</h1>
            <div className="Login" style={{border:"1px solid white "}}>
                <input type="name" onChange={(e)=>setName(e.target.value)} placeholder="Enter your name..." />
                <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email..." />
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password..." />
                <button onClick={registration}>Submit</button>
            </div>
        </div>
    )
})
export default Registration;