import React from 'react';
import './searchitem.css';
// import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const SearchItem1 = () => {

  const navigate=useNavigate();

  return (
    <div className='searchItem'>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwXVqXmSWbqPiNZ4iXwoe9oXxPuiYq7RMHg&usqp=CAU" alt="" className="siImg" />
       <div className="siDesc">
       <h1 className="siTitle">Mayflower Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
       </div>
       <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>9.0</button>
        </div>
        <div className="siDetailTets">
          <div className="siPrice">Rs8500</div>
          <span className="siTaiOp">Includes taxes and fees</span>
          {/* <button className = "siCheckButton">BOOK MY STAY</button> */}
          {/* <Button style={{color:'white'}} className = "siCheckButton"><h1>Book my stay</h1></Button> */}
          <button className = "siCheckButton" onClick={()=>{
            navigate('/payment');
          }}>Book my stay</button>
        </div>
       </div>
    </div>
  )
}

export default SearchItem1