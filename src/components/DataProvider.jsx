import React ,{useState,createContext} from 'react'

import Login from './login/Login';
import FadeMenu1 from './FadeMenu1';

const DataContext =createContext({});

export const DataProvider= () => {
  
  const[username,setUsername]=useState('');
  const[True,setTrue]=useState(false);
  const UserValue ={
    username,
    setUsername,
    setTrue
}
  return (
    <DataContext.Provider value={UserValue}>
        {True? <FadeMenu1/>:<Login/>}
    </DataContext.Provider>
  )
};

export default DataContext;