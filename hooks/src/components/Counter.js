import { useState } from "react";

function Counter(){
    let[count,setCount]=useState(0);

    function funClick(){
        setCount(count+1);
    }

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