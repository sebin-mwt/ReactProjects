// import React from 'react'
// import { useState } from 'react';
// import './App.css'

// function App() {

//   let [count,setCount]=useState(0)
//   let [num,setNum] =useState()
//   // let count=0;

//   function Increase(){
//     let out = count+1;
//     setCount(out);
//     // console.log(out);
    
//   }

//   function Decrease(){
//     let out=count-1;
//     setCount(out);
//     // console.log(out);
//   }

//   return (

//     <>

//     <div className='container'>

//     <h1>Counter App</h1>

//       <input type="text" value={count} onChange={(e)=>{
        
//         console.log(e.target.value);  
//         setCount(Number(e.target.value));
        

//       }} placeholder='Enter Number'/>

//       <button onClick={Increase}>Increase</button>

//       <h3>{count}</h3>
      
//       <button onClick={Decrease}>Decrease</button>
        
//     </div>
    
//     </>
    
//   )
// }

// export default App 


import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component mounted ✅");

    return () => {
      console.log("Component unmounted ❌");
    };
  }, []); // empty array → run only once

  return <h2>Hello World</h2>;
}

export default App;
