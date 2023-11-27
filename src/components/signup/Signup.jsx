import React, {useState} from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
const Signup = () => {

    const navigate=useNavigate();
    const handle=()=>{
        navigate('/')
    }

    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");
    const [username,setusername]=useState("");
 
    const handlepassword=(event)=>
    {
        setpassword(event.target.value);
    }
    const handleusername=(event)=>
    {
        setusername(event.target.value);
    }
    const handleemail=(event)=>
    {
        setemail(event.target.value);
    }
    
    const handleSubmit=(event)=>
    {
       event.preventDefault();
       console.log(password,email,username)
    }
    return (
        <>
          <div className="App">
            <form method='POST' onSubmit={handleSubmit} className="login-form">
                <h2>Signup</h2>
                <div className="input__fields">
                    <label htmlFor="username">Username:</label>
                    <input type="username" name="username" id="username" onChange={handleusername}required maxLength="16"
                     placeholder="username"/>
                </div>
                <div className="input__fields">
                    <label htmlFor="email">Email Id:</label>
                    <input type="email" name="email" id="email" onChange={handleemail}required
                     placeholder="email"/>
                </div>
                <div className="input__fields">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={handlepassword}required minLength={8} maxLength={15}
                     placeholder="password" />
                </div>
                <div className="input__fields">
                    <label htmlFor="password">Confirm Password:</label>
                    <input type="password" name="password" id="password" onChange={handlepassword}required minLength={8} maxLength={15} 
                     placeholder="confirm password"/>
                </div>
                
                <button onClick={handle} type="submit">Signup</button>
            </form>
          </div>
        </>
    )
}

export default Signup;