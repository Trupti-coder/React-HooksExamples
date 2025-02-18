import React, { useReducer } from 'react';

// Reducer function to handle state changes
function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }


function CounterWithReducer(){
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return(
        <>
        <h3>useReducer Hook Example</h3>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </>
    );
}
export default CounterWithReducer;