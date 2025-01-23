import { useLayoutEffect, useRef, useState } from "react";

function BoxWidth(){

    const boxRef = useRef();
  const [boxWidth, setBoxWidth] = useState(0);

  useLayoutEffect(() => {
    setBoxWidth(boxRef.current.offsetWidth);
  }, []);
    return(
        <>
        <h3>useLayoutEffect Hook Example</h3>
         <div ref={boxRef} style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}>
        Resize Me
      </div>
      <p>Box width: {boxWidth}px</p>
        </>
    );
}
export default BoxWidth;