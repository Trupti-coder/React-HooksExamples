
import './App.css';
import Counter from './components/Counter';
import CounterWithReducer from './components/CounterWithReducer';
import Timer from './components/Timer';

function App() {
  return (
    <>
    <Counter />
    <hr></hr>
    <Timer />
    <hr></hr>
    <CounterWithReducer />
    </>
  );
}

export default App;
