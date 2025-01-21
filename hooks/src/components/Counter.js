import { useState } from "react";

function Counter(){
    let[count,setCount]=useState();

   

    
    return(
        <>
        <h3>useState Hook Example</h3>
        <div>
            <p>you clicked {count} times</p>
            <button onClick={funClick}>Click</button>
        </div>
        </>
    );
}
export default Counter;