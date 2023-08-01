import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {


  // Get the time using new Date()

  let time = new Date().toLocaleTimeString();

  // Create a state to store time ctime =  current time and setCtime = set current time
  let [ctime, setCtime] = useState(time);

  // Create a function to update time every second
  setInterval(()=>{
    
     time = new Date().toLocaleTimeString();

    setCtime(time);


  },1000)

  return (
  <>

 
   
   <div className="main">

   <h1>{ctime}</h1>


   </div>




  </>
  );
}

export default App;
