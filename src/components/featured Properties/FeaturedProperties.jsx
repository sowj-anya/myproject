import React from 'react'
import './featuredProperties.css';
const FeaturedProperties = () => {
  return (
    <div className='fp'>
        <div className='fpItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from Rs.8,000</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className='fpItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1" alt="" className="fpImg" />
        <span className="fpName">Leman Locke</span>
        <span className="fpCity">London</span>
        <span className="fpPrice">Starting from Rs.7,500</span>
        <div className="fpRating">
            <button>9.0</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className='fpItem'>
        <img src="https://imgs.search.brave.com/5cc6-qGU9aaGja4CdKUG2uZ2j_rQBG2C9PF9A5EcNKA/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/SXl5U3JOQkJkSkJm/WWV5RkhkTVN3SGFE/dCZwaWQ9QXBp" alt="" className="fpImg" />
        <span className="fpName">Villa Domnia</span>
        <span className="fpCity">Croatia</span>
        <span className="fpPrice">Starting from Rs.9,500</span>
        <div className="fpRating">
            <button>9.1</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className='fpItem'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Fa3bNIJp_GSHvRPh5uOHV-8wjesV0sQzNw&usqp=CAU" alt="" className="fpImg" />
        <span className="fpName">Downtown Synagogue</span>
        <span className="fpCity">Budapest</span>
        <span className="fpPrice">Starting from Rs.10,000</span>
        <div className="fpRating">
            <button>9.2</button>
            <span>Fabulous</span>
        </div>
        </div>
    </div>
  )
}

export default FeaturedProperties