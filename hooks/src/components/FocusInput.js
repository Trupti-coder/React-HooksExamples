import { useRef } from "react";

function FocusInput(){
    const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };
    return(
        <>
        <h3>useRef Hook Example</h3>
        <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>

        </>
    );
}
export default FocusInput;