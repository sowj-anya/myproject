import React, {useState,useContext} from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DataContext from '../DataProvider';
const Login = () => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    const action = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );

    const navigate=useNavigate();
    const handle=()=>{
        navigate('/')
    }
    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");
    const {username1, setUsername1, setTrue} = useContext(DataContext);
  
    const handlepassword=(event)=>
    {
        setpassword(event.target.value);
    }
    const handleemail=(event)=>
    {
        setemail(event.target.value);

    }
    // const handleSubmit=(event)=>
    // {
    //    event.preventDefault();
    //    console.log(password,email)
    // }
    const handlelogin=async ()=>{
        // navigate('/')
        // console.log(number);
        console.log(email);
        console.log(password);
     
        navigate('/')
            const response=await axios.post('http://localhost:3001/posts',{
                // Number:number,
                Accno: email,
                phoneno: password,
            });
      
    }

    return (
        <>
          <div className="App">
            <form method='POST'  className="login-form" onSubmit={handlelogin}>
                <h2>Login</h2>
                <div className="input__fields">
                    <label htmlFor="email">Email Id:</label>
                    <input type="email" name="email" id="email" value={email} onChange={handleemail}
                    placeholder="email"
                    required />
                </div>
                <div className="input__fields">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" value={password} onChange={handlepassword}required 
                    minLength={8} maxLength={15}
                    placeholder="password" />
                </div>
                <p>Forget password?</p>

                <Button onClick={handleClick}>Submit</Button>
               <Snackbar
               open={open}
               autoHideDuration={6000}
               onClose={handleClose}
               message={email}
               action={action}
               /><br></br>
<br></br>
                <button type="submit">Log in</button>
    
            </form>
          </div>
        </>
    )
}

export default Login;