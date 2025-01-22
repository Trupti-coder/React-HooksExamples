import React, { useState, useCallback } from 'react';


// Button component
function Button({ handleClick }) {
    return <button onClick={handleClick}>Click me</button>;
  }
  
function MemoizedButton(){
    return(
        <>
        <p> useCallback Hook Example</p>
        </>
    );
}
export default MemoizedButton;