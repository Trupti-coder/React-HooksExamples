function FocusInput(){
    return(
        <>
        <h3>useRef Hook Example</h3>
        <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>

        </>
    );
}
export default FocusInput;