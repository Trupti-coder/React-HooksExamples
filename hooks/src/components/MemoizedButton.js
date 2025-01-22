import React, { useState, useCallback } from 'react';


// Button component
function Button({ handleClick }) {
    return <button onClick={handleClick}>Click me</button>;
  }

 

function MemoizedButton(){

    const [count, setCount] = useState(0);

  const memoizedHandleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

    return(
        <>
        <h3> useCallback Hook Example</h3>
        <p>Count: {count}</p>
      {/* Render Button component */}
      <Button handleClick={memoizedHandleClick} />
        </>
    );
}
export default MemoizedButton;