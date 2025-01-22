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
        <p> useCallback Hook Example</p>
        <p>Count: {count}</p>
      {/* Render Button component */}
      <Button handleClick={memoizedHandleClick} />
        </>
    );
}
export default MemoizedButton;