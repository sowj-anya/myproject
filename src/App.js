import React from 'react';

import { //BrowserRouter ,
Route,Routes,
  //Link 
} from 'react-router-dom';

import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotels from './pages/hotels/Hotels'; 
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Payment from './components/search item/Payment';
import Dublin from './components/featured/Dublin';
import Austin from './components/featured/Austin';
import Reno from './components/featured/Reno';
function App(){
    return (
      <>
        <Routes> 
                <Route path='/' element={<Home/>}/>
                {/* <Route path='/signup' element={<Signup/>}/> */}
                <Route path='/hotels' element={<List/>}/>
                <Route path='/hotels/:id' element={<Hotels/>}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/payment' element={<Payment/>}/>
                <Route path='/dublin' element={<Dublin/>}/>
                <Route path='/austin' element={<Austin/>}/>
                <Route path='/reno' element={<Reno/>}/>
            </Routes>
      </>
     
    )
}
export default App;