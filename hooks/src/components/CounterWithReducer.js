function CounterWithReducer(){
    return(
        <>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </>
    );
}
export default CounterWithReducer;