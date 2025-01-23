
import './App.css';
import Counter from './components/Counter';
import CounterWithReducer from './components/CounterWithReducer';
import ExpensiveCalculationComponent from './components/ExpensiveCalculation';
import FocusInput from './components/FocusInput';
import MemoizedButton from './components/MemoizedButton';
import Timer from './components/Timer';

function App() {
  return (
    <>
    <Counter />
    <hr></hr>
    <Timer />
    <hr></hr>
    <CounterWithReducer />
    <hr></hr>
    <MemoizedButton />
    <hr></hr>
    <ExpensiveCalculationComponent />
    <hr></hr>
    <FocusInput />
    </>
  );
}

export default App;
