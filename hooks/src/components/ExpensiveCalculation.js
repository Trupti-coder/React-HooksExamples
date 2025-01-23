import { useMemo, useState } from "react";

function ExpensiveCalculation(num){
    console.log('Calculating...');
  return num * 2;
}

// ExpensiveCalculation Component using useMemo
function ExpensiveCalculationComponent() {
    const [count, setCount] = useState(0);
  
    const doubled = useMemo(() => ExpensiveCalculation(count), [count]);
  
    return (
      <div>
        <p>Count: {count}</p>
        <p>Doubled: {doubled}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
  export default ExpensiveCalculationComponent;