import React, { useState, useEffect } from 'react';
function Timer(){

   let[count , setCount]=useState(0);

   useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  
    return(
        <>
        

        </>
    );
}
export default Timer;