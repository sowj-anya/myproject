import './navbar.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { Link } from '@mui/icons-material';
const Navbar = () => {
  const navigate= useNavigate();

  const onlogin=(event)=>{
    navigate('/login')
  }
  const onsignup=(event)=>{
    navigate('/signup')
  }
  return (
    <>
    <div className='navbar'>
        <div className='navContainer'>
          <span className='logo'><h1>Book My Stay</h1></span>
            <div className='navItems'>
                {/* <button className='navButton'>Register</button> */}

                {/* <Link to ='/signup'>   */}
                <button onClick={onlogin} className='navButton'>LogIn</button>
                <button onClick={onsignup} className='navButton'>Signup</button>
                {/* </Link> */}

            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar