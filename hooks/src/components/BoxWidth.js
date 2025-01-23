function BoxWidth(){
    return(
        <>
         <div ref={boxRef} style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}>
        Resize Me
      </div>
      <p>Box width: {boxWidth}px</p>
        </>
    );
}
export default BoxWidth;