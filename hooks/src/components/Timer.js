import React, { useState, useEffect } from 'react';
function Timer(){

   let[count , setCount]=useState(0);

   useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

    return(
        <>
        <h3>useEffect Hook Example</h3>
        <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

        </>
    );
}
export default Timer;